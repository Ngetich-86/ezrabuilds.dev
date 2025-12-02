import Hero from "@/components/home/Hero/Hero";
import Skills from "@/components/home/Skills/Skills";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import projectsData from "../../data/projects.json";
import { Project } from "@/types/projects";

export default function Home() {
  // Get first 3 projects for featured section
  const featuredProjects = projectsData.slice(0, 3);

  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />
      <Skills />

      {/* Featured Projects Preview */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Featured Projects</h2>
          <Link href="/projects" className="flex items-center text-primary font-medium hover:underline">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project: Project) => (
            <div key={project.id} className="group p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
              {/* Project Image */}
              {project.image && (
                <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <h3 className="text-xl font-bold mb-2 line-clamp-2">{project.title}</h3>
              <p className="text-slate-600 mb-4 line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.slice(0, 3).map((tech: string) => (
                  <span key={tech} className="px-2 py-1 bg-slate-50 border border-slate-200 rounded text-xs text-slate-600">
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-2 py-1 bg-slate-50 border border-slate-200 rounded text-xs text-slate-600">
                    +{project.tech.length - 3} more
                  </span>
                )}
              </div>
              <Link href="/projects" className="text-primary font-medium text-sm hover:underline">Learn more</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Preview */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Work Experience</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-10">
            My professional journey in software development.
          </p>
          <Link
            href="/experience"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-white border border-slate-200 text-slate-900 font-medium hover:bg-slate-50 transition-colors shadow-sm"
          >
            View Full Timeline <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
