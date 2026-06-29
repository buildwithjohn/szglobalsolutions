import { img } from '@/lib/site';
import { SectionLabel } from '@/components/ui';
import { Globe, Handshake, Users, Target, Shield, Chart, Eye, Pin, Knight } from '@/components/Icons';

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
  { icon: Knight, title: 'Experience', text: 'Deep commercial experience across multiple sectors and markets.' },
  { icon: Users, title: 'Execution', text: 'We focus on action, coordination and measurable outcomes.' },
  { icon: Chart, title: 'Value Creation', text: 'Our objective is to create long-term value for our clients and partners.' },
  { icon: Globe, title: 'Collaboration', text: 'We build enduring relationships based on trust and performance.' },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO — text + pillars left, full-bleed image right */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="grid items-stretch lg:grid-cols-2">
          <div className="px-5 py-14 sm:px-8 sm:py-16 lg:py-20 lg:pl-[max(2rem,calc((100vw-1200px)/2+1rem))] lg:pr-12">
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
            <span className="mt-8 block h-px w-14 bg-gold" />
            <div className="mt-6 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {pillars.map((p, i) => (
                <div
                  key={p.label}
                  className="group flex animate-fade-up flex-col items-start gap-3"
                  style={{ animationDelay: `${560 + i * 90}ms` }}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-gold/30 text-gold transition group-hover:-translate-y-1 group-hover:bg-gold group-hover:text-navy-950">
                    <p.icon width={22} height={22} />
                  </div>
                  <span className="text-sm font-medium text-slate-300">{p.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Full-bleed hero image */}
          <div className="relative min-h-[300px] lg:min-h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img.aboutHero} alt="Connecting global markets" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-transparent to-transparent lg:w-1/4" />
          </div>
        </div>
      </section>

      {/* MISSION · VISION · WHERE WE OPERATE */}
      <section className="relative overflow-hidden border-b border-white/10 py-14 sm:py-20">
        {/* Globe bleeds off the right edge, behind Where We Operate */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img.aboutGlobe}
          alt=""
          className="animate-breathe pointer-events-none absolute right-0 top-1/2 hidden h-[440px] w-[440px] -translate-y-1/2 translate-x-[24%] object-contain opacity-95 lg:block"
        />
        <div className="container-x relative grid gap-6 lg:grid-cols-3">
          {[
            {
              tag: 'OUR MISSION',
              icon: Target,
              iconClass: 'text-white',
              text: 'To originate opportunities, structure commercially robust transactions and connect capital, counterparties and markets to unlock sustainable growth.',
            },
            {
              tag: 'OUR VISION',
              icon: Eye,
              iconClass: 'text-gold',
              text: 'To be a trusted cross-border origination and transaction advisory firm connecting Africa with global markets through disciplined execution, strategic relationships and long-term value creation.',
            },
          ].map((c) => (
            <div key={c.tag} data-reveal className="card flex items-center gap-6 p-7">
              <div className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gradient-to-br from-navy-600 to-navy-900 shadow-[inset_0_2px_10px_rgba(255,255,255,0.06)] ${c.iconClass}`}>
                <c.icon width={34} height={34} />
              </div>
              <div>
                <p className="eyebrow">{c.tag}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{c.text}</p>
              </div>
            </div>
          ))}

          {/* WHERE WE OPERATE — borderless, globe bleeds off the right */}
          <div data-reveal className="relative">
            <div className="relative z-10 max-w-[15rem]">
              <p className="eyebrow">WHERE WE OPERATE</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Our network spans key markets across Africa, the GCC, the UK and international
                jurisdictions.
              </p>
              <ul className="mt-4 space-y-2.5">
                {operate.map((region) => (
                  <li key={region} className="flex items-center gap-2 text-sm font-medium text-white">
                    <Pin width={14} height={14} className="text-gold" />
                    {region}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* mobile globe */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img.aboutGlobe}
          alt=""
          className="animate-breathe mx-auto mt-8 block h-56 w-56 object-contain opacity-90 lg:hidden"
        />
      </section>

      {/* WHY CLIENTS WORK WITH US — divider columns */}
      <section className="section">
        <div className="container-x">
          <SectionLabel center>WHY CLIENTS WORK WITH US</SectionLabel>
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {whyWork.map((w, i) => (
              <div
                key={w.title}
                data-reveal
                className={`px-5 text-center ${i > 0 ? 'lg:border-l lg:border-white/10' : ''}`}
              >
                <w.icon width={40} height={40} className="mx-auto text-gold" />
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
