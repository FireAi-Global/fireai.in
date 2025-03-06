import { Component } from 'solid-js';
import { PreFooter } from "../../../assets/landing"
import { CompanyThemeGradient } from '../../../assets/company';
import Button from '../../general/buttons';
import links from '../../../data/links';

const PreFooterSection: Component = () => {
    return (
        <div class="lg:rounded-[32px] overflow-hidden"
            style={{
                "background-image": `url(${CompanyThemeGradient})`,
                "background-size": 'cover',
                "background-position": 'center',
                "background-repeat": 'no-repeat'
            }}
        >
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
                        <Button
                            variant="primary"
                            size="large"
                            onClick={() => window.open(links.demoLink, "_blank")}
                        >
                            Get a demo
                        </Button>
                    </div>

                    {/* Right Image */}
                    <div class="relative h-full">
                        <div class="absolute inset-0 bg-gradient-to-r from-[#070C47] to-transparent z-10 md:hidden" />
                        <img
                            src={PreFooter.PreFooterImage}
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