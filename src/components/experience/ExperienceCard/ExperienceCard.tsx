"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

interface ExperienceProps {
    experience: {
        id: string;
        role: string;
        company: string;
        location: string;
        period: string;
        description: string[];
        skills: string[];
    };
    index: number;
}

const ExperienceCard = ({ experience, index }: ExperienceProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 md:pl-0"
        >
            {/* Timeline Line (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2" />

            {/* Timeline Dot (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-white shadow-sm" />

            <div className={`md:flex items-start justify-between ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                {/* Date & Location (Desktop) */}
                <div className="hidden md:block w-5/12 text-right pt-1">
                    <div className={`flex flex-col ${index % 2 === 0 ? "items-start text-left" : "items-end text-right"}`}>
                        <span className="text-lg font-semibold text-slate-900">{experience.period}</span>
                        <span className="text-slate-500 flex items-center gap-1 mt-1">
                            <MapPin size={14} /> {experience.location}
                        </span>
                    </div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block w-2/12" />

                {/* Content Card */}
                <div className="w-full md:w-5/12 bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    {/* Mobile Date/Location */}
                    <div className="md:hidden mb-4">
                        <span className="inline-block px-3 py-1 bg-slate-100 rounded-full text-sm font-medium text-slate-700 mb-2">
                            {experience.period}
                        </span>
                        <div className="text-slate-500 text-sm flex items-center gap-1">
                            <MapPin size={14} /> {experience.location}
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-1">{experience.role}</h3>
                    <h4 className="text-lg font-medium text-primary mb-4">{experience.company}</h4>

                    <ul className="space-y-2 mb-6">
                        {experience.description.map((item, i) => (
                            <li key={i} className="text-slate-600 text-sm leading-relaxed flex items-start">
                                <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-primary/60 rounded-full flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                            <span
                                key={skill}
                                className="px-2 py-1 bg-slate-50 border border-slate-200 rounded text-xs text-slate-600"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ExperienceCard;
