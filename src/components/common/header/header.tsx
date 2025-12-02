"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import Navbar from "./navbar";

const Header = () => {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    return (
        <motion.header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
                scrolled ? "bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm" : "bg-transparent"
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    <Link href="/" className="text-2xl font-bold text-primary font-mono">
                        &lt;EB /&gt;
                    </Link>
                    <Navbar />
                </div>
            </div>
        </motion.header>
    );
};

export default Header;
