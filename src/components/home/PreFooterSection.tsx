import { Component } from 'solid-js';
import { PreFooterImage } from "../../assets/landing"

const PreFooterSection: Component = () => {
    return (
        <div class="bg-[#070C47] rounded-[32px] overflow-hidden">
            <div class="max-w-[1200px] mx-auto">
                <div class="grid grid-cols-1 md:grid-cols-2 items-center">
                    {/* Left Content */}
                    <div class="px-12 md:px-16 pt-10 lg:pb-10">
                        <h2 class="text-3xl md:text-4xl lg:text-5xl font-medium text-white leading-tight mb-6">
                            Power your business
                            <br />
                            with FireAI
                        </h2>
                        <p class="text-[#DEDEDE] text-[18px] leading-[1.6] mb-8 max-w-[480px]">
                            Make real-time, data-backed decisions and stay ahead of the competition.
                        </p>
                        <button 
                            class="w-[151px] h-[42px] px-2 py-[10px] rounded-[8px] text-white bg-gradient-to-r from-[#0915A0] to-[#0169FD] border border-[#E4E3FF] shadow-[0_4px_12px_0_#9E9C9C1A]"
                        >
                            Get a demo
                        </button>
                    </div>

                    {/* Right Image */}
                    <div class="relative h-full">
                        <div class="absolute inset-0 bg-gradient-to-r from-[#070C47] to-transparent z-10 md:hidden" />
                        <img 
                            src={PreFooterImage} 
                            alt="FireAI Dashboard" 
                            class="w-full h-full object-cover object-left-top transform translate-x-2 translate-y-4"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PreFooterSection