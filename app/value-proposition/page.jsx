import Link from 'next/link';
import { img, site } from '@/lib/site';
import {
  Compass,
  Handshake,
  Target,
  Layers,
  Search,
  Users,
  Chart,
  Building,
  Quote,
  Send,
  Mail,
  Pin,
  Globe,
} from '@/components/Icons';

export const metadata = {
  title: 'Value Proposition',
  description:
    'Insight-Led. Relationship-Driven. Results-Focused. We go beyond advisory — partnering with clients across the transaction lifecycle.',
};

// Generated graphic — brass/gold compass for "Disciplined Analysis".
function CompassGraphic() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy-700 to-navy-950">
      <svg viewBox="0 0 120 120" className="h-[76%] w-[76%]">
        <circle cx="60" cy="60" r="46" fill="none" stroke="#e8a33d" strokeWidth="3" opacity="0.85" />
        <circle cx="60" cy="60" r="38" fill="none" stroke="#e8a33d" strokeWidth="1" opacity="0.4" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
          <line key={a} x1="60" y1="18" x2="60" y2="24" stroke="#f2b955" strokeWidth="2"
            transform={`rotate(${a} 60 60)`} />
        ))}
        <path d="M60 30 L68 60 L60 54 L52 60 Z" fill="#f2b955" />
        <path d="M60 90 L52 60 L60 66 L68 60 Z" fill="#e8a33d" opacity="0.55" />
        <circle cx="60" cy="60" r="4" fill="#0a1019" stroke="#f2b955" strokeWidth="2" />
      </svg>
    </div>
  );
}

// Generated graphic — abstract glowing network of nodes for "Advisors & Law Firms".
function NodesGraphic() {
  const nodes = [
    [60, 58], [26, 32], [96, 30], [30, 92], [94, 90], [60, 18], [18, 64], [104, 62],
  ];
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-navy-800 to-navy-950">
      <svg viewBox="0 0 120 120" className="h-full w-full">
        {nodes.slice(1).map(([x, y], i) => (
          <line key={i} x1="60" y1="58" x2={x} y2={y} stroke="#e8a33d" strokeWidth="0.7" opacity="0.4" />
        ))}
        {nodes.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i === 0 ? 4 : 2.4} fill="#e8a33d" opacity={i === 0 ? 1 : 0.8} />
        ))}
        <circle cx="60" cy="58" r="9" fill="none" stroke="#e8a33d" strokeWidth="1" opacity="0.5" />
      </svg>
    </div>
  );
}

const promises = [
  { icon: Compass, title: 'Navigating Complexity', text: 'We bring clarity, structure and foresight to every opportunity.' },
  { icon: Handshake, title: 'Building Trust', text: 'We cultivate long-term relationships built on integrity, discretion and mutual success.' },
  { icon: Target, title: 'Delivering Impact', text: 'We align strategy with execution to achieve measurable and sustainable results.' },
];

// color: icon-circle bg, title text, underline
const C = {
  blue: { bg: 'bg-blue-600', text: 'text-blue-700', line: 'bg-blue-600' },
  gold: { bg: 'bg-gold', text: 'text-gold-600', line: 'bg-gold' },
  olive: { bg: 'bg-[#7c7a2e]', text: 'text-[#7c7a2e]', line: 'bg-[#7c7a2e]' },
  orange: { bg: 'bg-orange-500', text: 'text-orange-600', line: 'bg-orange-500' },
};

const addValue = [
  { icon: Layers, color: C.blue, title: 'STRATEGIC PERSPECTIVE', image: img.chess, text: 'We combine market intelligence with commercial expertise to identify and unlock high-value opportunities.' },
  { icon: Search, color: C.gold, title: 'DISCIPLINED ANALYSIS', graphic: CompassGraphic, text: 'Rigorous assessment ensures informed decision-making and confident risk management.' },
  { icon: Users, color: C.blue, title: 'TAILORED SOLUTIONS', image: img.advisory, text: 'Every mandate is unique. We design bespoke solutions that fit our clients’ objectives.' },
  { icon: Handshake, color: C.olive, title: 'STRONG NETWORKS', image: img.impact, text: 'Our extensive network across capital, industry and government opens doors for our clients.' },
  { icon: Chart, color: C.orange, title: 'ENDURING PARTNERSHIPS', image: img.summit, text: 'We are committed beyond the deal—supporting execution and long-term value creation.' },
];

const partners = [
  { label: 'INVESTORS', sub: 'Private Equity, Family Offices, Sovereign Wealth Funds', image: img.glassTower },
  { label: 'CORPORATES', sub: 'Energy Companies, Traders, Industrial Groups', image: img.boardroom },
  { label: 'GOVERNMENTS', sub: 'National Oil Companies, Public Institutions', image: img.government },
  { label: 'ADVISORS & LAW FIRMS', sub: 'Legal, Tax and Financial Advisory Partners', graphic: NodesGraphic },
];

export default function ValuePropositionPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="grid items-stretch lg:grid-cols-[1.5fr_1fr]">
          <div className="px-5 py-16 sm:px-8 sm:py-20 lg:py-24 lg:pl-[max(2rem,calc((100vw-1200px)/2+1rem))] lg:pr-12">
            <div className="grid gap-10 sm:grid-cols-2">
              <div>
                <p className="eyebrow animate-fade-up">OUR VALUE PROPOSITION</p>
                <h1 className="mt-4 font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl">
                  <span className="line-reveal block"><span style={{ '--line-delay': '110ms' }}>Insight-Led.</span></span>
                  <span className="line-reveal block"><span style={{ '--line-delay': '230ms' }}>Relationship-Driven.</span></span>
                  <span className="line-reveal block"><span style={{ '--line-delay': '350ms' }}><span className="shine-text">Results-Focused.</span></span></span>
                </h1>
                <span className="mt-4 block h-0.5 w-16 bg-gold" />
                <p className="mt-5 max-w-md animate-fade-up text-sm leading-relaxed text-slate-300 [animation-delay:480ms]">
                  We go beyond advisory. We partner with our clients across the transaction
                  lifecycle—providing clarity in complexity and delivering outcomes that matter.
                </p>
              </div>

              <div className="space-y-6">
                {promises.map((p) => (
                  <div key={p.title} data-reveal className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/50 text-gold">
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
          </div>

          <div className="relative min-h-[280px] lg:min-h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img.yacht} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-transparent to-transparent lg:w-1/3" />
          </div>
        </div>
      </section>

      {/* HOW WE ADD VALUE  +  WHO WE WORK WITH */}
      <section className="section">
        <div className="container-x grid gap-12 xl:grid-cols-[1.25fr_1fr]">
          {/* HOW WE ADD VALUE — light cards */}
          <div>
            <p className="eyebrow">HOW WE ADD VALUE</p>
            <span className="grow-line mt-3" />
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {addValue.map((v) => (
                <div
                  key={v.title}
                  data-reveal
                  className="group flex flex-col overflow-hidden rounded-xl bg-slate-100 shadow-lg transition duration-300 hover:-translate-y-1.5"
                >
                  <div className="relative h-24 overflow-hidden">
                    {v.graphic ? (
                      <v.graphic />
                    ) : (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img src={v.image} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                    )}
                  </div>
                  <div className="relative flex flex-1 flex-col px-3 pb-4 pt-7 text-center">
                    <div className={`absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full ${v.color.bg} text-white shadow ring-4 ring-slate-100`}>
                      <v.icon width={18} height={18} />
                    </div>
                    <h3 className={`font-display text-[13px] font-bold leading-tight ${v.color.text}`}>{v.title}</h3>
                    <p className="mt-2 text-[11px] leading-snug text-slate-600">{v.text}</p>
                    <span className={`mx-auto mt-3 block h-0.5 w-8 ${v.color.line}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WHO WE WORK WITH */}
          <div>
            <p className="eyebrow">WHO WE WORK WITH</p>
            <h2 className="mt-3 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
              Trusted by Ambitious Partners <span className="shine-text">Across the Globe.</span>
            </h2>
            <span className="grow-line mt-3" />
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {partners.map((p) => (
                <div key={p.label} data-reveal className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
                  <div className="relative h-28 overflow-hidden">
                    {p.graphic ? (
                      <p.graphic />
                    ) : (
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={p.image} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-navy-950/70 to-transparent" />
                      </>
                    )}
                  </div>
                  <div className="p-3">
                    <h3 className="font-display text-xs font-semibold tracking-wide text-white">{p.label}</h3>
                    <p className="mt-1 text-[10px] leading-snug text-slate-400">{p.sub}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-400">
              We collaborate with like-minded partners who share our values and client-first
              mindset.
            </p>
          </div>
        </div>
      </section>

      {/* LET'S BUILD · QUOTE · GET IN TOUCH (globe band) */}
      <section className="relative overflow-hidden border-t border-white/10 bg-navy-950">
        {/* Globe rising from the bottom-left, exactly as in the template */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={img.globe}
            alt=""
            className="absolute -bottom-[18%] -left-[6%] h-[165%] w-[70%] object-cover object-center opacity-95 sm:w-[52%] lg:w-[44%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/0 via-navy-950/35 to-navy-950" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/45 via-transparent to-navy-950/25" />
        </div>
        <div className="container-x relative grid items-center gap-8 py-16 lg:min-h-[340px] lg:grid-cols-3">
          <div data-reveal>
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/50 text-gold">
              <Send width={22} height={22} />
            </div>
            <h2 className="mt-5 font-display text-2xl font-bold text-white sm:text-3xl">
              Let’s Build <span className="shine-text">What’s Next.</span>
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              Whether you are exploring an opportunity, seeking capital or looking for trusted
              advisory—let’s start a conversation.
            </p>
          </div>

          <div data-reveal className="flex gap-3">
            <Quote width={34} height={34} className="shrink-0 text-gold/50" />
            <p className="font-display text-lg leading-relaxed text-slate-100">
              Opportunities don’t happen. They are created through insight, relationships and
              execution. That’s where we come in.
            </p>
          </div>

          <div data-reveal className="relative overflow-hidden rounded-xl border border-gold/20">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img.dubai} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-navy-950/70" />
            <div className="relative p-6">
              <p className="eyebrow">GET IN TOUCH</p>
              <ul className="mt-4 space-y-3 text-sm text-slate-200">
                <li className="flex items-center gap-3">
                  <Mail width={18} height={18} className="text-gold" />
                  <a href={`mailto:${site.email}`} className="transition hover:text-gold">{site.email}</a>
                </li>
                <li className="flex items-center gap-3">
                  <Pin width={18} height={18} className="text-gold" />
                  Ras Al Khaimah, United Arab Emirates
                </li>
                <li className="flex items-center gap-3">
                  <Globe width={18} height={18} className="text-gold" />
                  {site.website}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
