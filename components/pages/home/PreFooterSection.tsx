'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PreFooter } from "@/public/assets/landing";
import { CompanyThemeGradient } from '@/public/assets/company';
import Button from '@/components/general/buttons';
import FireAIDemoModal from '@/components/general/demo-modal';

export default function PreFooterSection() {
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
    
    return (
        <>
            <FireAIDemoModal 
                isOpen={isDemoModalOpen} 
                onClose={() => setIsDemoModalOpen(false)} 
            />

            <div 
                className="lg:rounded-[32px] overflow-hidden text-center lg:text-left"
                style={{
                    backgroundImage: `url(${CompanyThemeGradient.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="max-w-[1200px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                        {/* Left Content */}
                        <div className="px-10 lg:px-12 md:px-16 pt-10 lg:pb-10">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-6">
                                Power your business
                                <br />
                                with FireAI
                            </h2>
                            <p className="text-[#DEDEDE] text-[18px] leading-[1.6] mb-8 max-w-[480px]">
                                Make real-time, data-backed decisions and stay ahead of the competition.
                            </p>
                            <div className="hidden lg:block">
                                <Button
                                    variant="primary"
                                    size="large"
                                    onClick={() => setIsDemoModalOpen(true)}
                                >
                                    Get a demo
                                </Button>
                            </div>
                            <div className="block lg:hidden">
                                <Button
                                    variant="primary"
                                    size="large"
                                    span='full'
                                    onClick={() => setIsDemoModalOpen(true)}
                                >
                                    Get a demo
                                </Button>
                            </div>
                        </div>
        
                        {/* Right Image */}
                        <div className="relative h-full">
                            <div className="absolute z-10 md:hidden" />
                            <Image
                                src={PreFooter.PreFooterImage}
                                alt="FireAI Dashboard"
                                width={600}
                                height={400}
                                className="w-full h-full object-cover object-left-top transform translate-x-2 translate-y-4"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}