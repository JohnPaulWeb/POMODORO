


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

}