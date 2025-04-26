import { Button } from "@/components/ui/button";
import Link from "next/link";



export default function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="flex items-center justify-between px-6 py-4 backdrop-blur-xl bg-black/50">
            <div className="flex items-center gap-2">
                <Link href="/" className="flex items-center gap-3">
                
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center">

                  </div>

                  <span className="font-medium text-white">FocusTimer</span>
                </Link>
            </div>

            <nav className="hidded md:flex items-center gap-8">
                <Link href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">
                 Features
                </Link>
                <Link href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">
                 About
                </Link>
                <Link href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">
                 Timer
                </Link>
                <Link href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">
                 Pricing
                </Link>
                <Link href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">
                 Board
                </Link>
            </nav>

            <Button variant="secondary" className="bg-gradient-to-r from-red-500 to-orange-500 text-white hover:opacity-90">
                Download
            </Button>
            </div>
        </header>
    )
}