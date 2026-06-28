import { img } from '@/lib/site';
import { SectionHeading, CtaBand, Stat } from '@/components/ui';
import {
  Globe,
  Handshake,
  Users,
  Target,
  Shield,
  Building,
  Chart,
  Diamond,
  Pin,
} from '@/components/Icons';

export const metadata = {
  title: 'About — Who We Are',
  description:
    'SZ Global Solutions is a UK & UAE-based origination and transaction advisory firm operating across Africa, the GCC and international markets.',
};

const pillars = [
  { icon: Globe, label: 'Cross-border expertise' },
  { icon: Handshake, label: 'Commercial discipline' },
  { icon: Users, label: 'Strategic relationships' },
  { icon: Target, label: 'Execution focus' },
];

const operate = [
  { region: 'United Kingdom', city: 'London', image: img.city },
  { region: 'United Arab Emirates', city: 'Dubai', image: img.dubai },
  { region: 'Africa', city: 'Across key markets', image: img.coast },
  { region: 'GCC', city: 'Strategic presence', image: img.finance },
  { region: 'International Markets', city: 'Global reach', image: img.worldNight },
];

const whyWork = [
  { icon: Shield, title: 'Integrity', text: 'We act with honesty, transparency and professionalism.' },
  { icon: Building, title: 'Experience', text: 'Deep commercial experience across multiple sectors and markets.' },
  { icon: Chart, title: 'Execution', text: 'We focus on action, coordination and measurable outcomes.' },
  { icon: Diamond, title: 'Value Creation', text: 'Our objective is to create long-term value for our clients and partners.' },
  { icon: Handshake, title: 'Collaboration', text: 'We build enduring relationships based on trust and performance.' },
];

const stats = [
  { value: '50+', label: 'Transactions Supported' },
  { value: '25+', label: 'Countries Engaged' },
  { value: '100+', label: 'Clients & Partners Served' },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO + WHERE WE OPERATE */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img.worldNight} alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 to-navy-950" />
        </div>
        <div className="container-x relative grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <p className="eyebrow animate-fade-up">About SZ Global Solutions</p>
            <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
              <span className="line-reveal block">
                <span style={{ '--line-delay': '120ms' }}>
                  Who We <span className="shine-text">Are</span>
                </span>
              </span>
            </h1>
            <p className="mt-6 max-w-xl animate-fade-up text-lg leading-relaxed text-slate-200 [animation-delay:340ms]">
              SZ Global Solutions is a UK and UAE-based origination and transaction advisory
              firm operating across Africa, the GCC and international markets.
            </p>
            <p className="mt-4 max-w-xl animate-fade-up text-sm leading-relaxed text-slate-400 [animation-delay:460ms]">
              We specialise in identifying high-value opportunities, developing transaction
              strategies and connecting businesses with capital, strategic partners and
              international markets to turn opportunities into measurable outcomes.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {pillars.map((p, i) => (
                <div
                  key={p.label}
                  className="group flex animate-fade-up flex-col items-start gap-3"
                  style={{ animationDelay: `${560 + i * 90}ms` }}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold/10 text-gold transition group-hover:-translate-y-1 group-hover:bg-gold group-hover:text-navy-950">
                    <p.icon width={22} height={22} />
                  </div>
                  <span className="text-sm font-medium text-slate-300">{p.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-up rounded-xl border border-white/10 bg-navy-900/70 p-6 backdrop-blur">
            <p className="eyebrow">Where We Operate</p>
            <ul className="mt-5 space-y-4">
              {operate.map((o) => (
                <li key={o.region} className="flex items-center gap-4">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-white/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={o.image} alt="" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-sm font-semibold text-white">
                      <Pin width={13} height={13} className="text-gold" />
                      {o.region}
                    </div>
                    <div className="text-xs text-slate-400">{o.city}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          {[
            {
              tag: 'Our Mission',
              image: img.mountain,
              text: 'To originate opportunities, structure commercially robust transactions and connect capital, counterparties and markets to unlock sustainable growth.',
            },
            {
              tag: 'Our Vision',
              image: img.lighthouse,
              text: 'To be a trusted cross-border origination and transaction advisory firm connecting Africa with global markets through disciplined execution, strategic relationships and long-term value creation.',
            },
          ].map((c) => (
            <div key={c.tag} className="card flex items-start gap-5">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border border-gold/30">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.image} alt="" className="h-full w-full object-cover" />
              </div>
              <div>
                <p className="eyebrow">{c.tag}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{c.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CLIENTS WORK WITH US */}
      <section className="section border-y border-white/10 bg-navy-900/40">
        <div className="container-x">
          <SectionHeading center eyebrow="Why Clients Work With Us" title="Principles That" accent="Set Us Apart" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {whyWork.map((w) => (
              <div key={w.title} className="card text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <w.icon width={24} height={24} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-white">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="section">
        <div className="container-x">
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-navy-800 to-navy-900 p-10 sm:p-14">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_2fr]">
              <div>
                <p className="eyebrow">Our Impact</p>
                <h2 className="mt-3 heading-lg">
                  Creating Opportunities.<br />
                  Building <span className="text-gold">Legacies.</span>
                </h2>
              </div>
              <div className="grid grid-cols-3 gap-6">
                {stats.map((s) => (
                  <Stat key={s.label} value={s.value} label={s.label} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand buttonLabel="Partner With Us" />
    </>
  );
}
