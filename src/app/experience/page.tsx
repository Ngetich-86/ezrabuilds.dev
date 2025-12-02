"use client";

import React from "react";
import Timeline from "@/components/experience/TimeLine/Timeline";
import { Download } from "lucide-react";

export default function ExperiencePage() {
    const handleDownloadResume = () => {
        // Create a temporary anchor element to trigger download
        const link = document.createElement('a');
        link.href = '/Ezra_Bekele.pdf';
        link.download = 'Ezra_Bekele_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 gap-4">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Work Experience</h1>
                    <p className="text-lg text-slate-600 max-w-2xl">
                        A detailed timeline of my professional career and contributions.
                    </p>
                </div>
                <button
                    onClick={handleDownloadResume}
                    className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                    <Download className="mr-2 h-4 w-4" /> Download Resume
                </button>
            </div>

            <Timeline />
        </div>
    );
}
