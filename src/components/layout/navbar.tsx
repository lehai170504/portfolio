import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { portfolioData } from "@/data/content";
import { Logo } from "@/components/ui/logo";
import { Magnetic } from "@/components/ui/magnetic";

export function Navbar() {
  return (
    <div className="fixed top-0 w-full z-50 flex justify-center pt-6 px-6 md:px-8 pointer-events-none transition-all">
      <nav className="pointer-events-auto bg-background/50 backdrop-blur-xl border border-white/10 rounded-full px-6 h-14 flex items-center justify-between shadow-2xl shadow-black/50 w-full max-w-3xl">
        <Magnetic>
          <Link href="/" className="flex items-center gap-3 group">
            <Logo className="w-7 h-7 group-hover:scale-105 transition-transform" />
            <span className="text-base font-bold tracking-tight">Hai.dev</span>
          </Link>
        </Magnetic>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Magnetic><Link href="#about" className="hover:text-cyan-400 transition-colors py-2 px-1">About</Link></Magnetic>
          <Magnetic><Link href="#projects" className="hover:text-cyan-400 transition-colors py-2 px-1">Projects</Link></Magnetic>
          <Magnetic><Link href="#experience" className="hover:text-cyan-400 transition-colors py-2 px-1">Experience</Link></Magnetic>
          <Magnetic><Link href="#contact" className="hover:text-cyan-400 transition-colors py-2 px-1">Contact</Link></Magnetic>
        </div>
        <Magnetic>
          <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className={buttonVariants({ variant: "outline", size: "sm", className: "rounded-full" })}>
            GitHub
          </a>
        </Magnetic>
      </nav>
    </div>
  );
}
