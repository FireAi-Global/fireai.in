'use client';
import React from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { clock5Icon, locationBlueIcon } from '@/public/assets/landing/career';
import Button from '@/components/general/buttons';

interface Job {
  id: string | number;
  title: string;
  department: string;
  description: string;
  techStack?: string;
  isRemote: boolean;
  location: string;
  type: string;
  Compensation?: string;
  Experience?: string;
  role?: string[];
  skills?: string[];
}

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  isVisible: boolean;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, type, isVisible, onClose }) => {
  React.useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';
  const icon = type === 'success' ? '✓' : '✗';

  return (
    <div className={`fixed top-4 right-4 ${bgColor} text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center gap-2 transform transition-all duration-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
      <span className="text-lg font-bold">{icon}</span>
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-white hover:text-gray-200 font-bold text-lg"
      >
        ×
      </button>
    </div>
  );
};

const JobDetailsAndApply: React.FC = () => {
  const searchParams = useSearchParams();
  const jobId = searchParams.get('jobId');

  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    phone: '',
    city: 'Mumbai',
    country: 'India',
    resume: ''
  });

  const [toast, setToast] = React.useState<{
    isVisible: boolean;
    message: string;
    type: 'success' | 'error';
  }>({
    isVisible: false,
    message: '',
    type: 'success'
  });

  const [job, setJob] = React.useState<Job | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  React.useEffect(() => {
    const storedJob = localStorage.getItem('job');
    if (storedJob) {
      try {
        const parsedJob = JSON.parse(storedJob);

        const processedJob: Job = {
          ...parsedJob,
          role: parsedJob.role
            ? parsedJob.role.split('\\n').map((item: string) => item.trim()).filter((item: string) => item)
            : [],
          skills: parsedJob.skills
            ? parsedJob.skills.split('\\n').map((item: string) => item.trim())
            : []
        };

        if (processedJob.id.toString() === jobId) {
          setJob(processedJob);
        }
      } catch (error) {
        console.error("Error parsing job data:", error);
      }
    }
    setLoading(false);
  }, [jobId]);
  console.log(loading)

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({
      isVisible: true,
      message,
      type
    });
  };

  const hideToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const sheetUrl = 'https://script.google.com/macros/s/AKfycbyau1bbIcEfZRjO_7r-LkVcQFBiEBpHIKR2mnXlFsuk86v5F_n31ClKHY5ZIuOcX4C5XQ/exec';

    try {
      const response = await fetch(sheetUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `FullName=${encodeURIComponent(formData.fullName)}&Email=${encodeURIComponent(formData.email)}&Phone=${encodeURIComponent(formData.phone)}&City=${encodeURIComponent(formData.city)}&Country=${encodeURIComponent(formData.country)}&Resume=${encodeURIComponent(formData.resume)}&JobName=${encodeURIComponent(job!.title)}&AppliedAt=${new Date().toISOString()}`
      });

      if (response.ok) {
        const data = await response.text();
        console.log("Success:", data);

        setFormData({
          fullName: '',
          email: '',
          phone: '',
          city: 'Mumbai',
          country: 'India',
          resume: '',
        });
        localStorage.removeItem('job');

        showToast('Application submitted successfully! We will get back to you soon.', 'success');
      } else {
        throw new Error('Failed to submit application');
      }
    } catch (error) {
      console.error("Error:", error);
      showToast('Error submitting application. Please try again later.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!job) return <div className="p-6 text-center">Job not found.</div>;

  return (
    <>
      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={hideToast}
      />

            <div className="flex flex-col md:flex-row justify-between gap-10 p-4 md:pt-32 md:px-[72px]">
                {/* Left Section – Job Details */}
                <div className="md:w-[60%] space-y-6 mt-20 mb-10 md:mt-0">
                    <h1 className="text-2xl font-semibold">{job.title}</h1>
                    <p className="text-[#494949]">{job.description}</p>

                    {job.techStack !== "" && (
                        <p>
                            <span className="font-semibold">Tech Stack: </span>
                            <span className="text-[#494949]">{job.techStack}</span>
                        </p>
                    )}

                    <div className="flex items-center gap-6 flex-wrap text-[#080609]">
                        <div className="flex items-center gap-2">
                            <Image src={locationBlueIcon} alt="location" />
                            <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image src={clock5Icon} alt="clock" />
                            <span>{job.type}</span>
                        </div>
                    </div>

                    {/* Roles */}
                    {Array.isArray(job?.role) && job?.role?.length > 0 && (
                        <div>
                            <h2 className="text-2xl font-semibold mt-9 mb-6">What will you be doing?</h2>
                            <ul className="list-disc list-inside space-y-5 text-[#494949]">
                                {job.role.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* Skills */}
                    {Array.isArray(job?.skills) && job?.skills?.length > 0 && (
                        <div>
                            <h2 className="text-2xl font-semibold mt-9 mb-6">What you will need to bring to the table?</h2>
                            <ul className="list-disc list-inside space-y-5 text-[#494949]">
                                {job.skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    <div className="pt-4 space-y-4 text-[#21263C]">
                        {/* <div className='flex items-center gap-3'><Image height={20} width={20} alt='experience' src={carryBagIconBlue} /><strong>Compensation:</strong> {job.Compensation || 'Not to be disclosed'}</div> */}
                        <div className='flex items-center gap-3'><Image height={20} width={20} alt='experience' src={clock5Icon} /><strong>Experience:</strong> {job.Experience || 'Not specified'}</div>
                        <div className='flex items-center gap-3'><Image height={20} width={20} alt='experience' src={locationBlueIcon} /><strong>Location:</strong> {job.isRemote ? 'Remote' : job.location}</div>
                    </div>
                </div>

                {/* Right Section – Apply Form */}
                <div className="md:w-[35%] w-full h-fit border border-[#DADADA] rounded-lg p-6 space-y-8">
                    <h2
                        className="text-xl font-semibold bg-clip-text text-transparent"
                        style={{
                            backgroundImage: 'linear-gradient(273.2deg, #000000 64.19%, #0169FD 80.5%, #000000 83.44%, #0600A3 92.29%, #000000 100.3%)'
                        }}
                    >
                        Apply now
                    </h2>
                    <form className="space-y-4" onSubmit={handleFormSubmit}>
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-black mb-2">Full Name</label>
                            <input
                                type="text"
                                id="fullName"
                                placeholder="Your full name"
                                value={formData.fullName}
                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                className="w-full border rounded-md p-2 border-[#4D5E75]"
                                required
                                disabled={isSubmitting}
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-black mb-2">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full border rounded-md p-2 border-[#4D5E75]"
                                required
                                disabled={isSubmitting}
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-black mb-2">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                placeholder="+91 9876543210"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full border rounded-md p-2 border-[#4D5E75]"
                                required
                                disabled={isSubmitting}
                            />
                        </div>

                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="w-full">
                                <label htmlFor="city" className="block text-sm font-medium text-black mb-2">City</label>
                                <select
                                    id="city"
                                    value={formData.city}
                                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                    className="w-full border rounded-md p-2 border-[#4D5E75]"
                                    disabled={isSubmitting}
                                >
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Bangalore">Bangalore</option>
                                    <option value="Hyderabad">Hyderabad</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Gurugram">Gurugram</option>
                                    <option value="Noida">Noida</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>

                            <div className="w-full">
                                <label htmlFor="country" className="block text-sm font-medium text-black mb-2">Country</label>
                                <select
                                    id="country"
                                    value={formData.country}
                                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                    className="w-full border rounded-md p-2 border-[#4D5E75]"
                                    disabled={isSubmitting}
                                >
                                    <option value="India">India</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="resume" className="block text-sm font-medium text-black mb-2">Your resume link</label>
                            <input
                                type="text"
                                id="resume"
                                className="w-full border rounded-md p-2 border-[#4D5E75]"
                                placeholder="Paste your resume link here"
                                value={formData.resume}
                                onChange={(e) => setFormData({ ...formData, resume: e.target.value })}
                                required
                                disabled={isSubmitting}
                            />
                        </div>

                        <Button
                            variant="primary"
                            className="w-full"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default JobDetailsAndApply;