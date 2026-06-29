import Link from 'next/link';
import { img } from '@/lib/site';
import { Arrow, Pin, Globe, Handshake, Target } from '@/components/Icons';

export const metadata = {
  title: 'Energy & Commodities — Connecting Supply. Capital. Markets.',
  description:
    'We originate commercially viable energy and commodity opportunities, structure transactions and connect trusted counterparties across Africa, the GCC and international markets.',
};

const whatWeDo = [
  { title: 'SUPPLY ORIGINATION', image: img.solar, text: 'Developing access to reliable producers, refineries and suppliers across global markets.' },
  { title: 'COMMERCIAL STRUCTURING', image: img.advisory, text: 'Creating executable commercial frameworks for buyers, suppliers and strategic partners.' },
  { title: 'TRANSACTION EXECUTION', image: img.handshake, text: 'Supporting counterparties from opportunity identification through commercial completion.' },
];

const markets = ['United Kingdom', 'United Arab Emirates', 'West Africa', 'Europe', 'Asia'];

const marketsWeServe = [
  { label: 'DOWNSTREAM OIL', image: img.solar },
  { label: 'REFINED PRODUCTS', image: img.oilRig },
  { label: 'NATURAL GAS & LNG', image: img.shipping },
  { label: 'PETROCHEMICALS', image: img.heroPort },
  { label: 'POWER & INFRASTRUCTURE', image: img.powerlines },
  { label: 'INDUSTRIAL COMMODITIES', image: img.excavator },
];

const workAlongside = [
  { label: 'REFINERIES', image: img.solar },
  { label: 'BUYERS', image: img.glassTower },
  { label: 'NATIONAL OIL COMPANIES', image: img.oilRig },
  { label: 'INVESTORS', image: img.finance },
  { label: 'TRADING HOUSES', image: img.handshake },
  { label: 'GOVERNMENTS', image: img.government },
  { label: 'INDEPENDENT TRADERS', image: img.boardroom },
  { label: 'INFRASTRUCTURE DEVELOPERS', image: img.excavator },
];

const reach = [
  { icon: Globe, image: img.worldNight, title: 'GLOBAL NETWORK', text: 'Across 5 Continents' },
  { icon: Handshake, image: img.handshake, title: 'STRATEGIC CONNECTIONS', text: 'With Key Market Participants' },
  { icon: Target, image: img.oilRig, title: 'EXECUTION FOCUSED', text: 'From Opportunity to Value' },
];

const lifecycle = [
  { n: '1', title: 'OPPORTUNITY IDENTIFICATION', image: img.boardroom },
  { n: '2', title: 'QUALIFICATION & DUE DILIGENCE', image: img.advisory },
  { n: '3', title: 'COMMERCIAL STRUCTURING', image: img.meeting },
  { n: '4', title: 'COUNTERPARTY ALIGNMENT', image: img.handshake },
  { n: '5', title: 'CAPITAL ARRANGEMENT', image: img.finance },
  { n: '6', title: 'EXECUTION & DELIVERY', image: img.shipping },
];

function PanelLabel({ children }) {
  return (
    <>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">{children}</p>
      <span className="mt-2 mb-5 block h-0.5 w-10 bg-gold" />
    </>
  );
}

export default function EnergyCommoditiesPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="grid items-stretch lg:grid-cols-2">
          <div className="px-5 py-16 sm:px-8 sm:py-20 lg:py-24 lg:pl-[max(2rem,calc((100vw-1320px)/2+1rem))] lg:pr-12">
            <p className="eyebrow animate-fade-up">ENERGY &amp; COMMODITIES</p>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="line-reveal block"><span style={{ '--line-delay': '110ms' }}>CONNECTING SUPPLY.</span></span>
              <span className="line-reveal block"><span style={{ '--line-delay': '250ms' }}>CAPITAL. <span className="shine-text">MARKETS.</span></span></span>
            </h1>
            <p className="mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-slate-300 [animation-delay:420ms]">
              We originate commercially viable energy and commodity opportunities, structure
              transactions and connect trusted counterparties across Africa, the GCC and
              international markets.
            </p>
            <div className="mt-8 flex flex-col gap-3 animate-fade-up [animation-delay:560ms] sm:flex-row sm:gap-4">
              <a href="#products" className="btn-primary justify-center sm:justify-start">
                Explore Products <Arrow width={16} height={16} />
              </a>
              <a href="#capabilities" className="btn-ghost justify-center sm:justify-start">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gold/60">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor"><path d="M0 0l8 4-8 4z" /></svg>
                </span>
                Our Capabilities
              </a>
            </div>
          </div>

          <div className="relative min-h-[300px] lg:min-h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img.heroPort} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-transparent to-transparent lg:w-1/3" />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
        {/* WHAT WE DO */}
        <section id="capabilities" className="section">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white">What We Do</p>
            <span className="mx-auto mt-3 block h-0.5 w-12 bg-gold" />
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {whatWeDo.map((s) => (
              <div key={s.title} data-reveal className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
                <div className="relative h-40 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.image} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-base font-semibold tracking-wide text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOUR PANELS */}
        <section id="products" className="pb-16">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-[0.95fr_1.15fr_1.1fr_0.95fr]">
            {/* OUR MARKETS */}
            <div className="bg-navy-950 p-6">
              <PanelLabel>Our Markets</PanelLabel>
              <div className="relative mb-4 overflow-hidden rounded-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/world-map.jpg" alt="" className="h-28 w-full object-cover" />
              </div>
              <ul className="space-y-2.5">
                {markets.map((m) => (
                  <li key={m} className="flex items-center gap-2 text-sm font-medium text-white">
                    <Pin width={14} height={14} className="shrink-0 text-gold" />
                    {m}
                  </li>
                ))}
              </ul>
            </div>

            {/* MARKETS WE SERVE */}
            <div className="bg-navy-950 p-6">
              <PanelLabel>Markets We Serve</PanelLabel>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {marketsWeServe.map((m) => (
                  <div key={m.label} className="group relative h-20 overflow-hidden rounded-md border border-white/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={m.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                    <span className="absolute inset-x-1.5 bottom-1.5 text-[9px] font-semibold leading-tight text-white">{m.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* WE WORK ALONGSIDE */}
            <div className="bg-navy-950 p-6">
              <PanelLabel>We Work Alongside</PanelLabel>
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {workAlongside.map((w) => (
                  <div key={w.label} className="flex items-center gap-2">
                    <div className="relative h-9 w-12 shrink-0 overflow-hidden rounded border border-white/10">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={w.image} alt="" className="h-full w-full object-cover" />
                    </div>
                    <span className="text-[10px] font-medium leading-tight text-slate-200">{w.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* OUR REACH */}
            <div className="bg-navy-950 p-6">
              <PanelLabel>Our Reach. Your Advantage.</PanelLabel>
              <p className="text-xs leading-relaxed text-slate-400">
                Combining deep market intelligence, trusted relationships and commercial
                expertise to deliver opportunities that create long-term value.
              </p>
              <div className="mt-5 space-y-4">
                {reach.map((r) => (
                  <div key={r.title} className="flex items-center gap-3">
                    <div className="relative h-10 w-12 shrink-0 overflow-hidden rounded border border-white/10">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={r.image} alt="" className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-gold">{r.title}</p>
                      <p className="text-[11px] text-slate-400">{r.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* OUR TRANSACTION LIFECYCLE */}
        <section className="pb-20">
          <div className="rounded-2xl border border-gold/30 p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[1.7fr_1fr]">
              <div>
                <PanelLabel>Our Transaction Lifecycle</PanelLabel>
                <div className="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                  {lifecycle.map((s, i) => (
                    <div key={s.n} data-reveal className="relative">
                      <div className="relative h-16 overflow-hidden rounded-md border border-white/10">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={s.image} alt="" className="h-full w-full object-cover" />
                      </div>
                      {i < lifecycle.length - 1 && (
                        <Arrow width={18} height={18} className="absolute -right-3 top-5 hidden text-gold lg:block" />
                      )}
                      <p className="mt-2 text-[10px] font-semibold leading-tight text-white">
                        <span className="text-gold">{s.n}.</span> {s.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Opportunity card */}
              <div className="relative overflow-hidden rounded-xl border border-gold/30">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.heroPort} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-navy-950/80" />
                <div className="relative p-6">
                  <h3 className="font-display text-base font-bold uppercase tracking-wide text-gold">
                    Have an Opportunity to Discuss?
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    We are always open to exploring new opportunities and partnerships. Let’s
                    discuss how we can work together.
                  </p>
                  <Link href="/contact" className="btn-primary mt-5">
                    Contact Us <Arrow width={16} height={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
