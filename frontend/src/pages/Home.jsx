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
    <a href={item.link} target="_blank" rel="noreferrer" className="block"&gt;
      <Card className="overflow-hidden group border-border/70 hover:border-foreground/30 transition-colors" style={tilt.style} onMouseMove={tilt.onMouseMove} onMouseLeave={tilt.onMouseLeave}&gt;
        <div className="relative aspect-[4/3] overflow-hidden"&gt;
          <img src={item.image} alt={item.title} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-[filter,transform] duration-500 group-hover:scale-[1.03]" /&gt;
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" /&gt;
        </div&gt;
        <CardHeader className="pb-2"&gt;
          <CardTitle className="flex items-start justify-between gap-3 text-base"&gt;
            <span className="tracking-tight"&gt;{item.title}</span&gt;
            <ArrowUpRight size={18} className="opacity-60 group-hover:opacity-100" /&gt;
          </CardTitle&gt;
        </CardHeader&gt;
        <CardContent className="pt-0 pb-4"&gt;
          <p className="text-sm text-muted-foreground"&gt;{item.subtitle}</p&gt;
          <div className="flex flex-wrap gap-2 mt-3"&gt;
            {item.tags.map((t) => (
              <Badge key={t} variant="secondary"&gt;{t}</Badge&gt;
            ))}
          </div&gt;
          <div className="flex gap-4 mt-4 text-xs text-muted-foreground"&gt;
            {item.impact.map((m) => (
              <div key={m.label} className="flex items-center gap-1"&gt;
                <span className="font-medium text-foreground"&gt;{m.value}</span&gt; {m.label}
              </div&gt;
            ))}
          </div&gt;
        </CardContent&gt;
      </Card&gt;
    </a&gt;
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
    <div className="py-12" id="top"&gt;
      {/* Hero */}
      <section className="pt-8 md:pt-14"&gt;
        <div className="grid md:grid-cols-[1.3fr_0.7fr] gap-10 items-center"&gt;
          <div&gt;
            <h1 className="text-4xl md:text-6xl tracking-tight leading-[1.05]"&gt;{profile.headline}</h1&gt;
            <p className="mt-4 text-muted-foreground max-w-[58ch]"&gt;
              {profile.subheadline} I am relentlessly outcome-focused and hands-on — from strategy
              to execution, with experiments, AI-assisted workflows, and elegant UX.
            </p&gt;
            <div className="flex flex-wrap gap-2 mt-5"&gt;
              {profile.vibeBadges.map((b) => (
                <Badge key={b} variant="secondary"&gt;{b}</Badge&gt;
              ))}
            </div&gt;
            <div className="mt-6 flex gap-3"&gt;
              <a href="#work"&gt;
                <Button&gt;View Work</Button&gt;
              </a&gt;
              <Button
                variant="secondary"
                onClick={() => {
                  navigator.clipboard.writeText(profile.email);
                  toast({ title: "Email copied", description: profile.email });
                }}
              &gt;
                Copy Email
              </Button&gt;
            </div&gt;
          </div&gt;
          <div className="justify-self-center"&gt;
            <RotatingRing /&gt;
          </div&gt;
        </div&gt;
      </section&gt;

      {/* Work */}
      <section id="work" className="mt-20"&gt;
        <div className="flex items-end justify-between"&gt;
          <h2 className="text-2xl md:text-3xl tracking-tight"&gt;Selected Work</h2&gt;
          <a className="text-sm inline-flex items-center gap-1 opacity-80 hover:opacity-100" href="#downloads"&gt;
            Full case studies <ExternalLink size={16} /&gt;
          </a&gt;
        </div&gt;
        <Tabs value={tab} onValueChange={setTab} className="mt-4"&gt;
          <TabsList&gt;
            {categories.map((c) => (
              <TabsTrigger key={c} value={c}&gt;{c}</TabsTrigger&gt;
            ))}
          </TabsList&gt;
          {categories.map((c) => (
            <TabsContent key={c} value={c} className="mt-6"&gt;
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"&gt;
                {filtered.map((p) => (
                  <ProjectCard key={p.id} item={p} /&gt;
                ))}
              </div&gt;
            </TabsContent&gt;
          ))}
        </Tabs&gt;
      </section&gt;

      {/* Video / Motion placeholder */}
      <section className="mt-20"&gt;
        <div className="grid md:grid-cols-2 gap-8 items-center"&gt;
          <div&gt;
            <h3 className="text-xl md:text-2xl tracking-tight"&gt;Motion &amp; Systems Thinking</h3&gt;
            <p className="text-muted-foreground mt-2 max-w-prose"&gt;
              A taste of how I visualize product systems, data flows, and user journeys. I borrow from motion design to make complex things feel simple.
            </p&gt;
            <div className="mt-4 flex gap-3"&gt;
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer"&gt;
                <Button variant="secondary"&gt;Connect on LinkedIn</Button&gt;
              </a&gt;
              <a href="#downloads"&gt;
                <Button&gt;Read Case Studies</Button&gt;
              </a&gt;
            </div&gt;
          </div&gt;
          <div className="relative rounded-lg overflow-hidden border"&gt;
            <div className="aspect-video bg-muted grid place-items-center text-muted-foreground"&gt;
              <iframe
                className="w-full h-full"
                src={profile.videoUrl}
                title="AI Product &amp; PM"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              /&gt;
            </div&gt;
          </div&gt;
        </div&gt;
      </section&gt;

      {/* Writing */}
      <section id="writing" className="mt-20"&gt;
        <h3 className="text-xl md:text-2xl tracking-tight"&gt;Writing</h3&gt;
        <div className="grid md:grid-cols-2 gap-6 mt-6"&gt;
          {articles.map((a) => (
            <a key={a.title} href={a.url} target="_blank" rel="noreferrer" className="block"&gt;
              <Card className="hover:-translate-y-0.5 transition-transform"&gt;
                <CardHeader&gt;
                  <CardTitle className="text-base tracking-tight"&gt;{a.title}</CardTitle&gt;
                </CardHeader&gt;
                <CardContent className="text-sm text-muted-foreground -mt-4 pb-4"&gt;
                  {a.date}
                </CardContent&gt;
              </Card&gt;
            </a&gt;
          ))}
        </div&gt;
      </section&gt;

      {/* About */}
      <section id="about" className="mt-20"&gt;
        <h3 className="text-xl md:text-2xl tracking-tight"&gt;About</h3&gt;
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-10 mt-6"&gt;
          <div className="max-w-prose text-muted-foreground"&gt;
            <p&gt;
              I’m a product manager who turns ambiguity into velocity. I thrive at the intersection of AI and health — balancing safety, compliance, patient empathy, and operational scale.
            </p&gt;
            <p className="mt-3"&gt;
              Off work: Arsenal on the weekend, Hindi rap on repeat, and long walks with family. Building is better with your tribe.
            </p&gt;
          </div&gt;
          <div&gt;
            <h4 className="font-medium tracking-tight"&gt;Career in Short</h4&gt;
            <div className="mt-3 grid gap-3"&gt;
              {timeline.map((t) => (
                <div key={t.year} className="border rounded-md p-3"&gt;
                  <div className="flex items-center justify-between"&gt;
                    <span className="text-sm text-muted-foreground"&gt;{t.year}</span&gt;
                    <span className="text-sm"&gt;{t.org}</span&gt;
                  </div&gt;
                  <div className="mt-1 text-sm font-medium"&gt;{t.role}</div&gt;
                  <div className="mt-2 flex flex-wrap gap-2"&gt;
                    {t.highlights.map((h) => (
                      <Badge key={h} variant="secondary"&gt;{h}</Badge&gt;
                    ))}
                  </div&gt;
                </div&gt;
              ))}
            </div&gt;
          </div&gt;
        </div&gt;
      </section&gt;

      {/* Downloads / Case Studies */}
      <section id="downloads" className="mt-20"&gt;
        <div className="flex items-end justify-between"&gt;
          <h3 className="text-xl md:text-2xl tracking-tight"&gt;Case Studies &amp; Decks</h3&gt;
          <a href="#top" className="text-sm opacity-80 hover:opacity-100"&gt;Back to top</a&gt;
        </div&gt;
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"&gt;
          {downloads.map((d) => (
            <a key={d.label} href={d.href} target="_blank" rel="noreferrer" className="block"&gt;
              <Card className="hover:border-foreground/40 transition-colors"&gt;
                <CardContent className="p-5 flex items-center justify-between"&gt;
                  <span className="text-sm"&gt;{d.label}</span&gt;
                  <Download size={18} className="opacity-70" /&gt;
                </CardContent&gt;
              </Card&gt;
            </a&gt;
          ))}
        </div&gt;
      </section&gt;

      <Separator className="my-20" /&gt;

      {/* Final CTA */}
      <section className="mb-24"&gt;
        <div className="rounded-xl border p-6 md:p-8 grid md:grid-cols-[1.2fr_0.8fr] gap-6 items-center"&gt;
          <div&gt;
            <h3 className="text-xl md:text-2xl tracking-tight"&gt;Let’s ship the next breakthrough</h3&gt;
            <p className="text-muted-foreground mt-2"&gt;Zero theater. Real outcomes. AI-first, patient-centered, operator-approved.</p&gt;
          </div&gt;
          <div className="flex md:justify-end gap-3"&gt;
            <a href="mailto:"+{profile.email}&gt;
              <Button&gt;Email Me</Button&gt;
            </a&gt;
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer"&gt;
              <Button variant="secondary"&gt;LinkedIn</Button&gt;
            </a&gt;
          </div&gt;
        </div&gt;
      </section&gt;
    </div&gt;
  );
}