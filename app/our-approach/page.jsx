import { img } from '@/lib/site';
import {
  Search,
  CheckCircle,
  Handshake,
  Coins,
  Users,
  Chart,
  Shield,
  Bulb,
  Target,
  Globe,
} from '@/components/Icons';

export const metadata = {
  title: 'Our Approach — A Disciplined Approach. Measurable Outcomes.',
  description:
    'Every transaction is unique. Our proven approach ensures we deliver the right strategy, the right partners and the right outcome — every time.',
};

// Per-card colour tokens.
const C = {
  blue: { badge: 'bg-blue-700', ring: 'bg-blue-600', text: 'text-blue-700', line: 'bg-blue-600', soft: 'text-blue-400' },
  green: { badge: 'bg-green-600', ring: 'bg-green-600', text: 'text-green-700', line: 'bg-green-600', soft: 'text-green-400' },
  orange: { badge: 'bg-orange-500', ring: 'bg-orange-500', text: 'text-orange-600', line: 'bg-orange-500', soft: 'text-orange-400' },
  gold: { badge: 'bg-gold-600', ring: 'bg-gold', text: 'text-gold-600', line: 'bg-gold', soft: 'text-gold' },
  navy: { badge: 'bg-navy-800', ring: 'bg-navy-800', text: 'text-navy-900', line: 'bg-navy-800', soft: 'text-slate-200' },
};

const steps = [
  { n: '01', icon: Search, title: 'ORIGINATE', image: img.city, color: C.blue, text: 'We identify and assess high-potential opportunities aligned with your objectives.' },
  { n: '02', icon: CheckCircle, title: 'EVALUATE', image: img.advisory, color: C.green, text: 'We conduct rigorous analysis to validate viability, structure and risk.' },
  { n: '03', icon: Handshake, title: 'STRUCTURE', image: img.handshake, color: C.orange, text: 'We design the optimal transaction structure to create value and mitigate risk.' },
  { n: '04', icon: Coins, title: 'ALIGN CAPITAL', image: img.finance, color: C.blue, text: 'We connect you with the right capital partners to fund and execute.' },
  { n: '05', icon: Users, title: 'EXECUTE', image: img.boardroom, color: C.gold, text: 'We manage the process end-to-end, ensuring smooth execution and stakeholder alignment.' },
  { n: '06', icon: Chart, title: 'DELIVER VALUE', image: img.glassTower, color: C.navy, text: 'We focus on long-term value creation and sustainable growth beyond the deal.' },
];

const principles = [
  { icon: Shield, title: 'INTEGRITY', color: C.blue, text: 'We act with honesty, transparency and professionalism.' },
  { icon: Users, title: 'RELATIONSHIPS', color: C.green, text: 'We build trusted, long-term relationships with our partners.' },
  { icon: Bulb, title: 'EXCELLENCE', color: C.orange, text: 'We are committed to excellence in everything we do.' },
  { icon: Target, title: 'FOCUS', color: C.blue, text: 'We stay focused on measurable results and meaningful outcomes.' },
  { icon: Globe, title: 'DISCIPLINE', color: C.gold, text: 'We apply a structured, disciplined process to every engagement.' },
];

export default function OurApproachPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="grid items-stretch lg:grid-cols-2">
          <div className="px-5 py-14 sm:px-8 sm:py-16 lg:py-24 lg:pl-[max(2rem,calc((100vw-1200px)/2+1rem))] lg:pr-12">
            <p className="eyebrow animate-fade-up">OUR APPROACH</p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.06] text-white sm:text-5xl lg:text-6xl">
              <span className="line-reveal block">
                <span style={{ '--line-delay': '120ms' }}>A Disciplined Approach.</span>
              </span>
              <span className="line-reveal block">
                <span style={{ '--line-delay': '260ms' }}>
                  Measurable <span className="shine-text">Outcomes.</span>
                </span>
              </span>
            </h1>
            <span className="mt-5 block h-0.5 w-16 bg-gold" />
            <p className="mt-5 max-w-xl animate-fade-up text-lg leading-relaxed text-slate-200 [animation-delay:420ms]">
              Every transaction is unique. Our proven approach ensures we deliver the right
              strategy, the right partners and the right outcome—every time.
            </p>
          </div>

          {/* Full-bleed hero image */}
          <div className="relative min-h-[280px] lg:min-h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img.approachHero} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-transparent to-transparent lg:w-1/3" />
          </div>
        </div>
      </section>

      {/* SIX STEPS — light cards */}
      <section className="section">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {steps.map((s) => (
              <div
                key={s.n}
                data-reveal
                className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg transition duration-300 hover:-translate-y-1.5"
              >
                <div className="relative h-32 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.image} alt="" className="h-full w-full object-cover" />
                  <span className={`absolute left-0 top-0 flex h-9 w-11 items-center justify-center rounded-br-xl ${s.color.badge} font-display text-sm font-bold text-white`}>
                    {s.n}
                  </span>
                </div>
                <div className="relative flex flex-1 flex-col px-4 pb-5 pt-7 text-center">
                  <div className={`absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full ${s.color.ring} text-white shadow ring-4 ring-white`}>
                    <s.icon width={20} height={20} />
                  </div>
                  <h3 className={`font-display text-sm font-bold tracking-wide ${s.color.text}`}>
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs leading-snug text-slate-600">{s.text}</p>
                  <span className={`mx-auto mt-3 block h-0.5 w-8 ${s.color.line}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PRINCIPLES  +  GLOBAL PERSPECTIVE */}
      <section className="section pt-0">
        <div className="container-x grid items-stretch gap-6 lg:grid-cols-2">
          {/* OUR PRINCIPLES */}
          <div data-reveal className="rounded-2xl border border-white/10 bg-navy-900/40 p-8 sm:p-10">
            <p className="eyebrow">OUR PRINCIPLES</p>
            <span className="grow-line mt-3" />
            <div className="mt-8 grid grid-cols-2 gap-y-8 sm:grid-cols-5">
              {principles.map((p, i) => (
                <div
                  key={p.title}
                  className={`px-3 text-center ${i > 0 ? 'sm:border-l sm:border-white/10' : ''}`}
                >
                  <p.icon width={30} height={30} className={`mx-auto ${p.color.soft}`} />
                  <h4 className={`mt-3 font-display text-xs font-bold tracking-wide ${p.color.soft}`}>
                    {p.title}
                  </h4>
                  <p className="mt-2 text-[11px] leading-snug text-slate-400">{p.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* GLOBAL PERSPECTIVE, LOCAL INSIGHT */}
          <div data-reveal className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy-900/40">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img.aboutGlobe}
              alt=""
              className="animate-breathe pointer-events-none absolute right-0 top-1/2 hidden h-[150%] -translate-y-1/2 translate-x-[20%] object-contain opacity-90 sm:block"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/70 to-transparent" />
            <div className="relative max-w-md p-8 sm:p-10">
              <h2 className="font-display text-2xl font-bold leading-tight tracking-wide text-white sm:text-3xl">
                GLOBAL PERSPECTIVE,
                <br />
                <span className="shine-text">LOCAL INSIGHT</span>
              </h2>
              <span className="grow-line mt-4" />
              <p className="mt-5 text-sm leading-relaxed text-slate-300">
                Our cross-border footprint, combined with deep local networks, enables us to
                identify and unlock opportunities that others miss.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                We understand local markets, regulations and cultures—allowing us to structure
                and execute transactions with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
