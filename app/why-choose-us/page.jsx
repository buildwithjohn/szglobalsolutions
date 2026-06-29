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

const reasons = [
  { icon: Globe, title: 'GLOBAL REACH', text: 'Strong presence across key markets in Africa, the GCC, Europe and beyond.' },
  { icon: Users, title: 'SECTOR EXPERTISE', text: 'Specialised knowledge in energy, commodities and infrastructure with a commercial edge.' },
  { icon: Handshake, title: 'TRUSTED PARTNERSHIPS', text: 'Long-standing relationships with investors, corporates and government stakeholders.' },
  { icon: Target, title: 'FOCUSED ON OUTCOMES', text: 'We align our success with our clients’ success delivering measurable, sustainable results.' },
];

const sectors = [
  { icon: Flame, title: 'ENERGY & OIL AND GAS', image: img.oilRig, text: 'Unlocking value across the energy value chain.' },
  { icon: Diamond, title: 'MINING & MINERALS', image: img.mining, text: 'Connecting resources with global markets.' },
  { icon: Building, title: 'INFRASTRUCTURE & LOGISTICS', image: img.shipping, text: 'Enabling trade and supporting economic transformation.' },
  { icon: Leaf, title: 'RENEWABLES & CLEAN ENERGY', image: img.wind, text: 'Investing in a sustainable and cleaner future.' },
  { icon: Chart, title: 'FINANCIAL ADVISORY', image: img.finance, text: 'Strategic advice that drives growth and ensures resilience.' },
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
          <img src={img.worldNight} alt="" className="h-full w-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/85 to-navy-950" />
        </div>
        <div className="container-x relative grid gap-12 py-20 sm:py-28 lg:grid-cols-[1fr_1.4fr]">
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

          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((r) => (
              <div key={r.title} data-reveal className="card">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <r.icon width={22} height={22} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold tracking-wide text-white">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{r.text}</p>
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
                className="group relative min-h-[280px] overflow-hidden rounded-xl border border-white/10 transition duration-300 hover:-translate-y-1 hover:border-gold/40"
              >
                <div className="absolute inset-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-transparent" />
                </div>
                <div className="relative flex h-full flex-col justify-end p-5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gold text-navy-950">
                    <s.icon width={20} height={20} />
                  </div>
                  <h3 className="font-display text-sm font-semibold tracking-wide text-white">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">{s.text}</p>
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
              <img src={img.coast} alt="" className="h-full w-full object-cover opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/40" />
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
