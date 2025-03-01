import { Component } from 'solid-js';
import { FireSmart, FireSmartWhite } from '../../assets/icons';
import { OurSolutions } from '../../assets/landing';

const features = [
    {
        title: "Unified Business Intelligence",
        description: "All your data in one platform. Get real-time insights and take action instantly.",
        image: OurSolutions.UnifiedBusinessIntelligence
    },
    {
        title: "Predictive Analytics",
        description: "Stay ahead with 30% more accurate AI-powered predictions",
        image: OurSolutions.PredictiveAnalytics
    },
    {
        title: "AI Powered Business Analyst",
        description: "More than data get tailored insights for growth.",
        image: OurSolutions.AIPoweredBusinessAnalyst
    },
    {
        title: "Smart Alerts",
        description: "Receive real-time alerts on risks and opportunities for smarter, faster business decisions.",
        image: OurSolutions.SmartAlerts
    }
];

const benefits = [
    {
        icon: "grid-icon",
        title: "One-Stop-Analytics",
        description: "A complete view of your business with real-time dashboards, reports and trends in one place."
    },
    {
        icon: "forecast-icon",
        title: "Smarter Forecasting",
        description: "Predict sales, revenue, and trends with 30% better accuracy."
    },
    {
        icon: "decision-icon",
        title: "Smart Decisions",
        description: "Save time and reduce manual effort by 40% with automated recommendations."
    },
    {
        icon: "alert-icon",
        title: "Real-Tim Alerts",
        description: "Get real-time notifications on risks, opportunities and business changes, before they impact you."
    }
];

const OurSolutionsSection: Component = () => {
    return (
        <div class="bg-[#070C47] rounded-[20px] text-white py-32">
            <div class="max-w-[1200px] mx-auto px-4">
                {/* Header */}
                <div class="mb-12">
                    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-[8px] mb-6" style="background: linear-gradient(90deg, rgba(38, 95, 185, 0.24) 0%, rgba(130, 155, 194, 0.24) 100%); border: 1px solid; border-image-source: linear-gradient(0deg, rgba(236, 236, 236, 0.54), rgba(236, 236, 236, 0.54)), linear-gradient(0deg, rgba(236, 236, 236, 0.54), rgba(236, 236, 236, 0.54)), linear-gradient(0deg, rgba(236, 236, 236, 0.54), rgba(236, 236, 236, 0.54)), linear-gradient(0deg, rgba(236, 236, 236, 0.54), rgba(236, 236, 236, 0.54));">
                        <div class="flex items-center gap-2">
                            <img src={FireSmartWhite} alt="" class="w-4 h-4" />
                            <span class="text-white">Key features</span>
                        </div>
                    </div>
                    <h2 class="text-[40px] font-medium mb-1">
                        Connect, Analyze, Automate - All in One Place.
                    </h2>
                    <p class="text-[#DEDEDE] mb-8 max-w-2xl">
                        FireAI integrates with your business tools, turning scattered data into smart insights. Make faster decisions, optimize workflows and stay ahead with predictive analytics.
                    </p>
                    <button class="w-[151px] h-[42px] px-2 py-[10px] rounded-[8px] text-white bg-gradient-to-r from-[#0915A0] to-[#0169FD] border border-[#E4E3FF] shadow-[0_4px_12px_0_#9E9C9C1A]">
                        Get a demo
                    </button>
                </div>

                {/* Features Grid */}
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                    {features.map(feature => (
                        <div class="rounded-[12px] border border-gradient-to-r from-[#8285CE] to-[#A5A8CC] bg-[#26263C26] backdrop-blur-[100px] p-6">
                            <h3 class="text-xl font-medium mb-2">{feature.title}</h3>
                            <p class="text-gray-300 mb-6">{feature.description}</p>
                            <div class="rounded-lg overflow-hidden">
                                <img 
                                    src={feature.image} 
                                    alt={feature.title} 
                                    class="w-full"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Why FireAI Section */}
                <div class="mb-12">
                    <div class="inline-flex items-center gap-2 bg-opacity-10 px-4 py-2 rounded-full mb-6" style="background: linear-gradient(90deg, rgba(38, 95, 185, 0.24) 0%, rgba(130, 155, 194, 0.24) 100%); border: 1px solid; border-image-source: linear-gradient(0deg, rgba(236, 236, 236, 0.54), rgba(236, 236, 236, 0.54)), linear-gradient(0deg, rgba(236, 236, 236, 0.54), rgba(236, 236, 236, 0.54)), linear-gradient(0deg, rgba(236, 236, 236, 0.54), rgba(236, 236, 236, 0.54)), linear-gradient(0deg, rgba(236, 236, 236, 0.54), rgba(236, 236, 236, 0.54));">
                        <span class="flex items-center gap-2">
                            <img src={FireSmartWhite} alt="" class="w-4 h-4" />
                            <span class="text-white">Why FireAI</span>
                        </span>
                    </div>
                    <h2 class="text-[40px] font-medium mb-4">
                        Turn Data into Growth
                    </h2>
                    <p class="text-gray-300 mb-8 max-w-2xl">
                        Discover new business opportunities, optimize strategies, and make smarter, data-driven decisions with fast, accurate real-time insights.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {benefits.map(benefit => (
                        <div class="bg-opacity-10 bg-white rounded-[20px] p-6">
                            <div class="mb-4">
                                {/* Replace with actual icon component */}
                                <div class="w-10 h-10 bg-blue-600 rounded-lg" />
                            </div>
                            <h3 class="text-lg font-medium mb-2">{benefit.title}</h3>
                            <p class="text-gray-300 text-sm">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OurSolutionsSection;