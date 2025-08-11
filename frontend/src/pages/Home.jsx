import React, { useEffect, useMemo, useRef, useState } from "react";
import { profile, projects, timeline, articles, downloads, employers, tools, showcase } from "../mock";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { useToast } from "../hooks/use-toast";
import { ArrowUpRight, Download, ExternalLink } from "lucide-react";
import HeroScene from "../components/HeroScene";
import HeroTitle from "../components/HeroTitle";
import WorkedWithShowcase from "../components/WorkedWithShowcase";

function useTilt() {
  const [style, setStyle] = useState({ transform: "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)" });
  const onMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = -((y / rect.height - 0.5) * 6);
    const ry = (x / rect.width - 0.5) * 6;
    setStyle({ transform: `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-2px)` });
  };
  const onMouseLeave = () => setStyle({ transform: "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)" });
  return { style, onMouseMove, onMouseLeave };
}

function ProjectCard({ item }) {
  const tilt = useTilt();
  return (
    <a href={item.link} target="_blank" rel="noreferrer" className="block">
      <Card className="overflow-hidden group border-border/70 hover:border-foreground/30 transition-colors" style={tilt.style} onMouseMove={tilt.onMouseMove} onMouseLeave={tilt.onMouseLeave}>
        <div className="relative aspect-[4/3] overflow-hidden">
          <img src={item.image} alt={item.title} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-[filter,transform] duration-500 group-hover:scale-[1.03]" />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-start justify-between gap-3 text-base">
            <span className="tracking-tight">{item.title}</span>
            <ArrowUpRight size={18} className="opacity-60 group-hover:opacity-100" />
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 pb-4">
          <p className="text-sm text-muted-foreground">{item.subtitle}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {item.tags.map((t) => (
              <Badge key={t} variant="secondary">{t}</Badge>
            ))}
          </div>
          <div className="flex gap-4 mt-4 text-xs text-muted-foreground">
            {item.impact.map((m) => (
              <div key={m.label} className="flex items-center gap-1">
                <span className="font-medium text-foreground">{m.value}</span> {m.label}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </a>
  );
}

export default function Home() {
  const { toast } = useToast();
  const categories = useMemo(() => ["All", "Health AI", "CRO", "Onboarding", "Profile"], []);
  const [tab, setTab] = useState("All");
  const filtered = useMemo(
    () => (tab === "All" ? projects : projects.filter((p) => p.category === tab)),
    [tab]
  );

  const portraitRef = useRef(null);
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (portraitRef.current) portraitRef.current.style.transform = `translateY(${Math.min(12, y * 0.04)}px)`;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="py-12" id="top">
      <section className="pt-8 md:pt-14 relative">
        <HeroScene />
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <div>
            <HeroTitle text={profile.headline} className="font-display text-5xl md:text-7xl tracking-tight leading-[1.03]" />
            <p className="mt-4 text-muted-foreground max-w-[60ch]">{profile.subheadline}</p>
            <div className="flex flex-wrap gap-2 mt-5">{profile.vibeBadges.map((b) => (<Badge key={b} variant="secondary">{b}</Badge>))}</div>
            <div className="mt-6 flex gap-3">
              <a href="#work"><Button>View Work</Button></a>
              <Button variant="secondary" onClick={() => { navigator.clipboard.writeText(profile.email); toast({ title: "Email copied", description: profile.email }); }}>Copy Email</Button>
            </div>
          </div>
          <div className="relative">
            <div ref={portraitRef} className="glass rounded-xl overflow-hidden shadow-sm">
              <img src={profile.headshot} alt="Saksham Kalra" className="w-full h-[260px] object-cover" />
            </div>
            <div className="mt-4 glass rounded-xl overflow-hidden shadow-sm">
              <div className="aspect-video">
                <video src={profile.videoMp4} muted loop autoPlay playsInline className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <WorkedWithShowcase items={employers} />

      <section className="mt-10">
        <h4 className="text-sm uppercase tracking-wider text-muted-foreground">Tools & Platforms</h4>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">{tools.map((it) => (<div key={it.label} className="glass h-12 px-3 py-2 flex items-center justify-center"><span className="text-sm opacity-90">{it.label}</span></div>))}</div>
      </section>

      <section className="mt-14">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="glass"><CardHeader><CardTitle className="tracking-tight">B2B SaaS</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground -mt-3"><ul className="list-disc pl-5 space-y-2">{showcase.b2b.map((s) => (<li key={s}>{s}</li>))}</ul></CardContent></Card>
          <Card className="glass"><CardHeader><CardTitle className="tracking-tight">B2C Health Apps</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground -mt-3"><ul className="list-disc pl-5 space-y-2">{showcase.b2c.map((s) => (<li key={s}>{s}</li>))}</ul></CardContent></Card>
        </div>
      </section>

      <section id="work" className="mt-20">
        <div className="flex items-end justify-between"><h2 className="font-display text-3xl md:text-4xl tracking-tight">Selected Work</h2><a className="text-sm inline-flex items-center gap-1 opacity-80 hover:opacity-100" href="#downloads">Full case studies <ExternalLink size={16} /></a></div>
        <Tabs value={tab} onValueChange={setTab} className="mt-4">
          <TabsList>{["All", "Health AI", "CRO", "Onboarding", "Profile"].map((c) => (<TabsTrigger key={c} value={c}>{c}</TabsTrigger>))}</TabsList>
          {["All", "Health AI", "CRO", "Onboarding", "Profile"].map((c) => (<TabsContent key={c} value={c} className="mt-6"><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{filtered.map((p) => (<ProjectCard key={p.id} item={p} />))}</div></TabsContent>))}
        </Tabs>
      </section>

      <section id="writing" className="mt-20">
        <h3 className="font-display text-2xl md:text-3xl tracking-tight">Writing</h3>
        <div className="grid md:grid-cols-2 gap-6 mt-6">{articles.map((a) => (<a key={a.title} href={a.url} target="_blank" rel="noreferrer" className="block"><Card className="hover:-translate-y-0.5 transition-transform"><CardHeader><CardTitle className="text-base tracking-tight">{a.title}</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground -mt-4 pb-4">{a.date}</CardContent></Card></a>))}</div>
      </section>

      <section id="about" className="mt-20">
        <h3 className="font-display text-2xl md:text-3xl tracking-tight">Career in Short</h3>
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 mt-6">
          <div className="max-w-prose text-muted-foreground"><p>I turn ambiguity into velocity. AI-first in health — shipping responsibly with patient empathy and operational scale. Arsenal on weekends, Hindi rap on repeat, family at the core.</p></div>
          <div><div className="mt-1 grid gap-3">{timeline.map((t) => (<div key={t.year} className="glass p-3"><div className="flex items-center justify-between"><span className="text-sm text-muted-foreground">{t.year}</span><span className="text-sm">{t.org}</span></div><div className="mt-1 text-sm font-medium">{t.role}</div><div className="mt-2 flex flex-wrap gap-2">{t.highlights.map((h) => (<Badge key={h} variant="secondary">{h}</Badge>))}</div></div>))}</div></div>
        </div>
      </section>

      <section id="downloads" className="mt-20">
        <div className="flex items-end justify-between"><h3 className="font-display text-2xl md:text-3xl tracking-tight">Case Studies & Decks</h3><a href="#top" className="text-sm opacity-80 hover:opacity-100">Back to top</a></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">{downloads.map((d) => (<a key={d.label} href={d.href} target="_blank" rel="noreferrer" className="block"><Card className="hover:border-foreground/40 transition-colors"><CardContent className="p-5 flex items-center justify-between"><span className="text-sm">{d.label}</span><Download size={18} className="opacity-70" /></CardContent></Card></a>))}</div>
      </section>

      <Separator className="my-20" />

      <section className="mb-24"><div className="glass-deep p-6 md:p-8 grid md:grid-cols-[1.2fr_0.8fr] gap-6 items-center"><div><h3 className="font-display text-2xl md:text-3xl tracking-tight">Let’s ship the next breakthrough</h3><p className="text-muted-foreground mt-2">Zero theater. Real outcomes. AI-first, patient-centered, operator-approved.</p></div><div className="flex md:justify-end gap-3"><a href={`mailto:${profile.email}`}><Button>Email Me</Button></a><a href={profile.links.linkedin} target="_blank" rel="noreferrer"><Button variant="secondary">LinkedIn</Button></a></div></div></section>
    </div>
  );
}