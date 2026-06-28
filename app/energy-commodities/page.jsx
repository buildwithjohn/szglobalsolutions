import Link from 'next/link';
import { img } from '@/lib/site';
import { PageHero } from '@/components/ui';
import { Arrow } from '@/components/Icons';

export const metadata = {
  title: 'Energy & Commodities',
  description: 'Energy & Commodities — page coming soon.',
};

export default function EnergyCommoditiesPage() {
  return (
    <>
      <PageHero
        eyebrow="ENERGY & COMMODITIES"
        title="Energy &"
        accent="Commodities"
        image={img.solar}
        subtitle="This section is coming soon."
      />
      <section className="section">
        <div className="container-x">
          <div className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center">
            <p className="text-base leading-relaxed text-slate-300">
              We are currently preparing the content for this page. In the meantime, explore our
              capabilities or get in touch to discuss an opportunity.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Link href="/what-we-do" className="btn-ghost">
                What We Do <Arrow width={16} height={16} />
              </Link>
              <Link href="/contact" className="btn-primary">
                Contact Us <Arrow width={16} height={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
