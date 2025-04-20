'use client';

import Image from "next/image";
import { Multilingual } from "@/public/assets/landing";
import { FireSmart } from "@/public/assets/icons";

export default function MultilingualSupportSection() {
    return (
        <div className="max-w-[1200px] lg:max-h-[450px] mx-auto my-10 px-4 lg:py-12 pt-20" id="multilingual">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Image */}
                <div className="rounded-[20px] overflow-hidden order-2 lg:order-1">
                    <Image
                        src={Multilingual.coverImage}
                        alt="Multilingual Support"
                        width={600}
                        height={450}
                        className="w-auto h-full max-h-[450px] px-0 lg:px-10 object-fill"
                    />
                </div>

                {/* Right side - Content */}
                <div className="space-y-6 order-1 lg:order-2">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-[#F4F4F4] px-4 py-2 rounded-full">
                        <Image src={FireSmart} alt="FireSmart" width={16} height={16} />
                        <span>Multilanguage support</span>
                    </div>

                    {/* Heading */}
                    <h2 className="text-4xl lg:text-[32px] font-medium">
                        Talk to FireAI in Any Language and get AI-powered insights within seconds
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 text-lg">
                        Now powered by Bhashini, FireAI lets you ask questions via voice in any language.
                        No typing or language barriers! Just seamless conversations with your data.
                    </p>

                    {/* Features list */}
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="mt-1 flex-shrink-0">
                                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#0600A3] to-[#0169FD] flex items-center justify-center">
                                    <span className="text-white text-sm">✓</span>
                                </div>
                            </div>
                            <p>Speak in any language, FireAI will analyse and respond.</p>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="mt-1 flex-shrink-0">
                                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#0600A3] to-[#0169FD] flex items-center justify-center">
                                    <span className="text-white text-sm">✓</span>
                                </div>
                            </div>
                            <p>Voice-powered AI for real-time insights.</p>
                        </div>

                        <div className="flex items-start gap-3">
                            <div className="mt-1 flex-shrink-0">
                                <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#0600A3] to-[#0169FD] flex items-center justify-center">
                                    <span className="text-white text-sm">✓</span>
                                </div>
                            </div>
                            <p>Break language barriers and make data-driven decisions effortlessly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
