import React from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <Link href="/" className="text-2xl font-bold text-white font-mono">
                            &lt;EB /&gt;
                        </Link>
                        <p className="mt-4 text-slate-400 max-w-xs">
                            Building scalable, high-performance web applications with modern technologies.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
                            <li><Link href="/experience" className="hover:text-primary transition-colors">Experience</Link></li>
                            <li><Link href="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="https://github.com/ezrabekele" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                <Github size={24} />
                            </a>
                            <a href="https://linkedin.com/in/ezrabekele" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                <Linkedin size={24} />
                            </a>
                            <a href="https://twitter.com/ezrabekele" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                <Twitter size={24} />
                            </a>
                            <a href="mailto:ezra.bekele@example.com" className="hover:text-primary transition-colors">
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Ezra Bekele. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
