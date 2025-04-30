import { InteractiveGrid } from "@/components/ui/interactive-grid";


export default function HeroSection() {
    return (
        <section className="relative min-h-screen pt-32 pb-16 overflow-hidden bg-black hero-gradient">

            <InteractiveGrid containerClassName="absolute inset-0" className="opacity-30" points={40} />

            <ShineBorder
        </section>
    )
}