import React, { useMemo, useState } from "react";
import { profile, projects, timeline, articles, downloads } from "../mock";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Separator } from "../components/ui/separator";
import { useToast } from "../hooks/use-toast";
import { ArrowUpRight, Download, ExternalLink } from "lucide-react";

function RotatingRing() {
  return (
    <svg width="220" height="220" viewBox="0 0 220 220" className="drop-shadow-sm">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(0,0,0,0.6)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0.15)" />
        </linearGradient>
      </defs>
      <g style={{ transformOrigin: "110px 110px", animation: "spin 18s linear infinite" }}>
        <circle cx="110" cy="110" r="90" fill="none" stroke="url(#g)" strokeWidth="1.5" />
        <circle cx="110" cy="110" r="70" fill="none" stroke="url(#g)" strokeWidth="1.5" />
        <circle cx="110" cy="110" r="50" fill="none" stroke="url(#g)" strokeWidth="1.5" />
      </g>
      <style>{`@keyframes spin { from { transform: rotate(0deg) } to { transform: rotate(360deg) } }`}</style>
    </svg>
  );
}

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

  return (
    <div className="py-12" id="top">
      {/* Hero */}
      <section className="pt-8 md:pt-14">
        <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl tracking-tight leading-[1.05]">{profile.headline}</h1>
            <p className="mt-4 text-muted-foreground max-w-[58ch]">
              {profile.subheadline} I am relentlessly outcome-focused and hands-on — from strategy
              to execution, with experiments, AI-assisted workflows, and elegant UX.
            </p>
            <div className="flex flex-wrap gap-2 mt-5">
              {profile.vibeBadges.map((b) => (
                <Badge key={b} variant="secondary">{b}</Badge>
              ))}
            </div>
            <div className="mt-6 flex gap-3">
              <a href="#work">
                <Button>View Work</Button>
              </a>
              <Button
                variant="secondary"
                onClick={() => {
                  navigator.clipboard.writeText(profile.email);
                  toast({ title: "Email copied", description: profile.email });
                }}
              >
                Copy Email
              </Button>
            </div>
          </div>
          <div className="justify-self-center">
            <RotatingRing />
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mt-20">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl tracking-tight">Selected Work</h2>
          <a className="text-sm inline-flex items-center gap-1 opacity-80 hover:opacity-100" href="#downloads">
            Full case studies <ExternalLink size={16} />
          </a>
        </div>
        <Tabs value={tab} onValueChange={setTab} className="mt-4">
          <TabsList>
            {categories.map((c) => (
              <TabsTrigger key={c} value={c}>{c}</TabsTrigger>
            ))}
          </TabsList>
          {categories.map((c) => (
            <TabsContent key={c} value={c} className="mt-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((p) => (
                  <ProjectCard key={p.id} item={p} />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* Video / Motion placeholder */}
      <section className="mt-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl md:text-2xl tracking-tight">Motion & Systems Thinking</h3>
            <p className="text-muted-foreground mt-2 max-w-prose">
              A taste of how I visualize product systems, data flows, and user journeys. I borrow from motion design to make complex things feel simple.
            </p>
            <div className="mt-4 flex gap-3">
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                <Button variant="secondary">Connect on LinkedIn</Button>
              </a>
              <a href="#downloads">
                <Button>Read Case Studies</Button>
              </a>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden border">
            <div className="aspect-video bg-muted grid place-items-center text-muted-foreground">
              <iframe
                className="w-full h-full"
                src={profile.videoUrl}
                title="AI Product & PM"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Writing */}
      <section id="writing" className="mt-20">
        <h3 className="text-xl md:text-2xl tracking-tight">Writing</h3>
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {articles.map((a) => (
            <a key={a.title} href={a.url} target="_blank" rel="noreferrer" className="block">
              <Card className="hover:-translate-y-0.5 transition-transform">
                <CardHeader>
                  <CardTitle className="text-base tracking-tight">{a.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground -mt-4 pb-4">
                  {a.date}
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="mt-20">
        <h3 className="text-xl md:text-2xl tracking-tight">About</h3>
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 mt-6">
          <div className="max-w-prose text-muted-foreground">
            <p>
              I’m a product manager who turns ambiguity into velocity. I thrive at the intersection of AI and health — balancing safety, compliance, patient empathy, and operational scale.
            </p>
            <p className="mt-3">
              Off work: Arsenal on the weekend, Hindi rap on repeat, and long walks with family. Building is better with your tribe.
            </p>
          </div>
          <div>
            <h4 className="font-medium tracking-tight">Career in Short</h4>
            <div className="mt-3 grid gap-3">
              {timeline.map((t) => (
                <div key={t.year} className="border rounded-md p-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{t.year}</span>
                    <span className="text-sm">{t.org}</span>
                  </div>
                  <div className="mt-1 text-sm font-medium">{t.role}</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {t.highlights.map((h) => (
                      <Badge key={h} variant="secondary">{h}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Downloads / Case Studies */}
      <section id="downloads" className="mt-20">
        <div className="flex items-end justify-between">
          <h3 className="text-xl md:text-2xl tracking-tight">Case Studies & Decks</h3>
          <a href="#top" className="text-sm opacity-80 hover:opacity-100">Back to top</a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {downloads.map((d) => (
            <a key={d.label} href={d.href} target="_blank" rel="noreferrer" className="block">
              <Card className="hover:border-foreground/40 transition-colors">
                <CardContent className="p-5 flex items-center justify-between">
                  <span className="text-sm">{d.label}</span>
                  <Download size={18} className="opacity-70" />
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </section>

      <Separator className="my-20" />

      {/* Final CTA */}
      <section className="mb-24">
        <div className="rounded-xl border p-6 md:p-8 grid md:grid-cols-[1.2fr_0.8fr] gap-6 items-center">
          <div>
            <h3 className="text-xl md:text-2xl tracking-tight">Let’s ship the next breakthrough</h3>
            <p className="text-muted-foreground mt-2">Zero theater. Real outcomes. AI-first, patient-centered, operator-approved.</p>
          </div>
          <div className="flex md:justify-end gap-3">
            <a href={`mailto:${profile.email}`}>
              <Button>Email Me</Button>
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
              <Button variant="secondary">LinkedIn</Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}