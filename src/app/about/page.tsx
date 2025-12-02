import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">About Me</h1>

                <div className="prose prose-lg prose-slate mb-12">
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                        I am a Full Stack Engineer with over 4 years of experience building scalable web applications.
                        My journey began at the University of Michigan, where I earned my Bachelor of Science in Computer Science.
                    </p>
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                        Currently, I specialize in the JavaScript ecosystem (React, Node.js, Next.js) and Cloud Architecture (AWS, Azure).
                        I have a passion for creating intuitive user interfaces and robust backend systems that solve real-world problems.
                    </p>
                    <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                        When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, and mentoring junior developers.
                    </p>
                </div>

                <div className="border-t border-slate-200 pt-12">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Education</h2>
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-slate-900">University of Michigan College of Engineering</h3>
                            <span className="text-slate-500">01/2017 – 12/2021</span>
                        </div>
                        <p className="text-primary font-medium mb-2">Bachelor of Science - BS, Computer Science</p>
                        <p className="text-slate-600">Ann Arbor, MI</p>
                    </div>
                </div>

                <div className="mt-12">
                    <Link
                        href="/contact"
                        className="inline-flex items-center text-primary font-medium hover:underline"
                    >
                        Let's work together <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
