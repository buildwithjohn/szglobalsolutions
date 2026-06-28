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
    icon: Coins,
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

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img.heroPort}
            alt=""
            className="h-full w-full scale-105 animate-fade-in object-cover [animation-duration:1.4s]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/30 to-navy-950/60" />
          <div className="absolute inset-0 bg-navy-950/45 sm:bg-transparent" />
        </div>

        <div className="container-x relative grid items-center gap-10 py-20 sm:py-28 lg:grid-cols-[1.5fr_1fr] lg:py-32">
          <div>
            <h1 className="font-display text-[2.3rem] font-extrabold leading-[1.06] tracking-tight text-white xs:text-5xl sm:text-6xl lg:text-7xl">
              <span className="line-reveal block">
                <span style={{ '--line-delay': '100ms' }}>ORIGINATION.</span>
              </span>
              <span className="line-reveal block">
                <span style={{ '--line-delay': '230ms' }}>STRUCTURING.</span>
              </span>
              <span className="line-reveal block">
                <span style={{ '--line-delay': '360ms' }}>
                  <span className="shine-text">EXECUTION.</span>
                </span>
              </span>
            </h1>
            <p className="mt-6 max-w-xl animate-fade-up text-base font-medium leading-relaxed text-slate-200 [animation-delay:520ms] sm:text-lg">
              Transforming opportunities into executable transactions across Africa, the GCC
              and international markets.
            </p>
            <p className="mt-4 max-w-xl animate-fade-up text-sm leading-relaxed text-slate-300 [animation-delay:640ms]">
              SZ Global Solutions is a UK and UAE-based origination and transaction advisory
              firm. We work with businesses, investors and institutions to identify
              opportunities, structure commercially robust transactions and connect the
              counterparties required to bring them to execution.
            </p>
            <div className="mt-9 flex flex-col gap-3 animate-fade-up [animation-delay:760ms] sm:flex-row sm:flex-wrap sm:gap-4">
              <Link href="/contact" className="btn-primary justify-center sm:justify-start">
                Discuss an Opportunity <Arrow width={16} height={16} />
              </Link>
              <Link href="/our-approach" className="btn-ghost justify-center sm:justify-start">
                Explore Our Approach <Arrow width={16} height={16} />
              </Link>
            </div>
          </div>

          <div className="animate-fade-up [animation-delay:700ms] lg:justify-self-end">
            <div className="group max-w-sm animate-float rounded-xl border border-gold/30 bg-navy-900/80 p-7 backdrop-blur transition hover:border-gold/60">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/15 text-gold [animation:pulse-ring_2.6s_ease-out_infinite]">
                <Globe width={26} height={26} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-gold">
                CROSS-BORDER EXPERTISE
              </h3>
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
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {whatWeDo.map((s) => (
              <div key={s.title} className="card overflow-hidden p-0">
                <div className="relative h-44">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.image} alt="" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gold text-navy-950">
                    <s.icon width={22} height={22} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-base font-semibold tracking-wide text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR TRANSACTION METHOD */}
      <section className="section border-y border-white/10 bg-navy-900/40">
        <div className="container-x">
          <SectionLabel center>OUR TRANSACTION METHOD</SectionLabel>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {method.map((step) => (
              <div key={step.n} className="card relative">
                <span className="absolute right-5 top-5 font-display text-3xl font-bold text-white/5">
                  {step.n}
                </span>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <step.icon width={22} height={22} />
                </div>
                <h3 className="mt-5 font-display text-base font-semibold tracking-wide text-white">
                  <span className="text-gold">{step.n}.</span> {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHERE WE FOCUS */}
      <section className="section">
        <div className="container-x">
          <SectionLabel>WHERE WE FOCUS</SectionLabel>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {focus.map((f) => (
              <div
                key={f.title}
                data-reveal
                className="group relative min-h-[320px] overflow-hidden rounded-xl border border-white/10 transition duration-300 hover:-translate-y-1 hover:border-gold/40"
              >
                <div className="absolute inset-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={f.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/20" />
                </div>
                <div className="relative flex h-full flex-col justify-end p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gold text-navy-950">
                    <f.icon width={22} height={22} />
                  </div>
                  <h3 className="font-display text-base font-semibold tracking-wide text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
