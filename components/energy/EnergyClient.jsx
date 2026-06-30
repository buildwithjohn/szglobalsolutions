'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { img } from '@/lib/site';
import {
  Arrow,
  Check,
  Globe,
  Layers,
  Users,
  Flame,
  Target,
  Handshake,
  Shield,
  Chart,
  Building,
  Search,
  CheckCircle,
  Coins,
} from '@/components/Icons';

// Shared building blocks reused by every product/commodity ---------------------
const CAPABILITY = [
  'Supply Origination',
  'Buyer Identification',
  'Commercial Structuring',
  'Counterparty Alignment',
  'Transaction Coordination',
  'Execution Support',
];

const STRUCTURES = ['FOB', 'CIF', 'TTO', 'TTT', 'Tank-to-Vessel', 'Spot', 'Term Contracts'];
const MARKETS = ['West Africa', 'Middle East', 'Europe', 'Asia'];
const NOTE = 'Product availability is subject to mandate, allocation and counterparty verification.';

// Each counterparty uses a distinct image (no repeats).
const CP = {
  refineries: { label: 'Refineries', image: img.refinery },
  trading: { label: 'Trading Houses', image: img.handshake },
  importers: { label: 'Importers', image: img.heroPort },
  governments: { label: 'Governments', image: img.government },
  utilities: { label: 'Utilities', image: img.powerlines },
  industrial: { label: 'Industrial Buyers', image: img.excavator },
  airlines: { label: 'Airlines', image: img.airplane },
  distributors: { label: 'Distributors', image: img.distributors },
  aviation: { label: 'Aviation', image: img.aviation },
  noc: { label: 'National Oil Companies', image: img.en590 },
};

// ---------------------------------------------------------------------------- //
const PRODUCTS = [
  {
    id: 'en590',
    name: 'EN590 DIESEL',
    subtitle: 'Low Sulphur Diesel (EN590)',
    icon: Flame,
    image: img.en590,
    card: 'Low sulphur diesel supplied through established refinery relationships for international buyers and institutional counterparties.',
    tags: ['Road Transport', 'Mining', 'Industrial', 'Govt. Supply'],
    overview:
      "EN590 is one of the world's most widely traded refined petroleum products, supporting transportation, industrial operations and government procurement.",
    counterparties: [CP.refineries, CP.trading, CP.importers, CP.governments, CP.utilities, CP.industrial],
  },
  {
    id: 'jeta1',
    name: 'JET A-1',
    subtitle: 'Aviation Turbine Fuel',
    icon: Target,
    image: img.jeta1,
    card: 'High quality aviation turbine fuel for airlines, distributors and government procurement programmes.',
    tags: ['Aviation', 'Airlines', 'Distributors', 'Govt. Supply'],
    overview:
      'Jet A-1 is the primary aviation turbine fuel used by commercial and military aircraft worldwide, ensuring safe, efficient and reliable operations across global routes.',
    counterparties: [CP.refineries, CP.trading, CP.airlines, CP.governments, CP.distributors, CP.aviation],
  },
  {
    id: 'lpg',
    name: 'LPG',
    subtitle: 'Liquefied Petroleum Gas',
    icon: Flame,
    image: img.lpg,
    card: 'Bulk LPG supply for domestic, commercial, industrial and market applications.',
    tags: ['Domestic', 'Industrial', 'Commercial'],
    overview:
      'LPG is a clean-burning, efficient fuel used across residential, commercial, industrial and automotive applications. We connect buyers with reliable supply sources through structured and transparent commercial arrangements.',
    counterparties: [CP.refineries, CP.trading, CP.importers, CP.governments, CP.utilities, CP.industrial],
  },
  {
    id: 'crude',
    name: 'CRUDE OIL',
    subtitle: 'Access to Global Crude Oil Grades',
    icon: Globe,
    image: img.oilRig,
    card: 'Access to a wide range of crude oil grades sourced from established producers worldwide.',
    tags: ['Refining', 'Trading', 'Govt. Supply'],
    overview:
      'We provide access to a wide range of crude oil grades sourced from established producers worldwide. Our network and market knowledge enable us to connect buyers with reliable supply sources through structured and transparent commercial arrangements.',
    counterparties: [CP.refineries, CP.trading, CP.importers, CP.governments, CP.noc, CP.industrial],
  },
  {
    id: 'fueloil',
    name: 'FUEL OIL',
    subtitle: 'HFO / Marine & Industrial Fuel Oil',
    icon: Layers,
    image: img.shipping,
    card: 'Heavy and marine fuel oil for shipping, power generation and industrial operations.',
    tags: ['Marine', 'Power', 'Industrial'],
    overview:
      'Fuel oil supports marine bunkering, power generation and large-scale industrial operations. We connect buyers and suppliers through structured commercial arrangements aligned to mandate and allocation.',
    counterparties: [CP.refineries, CP.trading, CP.importers, CP.utilities, CP.noc, CP.industrial],
  },
  {
    id: 'petrochem',
    name: 'PETROCHEMICALS',
    subtitle: 'Feedstocks & Petrochemical Products',
    icon: Coins,
    image: img.petrochem,
    card: 'Feedstocks and petrochemical products for industrial and manufacturing applications.',
    tags: ['Feedstocks', 'Polymers', 'Solvents', 'Chemicals'],
    overview:
      'Petrochemical feedstocks and products underpin manufacturing, packaging and industrial production. We originate and structure opportunities connecting producers with industrial buyers worldwide.',
    counterparties: [CP.refineries, CP.trading, CP.importers, CP.governments, CP.industrial, CP.utilities],
  },
];

const COMMODITIES = [
  {
    id: 'gold',
    name: 'GOLD',
    subtitle: 'Available by Mandate',
    icon: Coins,
    image: img.gold,
    gradient: 'from-amber-200/45 via-amber-500/20 to-amber-800/10',
    card: 'by Mandate',
    tags: ['Bullion', 'Refiners', 'Institutions'],
    overview:
      'Gold is a globally traded precious metal and store of value. We support commercially structured opportunities connecting verified suppliers with institutional and refinery counterparties, strictly subject to mandate and allocation.',
    counterparties: [CP.refineries, CP.trading, CP.importers, CP.governments, CP.industrial, CP.utilities],
  },
  {
    id: 'copper',
    name: 'COPPER',
    subtitle: 'Available by Mandate',
    icon: Layers,
    image: img.copper,
    gradient: 'from-orange-300/40 via-orange-600/20 to-amber-900/10',
    card: 'by Mandate',
    tags: ['Cathodes', 'Concentrate', 'Industrial'],
    overview:
      'Copper is a critical industrial metal driving construction, electrification and manufacturing. We structure opportunities connecting producers and off-takers, subject to mandate and counterparty verification.',
    counterparties: [CP.refineries, CP.trading, CP.importers, CP.industrial, CP.utilities, CP.governments],
  },
  {
    id: 'lithium',
    name: 'LITHIUM',
    subtitle: 'Available by Mandate',
    icon: Flame,
    image: img.lithium,
    gradient: 'from-slate-200/40 via-slate-400/15 to-slate-700/10',
    card: 'by Mandate',
    tags: ['Battery', 'EV Supply', 'Industrial'],
    overview:
      'Lithium is central to the energy transition and battery supply chains. We originate and structure opportunities aligning producers with strategic buyers, strictly subject to mandate and allocation.',
    counterparties: [CP.refineries, CP.trading, CP.importers, CP.industrial, CP.governments, CP.utilities],
  },
  {
    id: 'cobalt',
    name: 'COBALT',
    subtitle: 'Available by Mandate',
    icon: Shield,
    image: img.cobalt,
    gradient: 'from-sky-400/40 via-blue-600/20 to-blue-900/15',
    card: 'by Mandate',
    tags: ['Battery', 'Alloys', 'Industrial'],
    overview:
      'Cobalt is a strategic battery and alloy metal. We support commercially structured opportunities connecting verified suppliers and industrial counterparties, subject to mandate and counterparty verification.',
    counterparties: [CP.refineries, CP.trading, CP.importers, CP.industrial, CP.governments, CP.utilities],
  },
];

// Premium product modal --------------------------------------------------------
function ProductModal({ item, onClose }) {
  const handleKey = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-navy-950/80 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.name}
    >
      <div
        className="relative my-4 w-full max-w-5xl animate-fade-up overflow-hidden rounded-2xl border border-gold/25 bg-navy-900 shadow-2xl [animation-duration:0.4s]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-navy-950/60 text-slate-300 transition hover:border-gold/60 hover:text-gold"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Top: image + overview + grids */}
        <div className="grid gap-0 md:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)]">
          <div className="relative min-h-[240px] md:min-h-full">
            {item.image ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 to-transparent md:bg-gradient-to-r" />
              </>
            ) : (
              <div className={`flex h-full min-h-[240px] w-full items-center justify-center bg-gradient-to-br ${item.gradient}`}>
                <item.icon width={72} height={72} className="text-white/80" />
              </div>
            )}
          </div>

          <div className="p-6 sm:p-8">
            <h2 className="font-display text-3xl font-bold text-gold">{item.name}</h2>
            <p className="mt-1 text-sm text-slate-300">{item.subtitle}</p>
            <div className="my-5 h-px bg-white/10" />

            <div className="flex items-center gap-2 text-gold">
              <Building width={18} height={18} />
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em]">Market Overview</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.overview}</p>

            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              <div>
                <div className="flex items-center gap-2 text-gold">
                  <Target width={16} height={16} />
                  <h3 className="text-xs font-semibold uppercase tracking-[0.14em]">Our Capability</h3>
                </div>
                <p className="mt-2 text-[11px] leading-snug text-slate-500">
                  We support commercially structured opportunities through:
                </p>
                <ul className="mt-2 space-y-1.5">
                  {CAPABILITY.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle width={14} height={14} className="mt-0.5 shrink-0 text-gold" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 text-gold">
                  <Layers width={16} height={16} />
                  <h3 className="text-xs font-semibold uppercase tracking-[0.14em]">Typical Structures</h3>
                </div>
                <ul className="mt-2 space-y-1.5">
                  {STRUCTURES.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="h-1 w-1 rounded-full bg-gold" /> {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 text-gold">
                  <Globe width={16} height={16} />
                  <h3 className="text-xs font-semibold uppercase tracking-[0.14em]">Typical Markets</h3>
                </div>
                <ul className="mt-2 space-y-1.5">
                  {MARKETS.map((m) => (
                    <li key={m} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="h-1 w-1 rounded-full bg-gold" /> {m}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: counterparties + note */}
        <div className="grid gap-6 border-t border-white/10 p-6 sm:p-8 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <div className="flex items-center gap-2 text-gold">
              <Users width={18} height={18} />
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em]">Counterparties</h3>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-6">
              {item.counterparties.map((c) => (
                <div key={c.label} className="text-center">
                  <div className="relative h-14 w-full overflow-hidden rounded-md border border-white/10">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.image} alt="" className="h-full w-full object-cover" />
                  </div>
                  <p className="mt-1.5 text-[10px] leading-tight text-slate-400">{c.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 text-gold">
              <Shield width={18} height={18} />
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em]">Commercial Note</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">{NOTE}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Product / commodity card -----------------------------------------------------
function ProductCard({ item, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      data-reveal
      className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] text-left transition duration-300 hover:-translate-y-1 hover:border-gold/50 hover:bg-white/[0.05]"
    >
      <div className="relative h-36 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={item.image}
          alt=""
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent" />
        <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-gold/40 bg-navy-950/60 text-gold opacity-0 transition group-hover:opacity-100">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-base font-semibold tracking-wide text-gold">{item.name}</h3>
        <p className="mt-2 text-xs leading-relaxed text-slate-400">{item.card}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {item.tags.map((t) => (
            <span key={t} className="rounded border border-white/10 px-2 py-0.5 text-[10px] text-slate-400">
              {t}
            </span>
          ))}
        </div>
        <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-gold">
          View details
          <Arrow width={13} height={13} />
        </span>
      </div>
    </button>
  );
}

const advantages = [
  { icon: Shield, title: 'Reliable Supply Networks', text: 'Access to trusted producers, refineries and global sources.' },
  { icon: Chart, title: 'Commercial Excellence', text: 'Structured transactions built on integrity and market expertise.' },
  { icon: Globe, title: 'Global Reach', text: 'Connecting counterparties across Africa, the GCC, Europe and Asia.' },
  { icon: Target, title: 'Execution Focused', text: 'From opportunity to execution — delivering measurable value.' },
];

const lifecycle = [
  { n: '1', icon: Search, title: 'Opportunity Identification' },
  { n: '2', icon: CheckCircle, title: 'Qualification & Due Diligence' },
  { n: '3', icon: Layers, title: 'Commercial Structuring' },
  { n: '4', icon: Users, title: 'Counterparty Alignment' },
  { n: '5', icon: Coins, title: 'Capital Arrangement' },
  { n: '6', icon: Target, title: 'Execution & Delivery' },
];

const whatWeDo = [
  { icon: Globe, title: 'SUPPLY ORIGINATION', image: img.solar, text: 'Developing access to reliable producers, refineries and suppliers across global markets.' },
  { icon: Layers, title: 'COMMERCIAL STRUCTURING', image: img.boardroom, text: 'Creating executable commercial frameworks for buyers, suppliers and strategic partners.' },
  { icon: Handshake, title: 'TRANSACTION EXECUTION', image: img.handshake, text: 'Supporting counterparties from opportunity identification through commercial completion.' },
];

export default function EnergyClient() {
  const [active, setActive] = useState(null);

  return (
    <>
      {/* HERO — text left, image bleeding out on the right */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="grid items-stretch lg:grid-cols-2">
          <div className="px-5 py-16 sm:px-8 sm:py-20 lg:py-24 lg:pl-[max(2rem,calc((100vw-1440px)/2+1rem))] lg:pr-12">
            <p className="eyebrow animate-fade-up">ENERGY &amp; COMMODITIES</p>
            <h1 className="mt-4 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="line-reveal block">
                <span style={{ '--line-delay': '100ms' }}>CONNECTING SUPPLY.</span>
              </span>
              <span className="line-reveal block">
                <span style={{ '--line-delay': '240ms' }}>
                  CAPITAL. <span className="shine-text">MARKETS.</span>
                </span>
              </span>
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
                Our Capabilities <Arrow width={16} height={16} />
              </a>
            </div>
          </div>

          {/* Full-bleed hero image */}
          <div className="relative min-h-[300px] lg:min-h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img.heroPort} alt="" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-transparent to-transparent lg:w-1/3" />
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="capabilities" className="section">
        <div className="container-x max-w-[1440px]">
          <div data-reveal className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">What We Do</p>
            <span className="grow-line mx-auto mt-3" />
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {whatWeDo.map((s) => (
              <div key={s.title} data-reveal className="card overflow-hidden p-0">
                <div className="relative h-40">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.image} alt="" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gold text-navy-950">
                    <s.icon width={22} height={22} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-base font-semibold tracking-wide text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS & MARKET ACCESS */}
      <section id="products" className="section border-y border-white/10 bg-navy-900/40">
        <div className="container-x max-w-[1440px]">
          <div className="grid gap-10 lg:grid-cols-[1fr_2.6fr_0.9fr]">
            {/* Left intro */}
            <div data-reveal className="lg:sticky lg:top-28 lg:self-start">
              <p className="eyebrow">Energy &amp; Commodities</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                Products &amp; <span className="shine-text">Market Access</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                Commercial opportunities across downstream energy and selected commodity
                markets. Click any product to view its market overview, capability and
                counterparties.
              </p>
            </div>

            {/* Catalogue */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                Energy Products
              </h3>
              <div className="mt-5 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {PRODUCTS.map((p) => (
                  <ProductCard key={p.id} item={p} onOpen={setActive} />
                ))}
              </div>

              <h3 className="mt-12 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                Selected Commodities <span className="text-slate-600">(available by mandate)</span>
              </h3>
              <div className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-4">
                {COMMODITIES.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setActive(c)}
                    data-reveal
                    className="group relative h-64 overflow-hidden rounded-2xl border border-white/10 text-left transition duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-[0_24px_50px_-20px_rgba(0,0,0,0.9)]"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.image}
                      alt={c.name}
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    {/* subtle bottom-only gradient so the image stays vivid */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/35 to-transparent" />
                    <div className="absolute inset-x-4 bottom-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold text-navy-950 shadow-lg">
                        <c.icon width={20} height={20} />
                      </div>
                      <h4 className="mt-3 font-display text-lg font-bold tracking-wide text-gold drop-shadow">
                        {c.name}
                      </h4>
                      <p className="text-xs text-slate-200/90">{c.card}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right advantages */}
            <div data-reveal className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              {advantages.map((a) => (
                <div key={a.title} className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                    <a.icon width={20} height={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{a.title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-slate-400">{a.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRANSACTION LIFECYCLE */}
      <section className="section">
        <div className="container-x max-w-[1440px]">
          <div data-reveal>
            <p className="eyebrow">Our Transaction Lifecycle</p>
            <span className="grow-line mt-3" />
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {lifecycle.map((step) => (
              <div key={step.n} data-reveal className="card text-center">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <step.icon width={22} height={22} />
                </div>
                <div className="mt-3 text-xs font-bold text-gold">{step.n}</div>
                <h4 className="mt-1 text-xs font-semibold leading-snug text-white">{step.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DISCLAIMER + CTA */}
      <section className="border-t border-white/10 bg-navy-900/40">
        <div className="container-x grid max-w-[1440px] gap-8 py-12 lg:grid-cols-2">
          <div className="flex gap-3">
            <Shield width={22} height={22} className="mt-0.5 shrink-0 text-gold" />
            <p className="text-xs leading-relaxed text-slate-500">
              <span className="font-semibold text-slate-400">DISCLAIMER:</span> Product
              availability is subject to mandate, allocation, counterparty verification and
              prevailing market conditions. SZ Global Solutions acts as an origination and
              transaction advisory firm and does not represent that all listed products are
              continuously available.
            </p>
          </div>
          <div className="flex flex-col items-start justify-between gap-4 rounded-xl border border-gold/20 bg-white/[0.03] p-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-display text-lg font-semibold text-white">
                Have an opportunity to discuss?
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                We are always open to exploring new opportunities and partnerships.
              </p>
            </div>
            <Link href="/contact" className="btn-primary shrink-0">
              Contact Us <Arrow width={16} height={16} />
            </Link>
          </div>
        </div>
      </section>

      {active && <ProductModal item={active} onClose={() => setActive(null)} />}
    </>
  );
}
