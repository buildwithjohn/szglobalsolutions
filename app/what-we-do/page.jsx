import Link from 'next/link';
import { img } from '@/lib/site';
import { Target, CheckCircle, Arrow } from '@/components/Icons';

export const metadata = {
  title: 'What We Do — Three Capabilities',
  description:
    'We provide end-to-end advisory services that help businesses and investors identify opportunities, secure capital, and execute transactions with confidence.',
};

const capabilities = [
  {
    title: 'DEAL ORIGINATION',
    image: img.city,
    text: 'We identify proprietary opportunities, assess commercial potential and position them for engagement with the right stakeholders.',
    points: [
      'Proprietary opportunity sourcing',
      'Commercial evaluation and screening',
      'Market and stakeholder mapping',
      'Introduction to strategic buyers, operators and partners',
    ],
  },
  {
    title: 'CAPITAL ADVISORY',
    image: img.finance,
    text: 'We help businesses and project sponsors access the right capital to fund growth and execute transactions.',
    points: [
      'Capital strategy and structuring',
      'Access to equity, debt, project & trade finance',
      'Investor and lender introductions',
      'Advisory across mining, infrastructure, real estate, technology and industrial sectors',
    ],
  },
  {
    title: 'TRANSACTION ADVISORY',
    image: img.handshake,
    text: 'We provide commercial guidance throughout the transaction lifecycle to ensure alignment, clarity and successful execution.',
    points: [
      'Transaction structuring',
      'Negotiation support',
      'Stakeholder alignment and coordination',
      'Market intelligence and execution planning',
    ],
  },
];

const clients = [
  { label: 'PROJECT SPONSORS', image: img.excavator },
  { label: 'INVESTORS', image: img.boardroom },
  { label: 'CORPORATES', image: img.glassTower },
  { label: 'FINANCIAL INSTITUTIONS', image: img.city },
  { label: 'GOVERNMENTS & AGENCIES', image: img.government },
];

export default function WhatWeDoPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img.meeting} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 to-transparent" />
        </div>
        <div className="container-x relative grid items-center gap-10 py-20 sm:py-24 lg:grid-cols-[1.45fr_1fr]">
          <div>
            <p className="eyebrow animate-fade-up">WHAT WE DO</p>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.08] text-white sm:text-5xl">
              <span className="line-reveal block">
                <span style={{ '--line-delay': '120ms' }}>Three Capabilities.</span>
              </span>
              <span className="line-reveal block">
                <span style={{ '--line-delay': '260ms' }}>
                  One Objective – Successful Transactions<span className="text-gold">.</span>
                </span>
              </span>
            </h1>
            <span className="mt-5 block h-0.5 w-16 bg-gold" />
            <p className="mt-5 max-w-xl animate-fade-up text-base leading-relaxed text-slate-200 [animation-delay:420ms]">
              We provide end-to-end advisory services that help businesses and investors
              identify opportunities, secure capital, and execute transactions with confidence.
            </p>
            <p className="mt-4 max-w-xl animate-fade-up text-base leading-relaxed text-slate-400 [animation-delay:520ms]">
              Our capabilities are designed to create clarity, reduce risk, and unlock value at
              every stage of the transaction lifecycle.
            </p>
          </div>

          {/* OUR OBJECTIVE card */}
          <div className="animate-fade-up [animation-delay:500ms] lg:justify-self-end">
            <div className="max-w-md rounded-2xl border border-gold/30 bg-navy-900/85 p-7 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
                  <Target width={24} height={24} />
                </div>
                <div>
                  <p className="eyebrow">OUR OBJECTIVE</p>
                  <span className="mt-2 block h-0.5 w-10 bg-gold" />
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                To transform opportunities into executable transactions through structure,
                capital and the right strategic relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES — light cards */}
      <section className="section">
        <div className="container-x grid gap-6 lg:grid-cols-3">
          {capabilities.map((c) => (
            <div
              key={c.title}
              data-reveal
              className="flex flex-col overflow-hidden rounded-xl bg-slate-100 shadow-xl transition duration-300 hover:-translate-y-1.5"
            >
              <div className="relative h-44 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.image} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3">
                  <span className="h-6 w-1 rounded bg-gold" />
                  <h2 className="font-display text-lg font-bold tracking-wide text-navy-900">
                    {c.title}
                  </h2>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{c.text}</p>
                <hr className="my-4 border-slate-200" />
                <ul className="space-y-2.5">
                  {c.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-sm leading-snug text-slate-700">
                      <CheckCircle width={18} height={18} className="mt-0.5 shrink-0 text-gold" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHO WE WORK WITH + LET'S BUILD */}
      <section className="section pt-0">
        <div className="container-x">
          <div className="overflow-hidden rounded-2xl border border-gold/20 bg-navy-900/60">
            <div className="grid lg:grid-cols-[1.55fr_1fr]">
              <div className="p-8 sm:p-10">
                <p className="eyebrow">WHO WE WORK WITH</p>
                <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                  {clients.map((cl) => (
                    <div
                      key={cl.label}
                      data-reveal
                      className="group relative h-28 overflow-hidden rounded-lg border border-white/10"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={cl.image}
                        alt=""
                        className="h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-110 group-hover:opacity-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                      <span className="absolute inset-x-2 bottom-2 text-[11px] font-semibold leading-tight text-white">
                        {cl.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden p-8 sm:p-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img.boardroom} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-navy-950/80" />
                <div className="relative">
                  <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                    Let’s Build <span className="shine-text">What’s Next.</span>
                  </h2>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-300">
                    Whether you are exploring an opportunity, seeking capital or looking for the
                    right partner, we are ready to help you move forward.
                  </p>
                  <Link href="/contact" className="btn-primary mt-6">
                    Discuss an Opportunity <Arrow width={16} height={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
