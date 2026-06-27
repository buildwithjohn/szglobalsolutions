import { img } from '@/lib/site';
import { PageHero, CtaBand } from '@/components/ui';
import { Arrow } from '@/components/Icons';

export const metadata = {
  title: 'Insights',
  description:
    'Perspectives on origination, capital and cross-border execution across energy, commodities and infrastructure markets.',
};

const articles = [
  {
    tag: 'Capital Markets',
    title: 'Structuring Cross-Border Transactions in Emerging Markets',
    excerpt: 'How disciplined structuring reduces risk and unlocks capital for opportunities spanning Africa, the GCC and beyond.',
    image: img.finance,
    read: '6 min read',
  },
  {
    tag: 'Energy',
    title: 'Building Resilient Supply Corridors in Energy & Commodities',
    excerpt: 'The strategic relationships and downstream opportunities shaping international energy markets.',
    image: img.oilRig,
    read: '5 min read',
  },
  {
    tag: 'Infrastructure',
    title: 'Financing the Next Wave of Infrastructure & Renewables',
    excerpt: 'Why patient, well-structured capital is the catalyst for sustainable infrastructure and clean-energy growth.',
    image: img.wind,
    read: '7 min read',
  },
  {
    tag: 'Strategy',
    title: 'From Opportunity to Execution: The Origination Mindset',
    excerpt: 'What separates opportunities that close from those that stall — and the discipline that bridges the gap.',
    image: img.boardroom,
    read: '4 min read',
  },
  {
    tag: 'Markets',
    title: 'Global Perspective, Local Insight: Navigating Complexity',
    excerpt: 'How cross-border footprints combined with local networks surface opportunities others miss.',
    image: img.city,
    read: '6 min read',
  },
  {
    tag: 'Advisory',
    title: 'Aligning Capital with the Right Counterparties',
    excerpt: 'Connecting sponsors, investors and operators to build transactions that create lasting value.',
    image: img.handshake,
    read: '5 min read',
  },
];

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Perspectives on Capital,"
        accent="Markets & Execution."
        image={img.city}
        subtitle="Practical perspectives on origination, capital and cross-border execution across energy, commodities and infrastructure markets."
      />

      <section className="section">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((a) => (
            <article key={a.title} className="card group overflow-hidden p-0">
              <div className="relative h-44">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={a.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-navy-950">
                  {a.tag}
                </span>
              </div>
              <div className="p-6">
                <div className="text-xs text-slate-500">{a.read}</div>
                <h2 className="mt-2 font-display text-lg font-semibold leading-snug text-white transition group-hover:text-gold">
                  {a.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{a.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                  Read more <Arrow width={15} height={15} />
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="container-x mt-12">
          <p className="rounded-lg border border-dashed border-white/15 bg-white/[0.02] p-5 text-center text-sm text-slate-400">
            More insights are published regularly. Subscribe via{' '}
            <a href="/contact" className="font-semibold text-gold hover:underline">
              our contact page
            </a>{' '}
            to receive updates.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
