"use client";
import { useEffect, useState, useRef } from 'react';

interface CountUpProps {
    end: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    className?: string;
}

export default function CountUp({ end, duration = 2000, prefix = "", suffix = "", className = "" }: CountUpProps) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const hasStarted = useRef(false);

    useEffect(() => {
        const currentRef = ref.current;
        if (!currentRef) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted.current) {
                    hasStarted.current = true;
                    observer.unobserve(currentRef);

                    let startTime: number | null = null;
                    let animationFrameId: number;

                    const easeOut = (x: number): number =>
                        x === 1 ? 1 : 1 - Math.pow(2, -10 * x);

                    const animate = (timestamp: number) => {
                        if (!startTime) startTime = timestamp;
                        const progress = timestamp - startTime;
                        const percentage = Math.min(progress / duration, 1);
                        setCount(Math.floor(easeOut(percentage) * end));

                        if (progress < duration) {
                            animationFrameId = requestAnimationFrame(animate);
                        } else {
                            setCount(end);
                        }
                    };

                    animationFrameId = requestAnimationFrame(animate);

                    return () => cancelAnimationFrame(animationFrameId);
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(currentRef);

        return () => observer.unobserve(currentRef);
    }, [end, duration]);

    return (
        <span ref={ref} className={className}>
            {prefix}{count}{suffix}
        </span>
    );
}
