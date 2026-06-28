import Link from 'next/link';
import { img } from '@/lib/site';
import { SectionLabel, SectionHeading } from '@/components/ui';
import {
  Compass,
  Handshake,
  Target,
  Chart,
  Search,
  Layers,
  Link as LinkIcon,
  Users,
  Building,
  Quote,
  Arrow,
} from '@/components/Icons';

export const metadata = {
  title: 'Value Proposition',
  description:
    'Insight-Led. Relationship-Driven. Results-Focused. We go beyond advisory — partnering with clients across the transaction lifecycle.',
};

const promises = [
  { icon: Compass, title: 'Navigating Complexity', text: 'We bring clarity, structure and foresight to every opportunity.' },
  { icon: Handshake, title: 'Building Trust', text: 'We cultivate long-term relationships built on integrity, discretion and mutual success.' },
  { icon: Target, title: 'Delivering Impact', text: 'We align strategy with execution to achieve measurable and sustainable results.' },
];

const value = [
  { icon: Chart, title: 'STRATEGIC PERSPECTIVE', text: 'We combine market intelligence with commercial expertise to identify and unlock high-value opportunities.' },
  { icon: Search, title: 'DISCIPLINED ANALYSIS', text: 'Rigorous assessment ensures informed decision-making and confident risk management.' },
  { icon: Layers, title: 'TAILORED SOLUTIONS', text: 'Every mandate is unique. We design bespoke solutions that fit our clients’ objectives.' },
  { icon: LinkIcon, title: 'STRONG NETWORKS', text: 'Our extensive network across capital, industry and government opens doors for our clients.' },
  { icon: Handshake, title: 'ENDURING PARTNERSHIPS', text: 'We are committed beyond the deal—supporting execution and long-term value creation.' },
];

const partners = [
  { label: 'INVESTORS', sub: 'Private Equity, Family Offices, Sovereign Wealth Funds', image: img.finance },
  { label: 'CORPORATES', sub: 'Energy Companies, Traders, Industrial Groups', image: img.boardroom },
  { label: 'GOVERNMENTS', sub: 'National Oil Companies, Public Institutions', image: img.worldNight },
  { label: 'ADVISORS & LAW FIRMS', sub: 'Legal, Tax and Financial Advisory Partners', image: img.city },
];

export default function ValuePropositionPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img.yacht} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/40" />
          <div className="absolute inset-0 bg-navy-950/40 sm:bg-transparent" />
        </div>
        <div className="container-x relative grid gap-12 py-20 sm:py-28 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="eyebrow animate-fade-up">OUR VALUE PROPOSITION</p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
              <span className="line-reveal block">
                <span style={{ '--line-delay': '110ms' }}>Insight-Led.</span>
              </span>
              <span className="line-reveal block">
                <span style={{ '--line-delay': '230ms' }}>Relationship-Driven.</span>
              </span>
              <span className="line-reveal block">
                <span style={{ '--line-delay': '350ms' }}>
                  <span className="shine-text">Results-Focused.</span>
                </span>
              </span>
            </h1>
            <p className="mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-slate-300 [animation-delay:500ms]">
              We go beyond advisory. We partner with our clients across the transaction
              lifecycle—providing clarity in complexity and delivering outcomes that matter.
            </p>
          </div>

          <div className="space-y-4 lg:pt-10">
            {promises.map((p) => (
              <div key={p.title} data-reveal className="flex gap-4 rounded-xl border border-white/10 bg-navy-900/60 p-5 backdrop-blur">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
                  <p.icon width={22} height={22} />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-white">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE ADD VALUE */}
      <section className="section">
        <div className="container-x">
          <SectionLabel>HOW WE ADD VALUE</SectionLabel>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {value.map((v) => (
              <div key={v.title} className="card">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <v.icon width={22} height={22} />
                </div>
                <h3 className="mt-4 font-display text-sm font-semibold tracking-wide text-white">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="section border-y border-white/10 bg-navy-900/40">
        <div className="container-x">
          <SectionHeading eyebrow="WHO WE WORK WITH" title="Trusted by Ambitious Partners" accent="Across the Globe." />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((p) => (
              <div key={p.label} data-reveal className="group relative h-56 overflow-hidden rounded-xl border border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.image}
                  alt=""
                  className="h-full w-full object-cover opacity-50 transition duration-500 group-hover:scale-105 group-hover:opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="flex items-center gap-2">
                    <Building width={16} height={16} className="text-gold" />
                    <span className="font-display text-sm font-semibold text-white">{p.label}</span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-slate-300">{p.sub}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate-400">
            We collaborate with like-minded partners who share our values and client-first
            mindset.
          </p>
        </div>
      </section>

      {/* LET'S BUILD WHAT'S NEXT + QUOTE */}
      <section className="section">
        <div className="container-x grid gap-6 lg:grid-cols-2">
          <div data-reveal className="relative overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-br from-navy-800 to-navy-900 p-10 sm:p-12">
            <div className="absolute -right-16 -top-16 h-56 w-56 animate-float rounded-full bg-gold/10 blur-3xl" />
            <h2 className="relative heading-lg">
              Let’s Build <span className="shine-text">What’s Next.</span>
            </h2>
            <p className="relative mt-4 text-base leading-relaxed text-slate-300">
              Whether an opportunity, seeking capital or looking for trusted advisory—let’s
              start a conversation.
            </p>
            <Link href="/contact" className="btn-primary relative mt-7">
              Discuss an Opportunity <Arrow width={16} height={16} />
            </Link>
          </div>

          <div data-reveal className="flex flex-col justify-center rounded-2xl border border-white/10 bg-white/[0.03] p-10 sm:p-12">
            <Quote width={36} height={36} className="text-gold/40" />
            <p className="mt-5 font-display text-xl leading-relaxed text-slate-100">
              Opportunities don’t happen. They are created through insight, relationships and
              execution. That’s where we come in.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
