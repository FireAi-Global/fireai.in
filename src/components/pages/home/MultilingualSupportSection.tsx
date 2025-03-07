import { Component } from "solid-js";
import { Multilingual } from "../../../assets/landing";
import { FireSmart } from "../../../assets/icons";

const MultilingualSupportSection: Component = () => {
    return (
        <div class="max-w-[1200px] lg:max-h-[450px] mx-auto my-10 px-4 lg:py-12 pt-20" id="multilingual">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Image */}
                <div class="rounded-[20px] overflow-hidden order-2 lg:order-1">
                    <img
                        src={Multilingual.coverImage}
                        alt="Multilingual Support"
                        class="w-auto h-full px-0 lg:px-10 object-fill"
                    />
                </div>

                {/* Right side - Content */}
                <div class="space-y-6 order-1 lg:order-2">
                    {/* Badge */}
                    <div class="inline-flex items-center gap-2 bg-[#F4F4F4] px-4 py-2 rounded-full">
                        <img src={FireSmart} alt="FireSmart" />
                        <span>Multilanguage support</span>
                    </div>

                    {/* Heading */}
                    <h2 class="text-4xl lg:text-[32px] font-medium">
                        Talk to FireAI in Any Language and get AI-powered insights within seconds
                    </h2>

                    {/* Description */}
                    <p class="text-gray-600 text-lg">
                        Now powered by Bhashini, FireAI lets you ask questions via voice in any language.
                        No typing or language barriers! Just seamless conversations with your data.
                    </p>

                    {/* Features list */}
                    <div class="space-y-4">
                        <div class="flex items-start gap-3">
                            <div class="mt-1 flex-shrink-0">
                                <div class="w-5 h-5 rounded-full bg-[#2B4EE7] flex items-center justify-center">
                                    <span class="text-white text-sm">✓</span>
                                </div>
                            </div>
                            <p>Speak in any language, FireAI will analyse and respond.</p>
                        </div>

                        <div class="flex items-start gap-3">
                            <div class="mt-1 flex-shrink-0">
                                <div class="w-5 h-5 rounded-full bg-[#2B4EE7] flex items-center justify-center">
                                    <span class="text-white text-sm">✓</span>
                                </div>
                            </div>
                            <p>Voice-powered AI for real-time insights.</p>
                        </div>

                        <div class="flex items-start gap-3">
                            <div class="mt-1 flex-shrink-0">
                                <div class="w-5 h-5 rounded-full bg-[#2B4EE7] flex items-center justify-center">
                                    <span class="text-white text-sm">✓</span>
                                </div>
                            </div>
                            <p>Break language barriers and make data-driven decisions effortlessly.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MultilingualSupportSection;
