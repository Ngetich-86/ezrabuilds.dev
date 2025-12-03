"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/libs/animations";

const Hero = () => {
    const [displayedText, setDisplayedText] = useState("");
    const fullText = "Building Digital Experiences That Matter";
    const typingSpeed = 50; // milliseconds per character

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setDisplayedText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(interval);
            }
        }, typingSpeed);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <motion.div
                    className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.5, 0.3, 0.5],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <motion.div
                className="container mx-auto px-4 sm:px-6 lg:px-8 text-center"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={fadeInUp}>
                    <motion.span
                        className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        Full Stack Engineer
                    </motion.span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 min-h-[180px] md:min-h-[200px]">
                        {displayedText.split(" ").map((word, wordIndex) => {
                            const isHighlighted = word === "Digital" || word === "Experiences";
                            return (
                                <span key={wordIndex}>
                                    {wordIndex === 3 && <br />}
                                    <span className={isHighlighted ? "text-gradient" : ""}>
                                        {word}
                                    </span>
                                    {wordIndex < displayedText.split(" ").length - 1 && " "}
                                </span>
                            );
                        })}
                        <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                            className="inline-block w-1 h-16 md:h-20 bg-primary ml-2 align-middle"
                        />
                    </h1>
                    <motion.p
                        className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10"
                        variants={fadeInUp}
                    >
                        I'm Ezra Bekele, a passionate developer crafting scalable web applications
                        with modern technologies like React, Node.js, and Cloud Architecture.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        variants={fadeInUp}
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/projects"
                                className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-white font-medium hover:bg-blue-700 transition-colors w-full sm:w-auto"
                            >
                                View Work <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 font-medium hover:bg-slate-50 transition-colors w-full sm:w-auto"
                            >
                                Contact Me
                            </Link>
                        </motion.div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <a
                                href="/Ezra_Bekele.pdf"
                                download="Ezra_Bekele_Resume.pdf"
                                className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-primary text-primary font-medium hover:bg-primary hover:text-white transition-all w-full sm:w-auto"
                            >
                                <Download className="mr-2 h-4 w-4" />
                                Download Resume
                            </a>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
