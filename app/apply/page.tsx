'use client';
import { Suspense } from "react";
import JobDetailsAndApply from "@/components/pages/apply";
import PreFooterSection from "@/components/pages/home/PreFooterSection";

export default function ApplyPage() {
    return (
        <Suspense fallback={<div className="p-6 text-center">Loading...</div>}>
            <JobDetailsAndApply />
            <div className="py-16 md:px-[72px] px-4">
                <PreFooterSection />
            </div>
        </Suspense>
    );
}
