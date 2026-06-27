import { img } from '@/lib/site';
import { PageHero, CtaBand, SectionHeading } from '@/components/ui';
import {
  Search,
  CheckCircle,
  Handshake,
  Coins,
  Users,
  Chart,
  Shield,
  Bulb,
  Target,
  Compass,
  Globe,
} from '@/components/Icons';

export const metadata = {
  title: 'Our Approach — A Disciplined Approach. Measurable Outcomes.',
  description:
    'Our proven six-stage approach ensures we deliver the right strategy, the right partners and the right outcome — every time.',
};

const steps = [
  { n: '01', icon: Search, title: 'Originate', image: img.finance, text: 'We identify and assess high-potential opportunities aligned with your objectives.' },
  { n: '02', icon: CheckCircle, title: 'Evaluate', image: img.advisory, text: 'We conduct rigorous analysis to validate viability, structure and risk.' },
  { n: '03', icon: Handshake, title: 'Structure', image: img.handshake, text: 'We design the optimal transaction structure to create value and mitigate risk.' },
  { n: '04', icon: Coins, title: 'Align Capital', image: img.excavator, text: 'We connect you with the right capital partners to fund and execute.' },
  { n: '05', icon: Users, title: 'Execute', image: img.boardroom, text: 'We manage the process end-to-end, ensuring smooth execution and stakeholder alignment.' },
  { n: '06', icon: Chart, title: 'Deliver Value', image: img.city, text: 'We focus on long-term value creation and sustainable growth beyond the deal.' },
];

const principles = [
  { icon: Shield, title: 'Integrity', text: 'We act with honesty, transparency and professionalism.' },
  { icon: Users, title: 'Relationships', text: 'We build trusted, long-term relationships with our partners.' },
  { icon: Bulb, title: 'Excellence', text: 'We are committed to excellence in everything we do.' },
  { icon: Target, title: 'Focus', text: 'We stay focused on measurable results and meaningful outcomes.' },
  { icon: Compass, title: 'Discipline', text: 'We apply a structured, disciplined process to every engagement.' },
];

export default function OurApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Approach"
        title="A Disciplined Approach. Measurable"
        accent="Outcomes."
        image={img.meeting}
        subtitle="Every transaction is unique. Our proven approach ensures we deliver the right strategy, the right partners and the right outcome — every time."
      />

      {/* SIX STEPS */}
      <section className="section">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="card overflow-hidden p-0">
                <div className="relative h-36">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.image} alt="" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent" />
                  <span className="absolute left-4 top-3 font-display text-2xl font-bold text-gold">
                    {s.n}
                  </span>
                  <div className="absolute bottom-3 left-4 flex h-10 w-10 items-center justify-center rounded-lg bg-navy-950/70 text-gold backdrop-blur">
                    <s.icon width={20} height={20} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="section border-y border-white/10 bg-navy-900/40">
        <div className="container-x">
          <SectionHeading eyebrow="Our Principles" title="The Standards We" accent="Hold Ourselves To" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {principles.map((p) => (
              <div key={p.title} className="card">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <p.icon width={22} height={22} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL PERSPECTIVE */}
      <section className="section">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-2xl border border-white/10">
            <div className="absolute inset-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img.worldNight} alt="" className="h-full w-full object-cover opacity-40" />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-transparent" />
            </div>
            <div className="relative max-w-xl p-10 sm:p-14">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/15 text-gold">
                <Globe width={26} height={26} />
              </div>
              <h2 className="mt-6 heading-lg">
                Global Perspective,<br />
                <span className="text-gold">Local Insight.</span>
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-slate-300">
                Our cross-border footprint, combined with deep local networks, enables us to
                identify and unlock opportunities that others miss. We understand local markets,
                regulations and cultures — allowing us to structure and execute transactions
                with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
