import { img } from '@/lib/site';
import { SectionLabel } from '@/components/ui';
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
  Eye,
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
  'United Kingdom',
  'United Arab Emirates',
  'Africa',
  'GCC',
  'International Markets',
];

const whyWork = [
  { icon: Shield, title: 'Integrity', text: 'We act with honesty, transparency and professionalism.' },
  { icon: Building, title: 'Experience', text: 'Deep commercial experience across multiple sectors and markets.' },
  { icon: Chart, title: 'Execution', text: 'We focus on action, coordination and measurable outcomes.' },
  { icon: Diamond, title: 'Value Creation', text: 'Our objective is to create long-term value for our clients and partners.' },
  { icon: Handshake, title: 'Collaboration', text: 'We build enduring relationships based on trust and performance.' },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="container-x relative grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <p className="eyebrow animate-fade-up">ABOUT SZ GLOBAL SOLUTIONS</p>
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

          {/* Vivid Dubai skyline + animated gold connection arcs */}
          <div className="animate-fade-up [animation-delay:300ms]">
            <div className="group relative overflow-hidden rounded-2xl border border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.dubai}
                alt="Global markets"
                className="h-[300px] w-full object-cover transition duration-[1.2s] group-hover:scale-105 sm:h-[420px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
              <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 400 300" fill="none" preserveAspectRatio="none">
                <path d="M40 210 C140 90 260 90 360 60" stroke="#e8a33d" strokeWidth="1.2" strokeDasharray="4 6" opacity="0.7" className="animate-fade-in [animation-duration:2s]" />
                <path d="M60 250 C160 160 280 150 370 120" stroke="#f2b955" strokeWidth="1" strokeDasharray="3 7" opacity="0.5" className="animate-fade-in [animation-duration:2.6s]" />
                <circle cx="40" cy="210" r="3" fill="#e8a33d" className="animate-float" />
                <circle cx="360" cy="60" r="3" fill="#e8a33d" className="animate-float" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION · VISION · WHERE WE OPERATE */}
      <section className="section border-b border-white/10">
        <div className="container-x grid gap-6 lg:grid-cols-3">
          {[
            {
              tag: 'OUR MISSION',
              icon: Target,
              text: 'To originate opportunities, structure commercially robust transactions and connect capital, counterparties and markets to unlock sustainable growth.',
            },
            {
              tag: 'OUR VISION',
              icon: Eye,
              text: 'To be a trusted cross-border origination and transaction advisory firm connecting Africa with global markets through disciplined execution, strategic relationships and long-term value creation.',
            },
          ].map((c) => (
            <div key={c.tag} data-reveal className="card flex items-start gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold">
                <c.icon width={28} height={28} />
              </div>
              <div>
                <p className="eyebrow">{c.tag}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{c.text}</p>
              </div>
            </div>
          ))}

          {/* WHERE WE OPERATE — globe + region list */}
          <div data-reveal className="card relative overflow-hidden">
            <p className="eyebrow">WHERE WE OPERATE</p>
            <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-slate-400">
              Our network spans key markets across Africa, the GCC, the UK and international
              jurisdictions.
            </p>
            <ul className="mt-4 space-y-2">
              {operate.map((region) => (
                <li key={region} className="flex items-center gap-2 text-sm font-medium text-white">
                  <Pin width={14} height={14} className="text-gold" />
                  {region}
                </li>
              ))}
            </ul>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.globe}
              alt=""
              className="animate-breathe pointer-events-none absolute -bottom-6 -right-8 h-44 w-44 rounded-full object-cover opacity-70"
            />
          </div>
        </div>
      </section>

      {/* WHY CLIENTS WORK WITH US */}
      <section className="section border-t border-white/10 bg-navy-900/40">
        <div className="container-x">
          <SectionLabel center>WHY CLIENTS WORK WITH US</SectionLabel>
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
    </>
  );
}
