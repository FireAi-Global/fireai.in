import { Component } from "solid-js";
import { Multilingual } from "../../../assets/landing";
import { FireSmart } from "../../../assets/icons";

const MultilingualSupportSection: Component = () => {
    return (
        <div class="max-w-[1200px] mx-auto px-4 lg:py-12 pt-20" id="multilingual">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left side - Image */}
                <div class="rounded-[20px] overflow-hidden order-2 lg:order-1">
                    <img
                        src={Multilingual.coverImage}
                        alt="Multilingual Support"
                        class="w-full h-auto px-0 lg:px-20"
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
                    <h2 class="text-4xl lg:text-5xl font-medium">
                        Connect Your Data Sources Easily Across All Platforms
                    </h2>

                    {/* Description */}
                    <p class="text-gray-600 text-lg">
                        Seamlessly integrate FireAI with your existing platforms—databases, Tally, spreadsheets, and cloud storage. No complex setups or technical expertise required.
                    </p>

                    {/* Features list */}
                    <div class="space-y-4">
                        <div class="flex items-start gap-3">
                            <div class="mt-1 flex-shrink-0">
                                <div class="w-5 h-5 rounded-full bg-[#2B4EE7] flex items-center justify-center">
                                    <span class="text-white text-sm">✓</span>
                                </div>
                            </div>
                            <p>Connect multiple sources for unified analysis.</p>
                        </div>

                        <div class="flex items-start gap-3">
                            <div class="mt-1 flex-shrink-0">
                                <div class="w-5 h-5 rounded-full bg-[#2B4EE7] flex items-center justify-center">
                                    <span class="text-white text-sm">✓</span>
                                </div>
                            </div>
                            <p>Works with Excel, Google Sheets, SQL, and more.</p>
                        </div>

                        <div class="flex items-start gap-3">
                            <div class="mt-1 flex-shrink-0">
                                <div class="w-5 h-5 rounded-full bg-[#2B4EE7] flex items-center justify-center">
                                    <span class="text-white text-sm">✓</span>
                                </div>
                            </div>
                            <p>100% secure, metadata-based integration ensures privacy.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MultilingualSupportSection;
