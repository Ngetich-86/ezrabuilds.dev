import React from "react";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import projectsData from "../../../data/projects.json";

export default function ProjectsPage() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Featured Projects</h1>
                <p className="text-lg text-slate-600 max-w-2xl">
                    A collection of projects showcasing my technical skills and problem-solving abilities.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project) => (
                    <div key={project.id} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
                        <div className="h-48 bg-slate-100 relative overflow-hidden group">
                            {/* Placeholder for project image */}
                            <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
                                Project Image
                            </div>
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-slate-900 hover:text-primary transition-colors">
                                    <Github size={20} />
                                </a>
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 bg-white rounded-full text-slate-900 hover:text-primary transition-colors">
                                    <ExternalLink size={20} />
                                </a>
                            </div>
                        </div>

                        <div className="p-6 flex-grow flex flex-col">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                            <p className="text-slate-600 mb-4 flex-grow">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((tech) => (
                                    <span key={tech} className="px-2 py-1 bg-slate-50 border border-slate-100 rounded text-xs text-slate-500">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
