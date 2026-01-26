"use client";

import { useEffect, useRef, useState } from "react";

interface FadeInProps {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    direction?: "up" | "down";
}

export default function FadeIn({ children, delay = 0, className = "", direction = "down" }: FadeInProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: "50px",
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const getDirectionClass = () => {
        if (!isVisible) {
            return direction === "up" ? "opacity-0 translate-y-8" : "opacity-0 -translate-y-8";
        }
        return "opacity-100 translate-y-0";
    };

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${getDirectionClass()} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
