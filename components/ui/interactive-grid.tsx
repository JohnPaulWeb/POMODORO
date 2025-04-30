import { useEffect, useRef } from "react"



interface Point {
    x: number
    y: number
    translateX: number
    translateY: number
    minX: number
    minY: number
    maxX: number
    maxY: number
    rotate: number
}

interface InteractiveGridProps {
    
    className?: string
    containerClassName?: string
    points?: number
}

export function InteractiveGrid({ className = "", containerClassName = "", points = 40 }: InteractiveGridProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const pointsRef = useRef<Point[]>([])
    const mousePosition = useRef({ x: 0, y: 0 })

    useEffect(() => {
        const canvas = canvasRef.current
        const container = containerRef.current
        if (!canvas || !container) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return


        const resizeCanvas = () => {
            const { width, height } = container.getBoundingClientRect()
            const dpr = window.devicePixelRatio || 1
            canvas.width = width * dpr
            canvas.height = height * dpr
            ctx.scale(dpr, dpr)
            canvas.style.width = `${width}px`
            canvas.
        }
    })
}