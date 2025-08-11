import React from "react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { Mail, Linkedin, BookOpen, ArrowRight } from "lucide-react";
import { Toaster } from "../components/ui/toaster";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-[1200px] px-6 sm:px-10">{children}</main>
      <Footer />
      <Toaster />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-background/70 border-b border-border/50">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-7 h-7 rounded-sm bg-foreground/90 text-background grid place-items-center text-xs font-bold group-hover:scale-105 transition-transform">SK</div>
          <span className="font-medium tracking-tight">Saksham Kalra</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a className="hover:-translate-y-0.5 transition-transform" href="#work">Work</a>
          <a className="hover:-translate-y-0.5 transition-transform" href="#writing">Writing</a>
          <a className="hover:-translate-y-0.5 transition-transform" href="#about">About</a>
          <a className="hover:-translate-y-0.5 transition-transform" href="#downloads">Case Studies</a>
        </nav>
        <div className="flex items-center gap-2">
          <a href="#contact" className="hidden sm:block">
            <Button variant="default" className="rounded-md">Contact</Button>
          </a>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer id="contact" className="mt-24 border-t border-border/60">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10 py-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-xl font-medium tracking-tight">Let’s build the next health AI breakthrough</h3>
          <p className="text-muted-foreground mt-2 max-w-prose">
            I help teams ship AI-first products that patients, doctors and operators love.
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            <Badge variant="secondary">AI</Badge>
            <Badge variant="secondary">HealthTech</Badge>
            <Badge variant="secondary">CRO</Badge>
            <Badge variant="secondary">Onboarding</Badge>
          </div>
        </div>
        <div className="flex md:justify-end">
          <div className="grid gap-3 w-full max-w-sm">
            <a href="mailto:sakshamkalra@gmail.com" className="group inline-flex items-center justify-between border rounded-md px-4 py-3 hover:bg-accent transition-colors">
              <span className="inline-flex items-center gap-2"><Mail size={18}/> sakshamkalra@gmail.com</span>
              <ArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" size={18}/>
            </a>
            <a href="https://www.linkedin.com/in/saksham-k-267aa2b7/" target="_blank" rel="noreferrer" className="group inline-flex items-center justify-between border rounded-md px-4 py-3 hover:bg-accent transition-colors">
              <span className="inline-flex items-center gap-2"><Linkedin size={18}/> LinkedIn</span>
              <ArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" size={18}/>
            </a>
            <a href="https://medium.com/@sakshamkalra" target="_blank" rel="noreferrer" className="group inline-flex items-center justify-between border rounded-md px-4 py-3 hover:bg-accent transition-colors">
              <span className="inline-flex items-center gap-2"><BookOpen size={18}/> Medium</span>
              <ArrowRight className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" size={18}/>
            </a>
          </div>
        </div>
      </div>
      <Separator />
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10 py-6 text-xs text-muted-foreground flex justify-between">
        <span>© {new Date().getFullYear()} Saksham Kalra</span>
        <span>Built with care — micro-interactions, clean type, zero clutter</span>
      </div>
    </footer>
  );
}