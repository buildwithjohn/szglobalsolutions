import Link from 'next/link';
import { img } from '@/lib/site';
import { SectionHeading, Stat } from '@/components/ui';
import {
  Globe,
  Users,
  Handshake,
  Target,
  Flame,
  Diamond,
  Building,
  Leaf,
  Chart,
  Arrow,
} from '@/components/Icons';

export const metadata = {
  title: 'Why Choose Us',
  description:
    'We combine deep market knowledge, commercial disciplined execution and a commitment to integrity to deliver results that create lasting value.',
};

// Generated graphic — gold archery target with an arrow in the bullseye.
function TargetGraphic() {
  return (
    <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-navy-700 to-navy-950">
      <svg viewBox="0 0 120 120" className="h-[78%] w-[78%]">
        <circle cx="58" cy="62" r="50" fill="none" stroke="#e8a33d" strokeWidth="2" opacity="0.25" />
        <circle cx="58" cy="62" r="38" fill="none" stroke="#e8a33d" strokeWidth="2" opacity="0.4" />
        <circle cx="58" cy="62" r="26" fill="#e8a33d" opacity="0.12" />
        <circle cx="58" cy="62" r="26" fill="none" stroke="#e8a33d" strokeWidth="2" opacity="0.6" />
        <circle cx="58" cy="62" r="8" fill="#e8a33d" />
        <line x1="104" y1="14" x2="62" y2="58" stroke="#f2b955" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M104 14l-9 2 7 7 2-9Z" fill="#f2b955" />
        <path d="M62 58l-5-2 2 5" fill="none" stroke="#0a1019" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

// Generated graphic — rising financial chart.
function ChartGraphic() {
  const bars = [22, 34, 30, 48, 60, 80];
  return (
    <div className="relative flex h-full w-full items-end justify-center gap-[6px] bg-gradient-to-br from-navy-700 to-navy-950 p-6">
      {bars.map((h, i) => (
        <span
          key={i}
          className="w-3 rounded-t bg-gradient-to-t from-gold/30 to-gold"
          style={{ height: `${h}%`, opacity: 0.5 + i * 0.08 }}
        />
      ))}
      <svg viewBox="0 0 120 90" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <polyline points="6,74 28,60 50,64 72,40 94,26 112,10" fill="none" stroke="#f2b955" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M112 10l-10 1 5 8 5-9Z" fill="#f2b955" />
      </svg>
    </div>
  );
}

const reasons = [
  { icon: Globe, title: 'GLOBAL REACH', text: 'Strong presence across key markets in Africa, the GCC, Europe and beyond.', image: img.dubai },
  { icon: Users, title: 'SECTOR EXPERTISE', text: 'Specialised knowledge in energy, commodities and infrastructure with a commercial edge.', image: img.solar },
  { icon: Handshake, title: 'TRUSTED PARTNERSHIPS', text: 'Long-standing relationships with investors, corporates and government stakeholders.', image: img.handshake },
  { icon: Target, title: 'FOCUSED ON OUTCOMES', text: 'We align our success with our clients’ success delivering measurable, sustainable results.', graphic: TargetGraphic },
];

const sectors = [
  { icon: Flame, color: 'bg-amber-500', title: 'ENERGY & OIL AND GAS', image: img.oilRig, text: 'Unlocking value across the energy value chain.' },
  { icon: Diamond, color: 'bg-emerald-500', title: 'MINING & MINERALS', image: img.gold, text: 'Connecting resources with global markets.' },
  { icon: Building, color: 'bg-orange-500', title: 'INFRASTRUCTURE & LOGISTICS', image: img.shipping, text: 'Enabling trade and supporting economic transformation.' },
  { icon: Leaf, color: 'bg-sky-500', title: 'RENEWABLES & CLEAN ENERGY', image: img.wind, text: 'Investing in a sustainable and cleaner future.' },
  { icon: Chart, color: 'bg-violet-500', title: 'FINANCIAL ADVISORY', graphic: ChartGraphic, text: 'Strategic advice that drives growth and ensures resilience.' },
];

const stats = [
  { value: '50+', label: 'Transactions Supported' },
  { value: '25+', label: 'Countries Engaged' },
  { value: '100+', label: 'Clients & Partners Served' },
];

export default function WhyChooseUsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img.globe} alt="" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 to-navy-950" />
        </div>
        <div className="container-x relative grid gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_1.7fr]">
          <div>
            <p className="eyebrow animate-fade-up">BUILT ON EXPERIENCE. DRIVEN BY IMPACT.</p>
            <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl">
              <span className="line-reveal block">
                <span style={{ '--line-delay': '120ms' }}>Why Clients</span>
              </span>
              <span className="line-reveal block">
                <span style={{ '--line-delay': '250ms' }}>
                  <span className="shine-text">Choose Us</span>
                </span>
              </span>
            </h1>
            <p className="mt-6 max-w-md animate-fade-up text-base leading-relaxed text-slate-300 [animation-delay:380ms]">
              We combine deep market knowledge, commercial disciplined execution and a
              commitment to integrity to deliver results that create lasting value.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {reasons.map((r) => (
              <div
                key={r.title}
                data-reveal
                className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1.5 hover:border-gold/50"
              >
                <div className="p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-gold/30 text-gold">
                    <r.icon width={22} height={22} />
                  </div>
                  <h3 className="mt-4 font-display text-sm font-semibold tracking-wide text-white">
                    {r.title}
                  </h3>
                  <span className="mt-2 block h-0.5 w-8 bg-gold/70" />
                  <p className="mt-3 text-xs leading-relaxed text-slate-400">{r.text}</p>
                </div>
                <div className="relative mt-auto h-40 overflow-hidden">
                  {r.graphic ? (
                    <r.graphic />
                  ) : (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={r.image}
                        alt=""
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy-950/60 to-transparent" />
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS WE SERVE */}
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="SECTORS WE SERVE" title="Deep Expertise." accent="Proven Insight." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {sectors.map((s) => (
              <div
                key={s.title}
                data-reveal
                className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1.5 hover:border-gold/50"
              >
                <div className="relative h-40 overflow-hidden">
                  {s.graphic ? (
                    <s.graphic />
                  ) : (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <img
                      src={s.image}
                      alt=""
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                  )}
                </div>
                <div className="relative -mt-5 px-5 pb-5">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full ${s.color} text-white shadow-lg ring-4 ring-navy-950`}>
                    <s.icon width={20} height={20} />
                  </div>
                  <h3 className="mt-3 font-display text-sm font-semibold tracking-wide text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR IMPACT */}
      <section className="section border-t border-white/10 bg-navy-900/40">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <div className="absolute inset-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.impact} alt="" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-950/10" />
            </div>
            <div data-reveal className="relative max-w-xl p-10 sm:p-14">
              <p className="eyebrow">OUR IMPACT</p>
              <h2 className="mt-3 heading-lg">
                Creating Opportunities.<br />
                Building <span className="shine-text">Legacies.</span>
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-300">
                We are more than advisors—we are catalysts for growth, connecting vision with
                capital to build businesses, strengthen economies and empower communities.
              </p>
              <Link href="/contact" className="btn-primary mt-7">
                Partner With Us <Arrow width={16} height={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS + ONE PURPOSE */}
      <section className="section">
        <div className="container-x grid gap-8 lg:grid-cols-[2fr_1.4fr] lg:items-center">
          <div className="grid grid-cols-3 gap-6">
            {stats.map((s) => (
              <Stat key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
          <div data-reveal className="rounded-xl border border-gold/20 bg-white/[0.03] p-7">
            <p className="font-display text-lg font-semibold text-gold">One Purpose</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              To connect opportunities with the right strategy, partners and capital—delivering
              measurable results that create lasting value across borders.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
