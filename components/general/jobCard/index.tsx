import React from 'react'
import Image from 'next/image';
import { chevronRightIcon, clock5Icon, locationBlueIcon } from '@/public/assets/landing/career';

interface Job {
    id: string | number;
    title: string;
    department: string;
    description: string;
    techStack?: string;
    isRemote: boolean;
    location: string;
    type: string;
}

interface JobCardProps {
    job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
    return (
        <div
            key={job.id}
            className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow space-y-4"
        >
            <div className="flex justify-between items-start flex-col md:flex-row gap-4">
                <div className='flex items-center gap-3'>
                    <h2 className="text-2xl font-semibold">{job.title}</h2>
                    <span className="inline-block px-3 py-1 text-sm bg-gradient-to-r from-[#D5E5FE] to-[#EBEDFF] rounded-full text-[#070C47]">
                        {job.department}
                    </span>
                </div>
                <div className="flex items-center gap-3 cursor-pointer" onClick={() => {
                    localStorage.setItem('job', JSON.stringify(job));
                    window.open(`/apply?jobId=${job.id}`, '_blank')
                }}>
                    <button className='font-medium'>Apply Now</button>
                    <Image src={chevronRightIcon} alt='apply' />
                </div>
            </div>

            <p className="text-[#494949] text-base max-w-[70%]">{job.description}</p>

            {job.techStack && (
                <p><span className='font-medium'>Tech Stack: </span> <span className='text-[#494949]'>{job.techStack}</span></p>
            )}

            <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-3">
                    <Image alt='location' src={locationBlueIcon} />
                    <span>{job.location}</span>
                </div>
                <div className="flex items-center gap-3">
                    <Image alt='clock' src={clock5Icon} />
                    <span>{job.type}</span>
                </div>
            </div>
        </div>
    )
}

export default JobCard