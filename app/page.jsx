import Link from 'next/link';
import { img } from '@/lib/site';
import { SectionLabel } from '@/components/ui';
import {
  Arrow,
  Globe,
  Target,
  Coins,
  Users,
  Search,
  CheckCircle,
  Layers,
  Flame,
  Leaf,
  Building,
} from '@/components/Icons';

const whatWeDo = [
  {
    icon: Target,
    title: 'DEAL ORIGINATION',
    image: img.oilRig,
    text: 'We identify proprietary opportunities, evaluate commercial potential and connect them with investors, strategic buyers, operators and international partners.',
  },
  {
    icon: Coins,
    title: 'CAPITAL ADVISORY',
    image: img.advisory,
    text: 'We help businesses and project sponsors secure the capital they need through equity, debt, project finance, trade finance and strategic investment across multiple sectors.',
  },
  {
    icon: Users,
    title: 'TRANSACTION ADVISORY',
    image: img.boardroom,
    text: 'We provide commercial guidance throughout the transaction lifecycle, supporting structuring, negotiations, stakeholder alignment and execution.',
  },
];

const method = [
  { n: '1', icon: Search, title: 'ORIGINATE', text: 'Identify proprietary opportunities and define the commercial proposition.' },
  { n: '2', icon: CheckCircle, title: 'VALIDATE', text: 'Assess market dynamics, commercial viability and execution readiness.' },
  { n: '3', icon: Layers, title: 'STRUCTURE', text: 'Develop the commercial, financial and strategic framework.' },
  { n: '4', icon: Coins, title: 'ALIGN CAPITAL', text: 'Connect opportunities with appropriate funding partners and capital providers.' },
  { n: '5', icon: Users, title: 'CONNECT COUNTERPARTIES', text: 'Introduce buyers, investors, operators and strategic partners.' },
  { n: '6', icon: Target, title: 'EXECUTE', text: 'Coordinate stakeholders through the transaction pathway to completion.' },
];

const focus = [
  {
    icon: Flame,
    title: 'ENERGY & COMMODITIES',
    image: img.solar,
    text: 'Developing supply corridors, strategic relationships and downstream commercial opportunities across international energy markets.',
  },
  {
    icon: Building,
    title: 'CAPITAL ADVISORY',
    image: img.excavator,
    text: 'Supporting businesses and projects across mining, infrastructure, real estate, technology and industrial sectors, investor engagement and transaction execution.',
  },
  {
    icon: Leaf,
    title: 'INFRASTRUCTURE & RENEWABLES',
    image: img.wind,
    text: 'Backing sustainable infrastructure and clean energy projects that drive long-term value and economic growth.',
  },
];

// Horizontal image+content card used by "What We Do" and "Where We Focus".
function HorizontalCard({ icon: Icon, title, image, text }) {
  return (
    <div data-reveal className="card group flex flex-col overflow-hidden p-0 sm:flex-row">
      <div className="relative h-40 overflow-hidden sm:h-auto sm:w-[38%]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
      </div>
      <div className="flex flex-1 items-start gap-4 p-6">
        <Icon width={34} height={34} className="mt-1 shrink-0 text-gold" />
        <div>
          <h3 className="font-display text-base font-bold tracking-wide text-gold">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-400">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* HERO — text left, image right with Cross-Border card */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="grid items-stretch lg:grid-cols-2">
          <div className="px-5 py-14 sm:px-8 sm:py-16 lg:py-24 lg:pl-[max(2rem,calc((100vw-1200px)/2+1rem))] lg:pr-12">
            <h1 className="font-display text-[2.4rem] font-extrabold leading-[1.04] tracking-tight text-white xs:text-5xl sm:text-6xl">
              <span className="line-reveal block"><span style={{ '--line-delay': '100ms' }}>ORIGINATION.</span></span>
              <span className="line-reveal block"><span style={{ '--line-delay': '230ms' }}>STRUCTURING.</span></span>
              <span className="line-reveal block"><span style={{ '--line-delay': '360ms' }}><span className="shine-text">EXECUTION.</span></span></span>
            </h1>
            <p className="mt-6 max-w-xl animate-fade-up text-lg font-medium leading-relaxed text-slate-200 [animation-delay:520ms]">
              Transforming opportunities into executable transactions across Africa, the GCC
              and international markets.
            </p>
            <p className="mt-4 max-w-xl animate-fade-up text-sm leading-relaxed text-slate-400 [animation-delay:640ms]">
              SZ Global Solutions is a UK and UAE-based origination and transaction advisory
              firm. We work with businesses, investors and institutions to identify
              opportunities, structure commercially robust transactions and connect the
              counterparties required to bring them to execution.
            </p>
            <div className="mt-8 flex flex-col gap-3 animate-fade-up [animation-delay:760ms] sm:flex-row sm:flex-wrap sm:gap-4">
              <Link href="/contact" className="btn-primary justify-center sm:justify-start">
                Discuss an Opportunity <Arrow width={16} height={16} />
              </Link>
              <Link href="/our-approach" className="btn-ghost justify-center sm:justify-start">
                Explore Our Approach <Arrow width={16} height={16} />
              </Link>
            </div>
          </div>

          {/* Full-bleed hero image + Cross-Border card */}
          <div className="relative min-h-[320px] lg:min-h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img.heroPort} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-transparent to-transparent lg:w-1/3" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
            <div className="absolute bottom-5 right-5 max-w-[20rem] animate-fade-up rounded-xl border border-gold/40 bg-navy-900/85 p-5 backdrop-blur [animation-delay:700ms]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold [animation:pulse-ring_2.6s_ease-out_infinite]">
                  <Globe width={20} height={20} />
                </div>
                <h3 className="font-display text-base font-semibold text-gold">CROSS-BORDER EXPERTISE</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Operating from the UK and UAE with deep networks across Africa and global
                markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="section">
        <div className="container-x">
          <SectionLabel center>WHAT WE DO</SectionLabel>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {whatWeDo.map((s) => (
              <HorizontalCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* OUR TRANSACTION METHOD */}
      <section className="section border-y border-white/10 bg-navy-900/40">
        <div className="container-x">
          <SectionLabel center>OUR TRANSACTION METHOD</SectionLabel>
          <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-10">
            <div className="grid gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-6">
              {method.map((step, i) => (
                <div key={step.n} data-reveal className="relative">
                  <div className="flex items-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 text-gold">
                      <step.icon width={26} height={26} />
                    </div>
                    {i < method.length - 1 && (
                      <Arrow width={22} height={22} className="ml-auto hidden text-gold/50 lg:block" />
                    )}
                  </div>
                  <h3 className="mt-4 font-display text-sm font-semibold tracking-wide text-white">
                    <span className="text-gold">{step.n}.</span> {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHERE WE FOCUS */}
      <section className="section">
        <div className="container-x">
          <SectionLabel center>WHERE WE FOCUS</SectionLabel>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {focus.map((f) => (
              <HorizontalCard key={f.title} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL REACH — Dubai lights + breathing globe */}
      <section className="section">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl border border-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img.dubai} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/70 to-navy-950/20" />
            <div className="relative grid items-center gap-8 p-10 sm:p-14 lg:grid-cols-[1.4fr_1fr]">
              <div data-reveal>
                <p className="eyebrow">Global Reach</p>
                <h2 className="mt-3 heading-lg">
                  Connecting Markets <span className="shine-text">Across the World.</span>
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300">
                  From the UK and the UAE to Africa, the GCC and international markets — we
                  originate, structure and execute opportunities wherever value can be created.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['United Kingdom', 'United Arab Emirates', 'Africa', 'GCC', 'International'].map((r) => (
                    <span key={r} className="rounded-full border border-gold/30 px-3 py-1 text-xs font-medium text-slate-200">
                      {r}
                    </span>
                  ))}
                </div>
              </div>
              <div className="hidden justify-center lg:flex">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.aboutGlobe}
                  alt=""
                  className="animate-breathe h-56 w-56 object-contain drop-shadow-[0_0_50px_rgba(232,163,61,0.35)]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
