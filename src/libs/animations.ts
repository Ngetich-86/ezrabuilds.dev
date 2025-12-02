import { Variants } from "framer-motion";

// Fade in animation variants
export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

// Fade in with slide up
export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

// Fade in with slide down
export const fadeInDown: Variants = {
    hidden: { opacity: 0, y: -60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

// Fade in with slide from left
export const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

// Fade in with slide from right
export const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

// Scale animation
export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

// Stagger children animation
export const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

// Typing effect configuration
export const typingEffect = {
    hidden: { opacity: 0 },
    visible: (i: number = 0) => ({
        opacity: 1,
        transition: {
            delay: i * 0.05,
            duration: 0.1
        }
    })
};

// Hover scale effect
export const hoverScale = {
    rest: { scale: 1 },
    hover: {
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeInOut" }
    }
};

// Card hover effect
export const cardHover: Variants = {
    rest: {
        scale: 1,
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
    },
    hover: {
        scale: 1.02,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.3, ease: "easeInOut" }
    }
};

// Rotate animation
export const rotate: Variants = {
    hidden: { opacity: 0, rotate: -180 },
    visible: {
        opacity: 1,
        rotate: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

// Bounce animation
export const bounce = {
    y: [0, -10, 0],
    transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
    }
};

// Pulse animation
export const pulse = {
    scale: [1, 1.05, 1],
    transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
    }
};

// Slide in from bottom with delay
export const slideInBottom = (delay: number = 0): Variants => ({
    hidden: { opacity: 0, y: 100 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay,
            ease: "easeOut"
        }
    }
});

// Page transition
export const pageTransition: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: "easeOut" }
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: { duration: 0.3, ease: "easeIn" }
    }
};
