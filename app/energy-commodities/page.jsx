import { img } from '@/lib/site';
import { PageHero, CtaBand, SectionHeading, Stat } from '@/components/ui';
import { Flame, Diamond, Building, Leaf, Chart, Globe, Users, Handshake, Target } from '@/components/Icons';

export const metadata = {
  title: 'Energy & Commodities',
  description:
    'Developing supply corridors, strategic relationships and downstream commercial opportunities across international energy and commodity markets.',
};

const sectors = [
  { icon: Flame, title: 'Energy & Oil and Gas', image: img.oilRig, text: 'Unlocking value across the energy value chain — from upstream assets to downstream distribution.' },
  { icon: Diamond, title: 'Mining & Minerals', image: img.mining, text: 'Connecting resources and operators with global markets, capital and offtake partners.' },
  { icon: Building, title: 'Infrastructure & Logistics', image: img.shipping, text: 'Enabling trade and supporting economic transformation through critical infrastructure.' },
  { icon: Leaf, title: 'Renewables & Clean Energy', image: img.wind, text: 'Investing in a more sustainable and cleaner energy future.' },
  { icon: Chart, title: 'Financial Advisory', image: img.finance, text: 'Strategic advice that drives growth and ensures resilience across commodity cycles.' },
];

const whyUs = [
  { icon: Globe, title: 'Global Reach', text: 'Strong presence across key markets in Africa, the GCC, Europe and beyond.' },
  { icon: Users, title: 'Sector Expertise', text: 'Specialised knowledge in energy, commodities and infrastructure with a commercial edge.' },
  { icon: Handshake, title: 'Trusted Partnerships', text: 'Long-standing relationships with investors, corporates and government stakeholders.' },
  { icon: Target, title: 'Focused on Outcomes', text: 'We align our success with our clients’ success — delivering measurable, sustainable results.' },
];

const stats = [
  { value: '50+', label: 'Transactions Supported' },
  { value: '25+', label: 'Countries Engaged' },
  { value: '100+', label: 'Clients & Partners Served' },
  { value: '1', label: 'Purpose: Lasting Value' },
];

export default function EnergyCommoditiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Energy & Commodities"
        title="Deep Expertise."
        accent="Proven Insight."
        image={img.solar}
        subtitle="We develop supply corridors, strategic relationships and downstream commercial opportunities across international energy and commodity markets — connecting resources, capital and counterparties along the value chain."
      />

      {/* SECTORS */}
      <section className="section">
        <div className="container-x">
          <SectionHeading eyebrow="Sectors We Serve" title="Across the" accent="Value Chain" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {sectors.map((s) => (
              <div key={s.title} className="group relative min-h-[280px] overflow-hidden rounded-xl border border-white/10">
                <div className="absolute inset-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/20" />
                </div>
                <div className="relative flex h-full flex-col justify-end p-5">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gold text-navy-950">
                    <s.icon width={20} height={20} />
                  </div>
                  <h3 className="font-display text-base font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section border-y border-white/10 bg-navy-900/40">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
            <div>
              <p className="eyebrow">Built on Experience. Driven by Impact.</p>
              <h2 className="mt-3 heading-lg">
                Why Clients <span className="text-gold">Choose Us</span>
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-400">
                We combine deep market knowledge, commercial discipline and a commitment to
                integrity to deliver results that create lasting value.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {whyUs.map((w) => (
                <div key={w.title} className="card">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold/10 text-gold">
                    <w.icon width={22} height={22} />
                  </div>
                  <h3 className="mt-4 font-display text-base font-semibold text-white">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{w.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section">
        <div className="container-x grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((s) => (
            <Stat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>
      </section>

      <CtaBand eyebrow="One Purpose." title="Lasting Value." buttonLabel="Partner With Us" />
    </>
  );
}
