import { Button } from "@/components/ui/button";
import { InteractiveGrid } from "@/components/ui/interactive-grid";
import { ShineBorder } from "@/components/ui/shine-border";
import { Play } from "lucide-react";


export default function HeroSection() {
    return (
        <section className="relative min-h-screen pt-32 pb-16 overflow-hidden bg-black hero-gradient">

            <InteractiveGrid containerClassName="absolute inset-0" className="opacity-30" points={40} />

            <ShineBorder className="relative z-10 max-w-6xl mx-auto px-6" borderClassName="border-white/10 rounded-xl overflow-hidden">
            
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold mb06 tracking-tight">Boost Your Strength
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-orange-500">
                    It's Pomodoro Time
                </span>
                </h1>

                <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
                    Focus Timer helps you stay productive and manage your time effectively.
                </p>

                <div className="flex gap-4 justify-center">
                    <Button variant="outline" className="gap-2 border-white/10 bg-white/5 hover:bg-white/10">
                      <Play className="w-4 h-4" />
                    </Button>
                </div>
              </div>
            </ShineBorder>
        </section>
    )
}