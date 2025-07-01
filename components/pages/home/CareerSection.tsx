'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { careerImage, emptyBox } from '@/public/assets/landing/career'
// import Button from '@/components/general/buttons'
// import { useModal } from '@/context/ModalContext'
import { FireSmart } from '@/public/assets/icons'
import CareerFilterBar from '@/components/general/careerFilters'
// import careerItem from '@/data/home/careerItems'
import JobCard from '@/components/general/jobCard'

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

const CareerSection = () => {
    // const { openDemoModal } = useModal();
    const [activeFilter, setActiveFilter] = useState('View all')
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('https://script.google.com/macros/s/AKfycbzuRq_VRnZs5ZAeReGZOE42mzq4g5kEbOm3iy4BVftDICEantAIcca1zCzEkrmBho9U/exec');
                if (!response.ok) {
                    throw new Error('Failed to fetch jobs');
                }
                const data = await response.json();
                setJobs(data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, []);

    const filteredJobs = activeFilter === 'View all'
        ? jobs
        : jobs.filter(job => job.department === activeFilter)

    return (
        <section
            className="space-y-14"
            id="career">
            {/* Top section */}
            <div style={{
                border: '1px solid transparent',
                borderRadius: '20px',
                backgroundImage: `
                    linear-gradient(#FFFFFFF7, #FFFFFFF7), 
                    linear-gradient(90deg, rgba(6, 0, 163, 0.12) 32%, rgba(1, 105, 253, 0.12) 100%)
                    `,
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
            }}
                className="backdrop-blur-[100px] w-full md:px-[72px] p-4 md:space-x-7 space-y-8 flex items-center md:flex-row flex-col md:pt-35 pt-24 pb-20"
            >
                {/* left text */}
                <div className='md:w-[55%] w-full space-y-8'>
                    <h1 className='text-3xl md:text-5xl font-semibold'>Be a Part of our <span className="bg-gradient-to-r from-[#0600A3] via-[#0169FD] to-[#021530] text-transparent bg-clip-text">Mission</span> to Innovate and Inspire</h1>

                    <p className='md:text-lg text-base'>We are building a team of sharp, curious minds to reshape retail with AI. Solving real business problems through data and innovation.</p>
                    <p className='md:text-lg text-base'>Our AI tools help brands grow faster, cut waste, and make smarter decisions.We turn raw data into real-time insights that drive profitability.</p>

                    {/* <div className='flex items-center gap-2'>
                        <Button variant='primary' size='medium'>More about us</Button>
                        <Button
                            variant="secondary"
                            size="medium"
                            onClick={openDemoModal}
                            className='md:block hidden'
                        >
                            Get a demo
                        </Button>
                    </div> */}
                </div>
                {/* right image */}
                <div className='md:w-[45%] w-full'>
                    <Image src={careerImage} alt='career' />
                </div>
            </div>

            {/* join section */}
            <div className='md:px-0 px-4 space-y-8'>
                <div className="inline-flex items-center gap-2 bg-opacity-10 px-4 py-2 rounded-full mb-6">
                    <div className="flex items-center gap-2">
                        <Image src={FireSmart} alt="" width={14} height={15} />
                        <span className="text-sm">Join Us</span>
                    </div>
                </div>
                <h1 className='md:text-4xl text-2xl font-semibold mb-8'>We are hiring</h1>
                <div>
                    <CareerFilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
                    {
                        loading ? (
                            <div className='h-96 w-full flex items-center justify-center'>
                                <p className='text-center text-gray-500'>Loading jobs...</p>
                            </div>
                        ) : error ? (
                            <div className='h-96 w-full flex items-center justify-center'>
                                <p className='text-center text-red-500'>{error}</p>
                            </div>
                        ) :
                            filteredJobs.length > 0 ? (
                                <div className="space-y-6">
                                    {filteredJobs.map((job) => (
                                        <JobCard key={job.id} job={job} />
                                    ))}
                                </div>
                            ) : (
                                <div className='h-96 w-full flex items-center justify-center'>
                                    <Image alt='empty' src={emptyBox} /> <p className='text-center text-gray-500 ml-4'>No jobs listed currently</p>
                                </div>
                            )
                    }
                </div>
            </div>
        </section>
    )
}

export default CareerSection
