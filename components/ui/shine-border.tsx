import { useEffect, useRef } from "react";


interface ShineBorderProps {
    children: React.ReactNode;
    className?: string;
    borderClassName?: string;
    duration?: number; // Duration in milliseconds
}

export function ShineBorder({ children, className = "", borderClassName = "", duration = 2000 }: ShineBorderProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current
        if (!container) return
        

        const handleMouseMove = (e: MouseEvent) => {

        }
    })
}