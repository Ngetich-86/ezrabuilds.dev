import Hero from "@/components/home/Hero/Hero";
import Skills from "@/components/home/Skills/Skills";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
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
          <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">E-Commerce Platform</h3>
            <p className="text-slate-600 mb-4">A full-featured e-commerce platform built with Next.js and Stripe.</p>
            <Link href="/projects" className="text-primary font-medium text-sm hover:underline">Learn more</Link>
          </div>
          <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">Task Management API</h3>
            <p className="text-slate-600 mb-4">Robust RESTful API for task management using Nest.js.</p>
            <Link href="/projects" className="text-primary font-medium text-sm hover:underline">Learn more</Link>
          </div>
          <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold mb-2">Real-time Chat App</h3>
            <p className="text-slate-600 mb-4">Real-time chat application built with React and Socket.io.</p>
            <Link href="/projects" className="text-primary font-medium text-sm hover:underline">Learn more</Link>
          </div>
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
