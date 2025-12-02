import { useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
    threshold?: number;
    rootMargin?: string;
    freezeOnceVisible?: boolean;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
    const controls = useAnimation();
    const elementRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    const {
        threshold = 0.1,
        rootMargin = '0px',
        freezeOnceVisible = true
    } = options;

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        // If already visible and should freeze, don't observe
        if (freezeOnceVisible && isVisible) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                const isIntersecting = entry.isIntersecting;
                setIsVisible(isIntersecting);

                // If freezeOnceVisible is true and element is visible, unobserve
                if (freezeOnceVisible && isIntersecting) {
                    observer.unobserve(element);
                }
            },
            {
                threshold,
                root: null,
                rootMargin
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, [threshold, rootMargin, freezeOnceVisible, isVisible]);

    useEffect(() => {
        if (isVisible) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, isVisible]);

    return { ref: elementRef, controls, isVisible };
}

