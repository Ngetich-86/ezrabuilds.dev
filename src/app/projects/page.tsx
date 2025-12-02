"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import projectsData from "../../../data/projects.json";
import { fadeInUp, cardHover } from "@/libs/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function ProjectCard({ project, index }: { project: any; index: number }) {
    const { ref, controls } = useScrollAnimation({ threshold: 0.2 });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={fadeInUp}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm flex flex-col"
        >
            <motion.div
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                className="h-48 bg-slate-100 relative overflow-hidden group"
            >
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <motion.div
                    className="absolute inset-0 bg-black/50 flex items-center justify-center gap-4"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full text-slate-900 hover:text-primary transition-colors"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Github size={20} />
                    </motion.a>
                    <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full text-slate-900 hover:text-primary transition-colors"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <ExternalLink size={20} />
                    </motion.a>
                </motion.div>
            </motion.div>

            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech: string, techIndex: number) => (
                        <motion.span
                            key={tech}
                            className="px-2 py-1 bg-slate-50 border border-slate-100 rounded text-xs text-slate-500"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                            whileHover={{ scale: 1.05, backgroundColor: "#f1f5f9" }}
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default function ProjectsPage() {
    const { ref: headerRef, controls: headerControls } = useScrollAnimation();

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <motion.div
                ref={headerRef}
                initial="hidden"
                animate={headerControls}
                variants={fadeInUp}
                className="mb-16"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                    Featured Projects
                </h1>
                <p className="text-lg text-slate-600 max-w-2xl">
                    A collection of projects showcasing my technical skills and problem-solving abilities.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </div>
    );
}

