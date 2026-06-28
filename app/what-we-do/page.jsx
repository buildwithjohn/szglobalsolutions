import { img } from '@/lib/site';
import { PageHero, CtaBand, SectionLabel } from '@/components/ui';
import { Target, Coins, Users, Check, Building } from '@/components/Icons';

export const metadata = {
  title: 'What We Do — Three Capabilities',
  description:
    'We provide end-to-end advisory services that help businesses and investors identify opportunities, secure capital, and execute transactions with confidence.',
};

const capabilities = [
  {
    id: 'deal-origination',
    icon: Target,
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
    id: 'capital-advisory',
    icon: Coins,
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
    id: 'transaction-advisory',
    icon: Users,
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
  { label: 'INVESTORS', image: img.finance },
  { label: 'CORPORATES', image: img.boardroom },
  { label: 'FINANCIAL INSTITUTIONS', image: img.city },
  { label: 'GOVERNMENTS & AGENCIES', image: img.worldNight },
];

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        eyebrow="WHAT WE DO"
        title="Three Capabilities. One Objective –"
        accent="Successful Transactions."
        image={img.meeting}
        subtitle="We provide end-to-end advisory services that help businesses and investors identify opportunities, secure capital, and execute transactions with confidence."
      >
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
          Our capabilities are designed to create clarity, reduce risk, and unlock value at
          every stage of the transaction lifecycle.
        </p>
        <div className="mt-8 max-w-md rounded-xl border border-gold/30 bg-navy-900/70 p-6 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/15 text-gold">
              <Target width={22} height={22} />
            </div>
            <p className="eyebrow">OUR OBJECTIVE</p>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            To transform opportunities into executable transactions through structure, capital
            and the right strategic relationships.
          </p>
        </div>
      </PageHero>

      {/* CAPABILITIES */}
      <section className="section">
        <div className="container-x grid gap-6 lg:grid-cols-3">
          {capabilities.map((c) => (
            <div key={c.id} id={c.id} data-reveal className="card scroll-mt-24 overflow-hidden p-0">
              <div className="relative h-40">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.image} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent" />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold/10 text-gold">
                    <c.icon width={22} height={22} />
                  </div>
                  <h2 className="font-display text-lg font-semibold tracking-wide text-white">
                    {c.title}
                  </h2>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">{c.text}</p>
                <ul className="mt-5 space-y-3">
                  {c.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-sm text-slate-300">
                      <Check width={18} height={18} className="mt-0.5 shrink-0 text-gold" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="section border-t border-white/10 bg-navy-900/40">
        <div className="container-x">
          <SectionLabel>WHO WE WORK WITH</SectionLabel>
          <div className="mt-12 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {clients.map((cl) => (
              <div
                key={cl.label}
                data-reveal
                className="group relative h-40 overflow-hidden rounded-xl border border-white/10"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cl.image}
                  alt=""
                  className="h-full w-full object-cover opacity-60 transition duration-500 group-hover:scale-105 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 flex items-center gap-2 p-4">
                  <Building width={16} height={16} className="text-gold" />
                  <span className="text-sm font-semibold text-white">{cl.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Let's Build"
        title="What's Next."
        text="Whether you are exploring an opportunity, seeking capital or looking for the right partner, we are ready to help you move forward."
        buttonLabel="Discuss an Opportunity"
      />
    </>
  );
}
