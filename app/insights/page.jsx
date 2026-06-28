import Link from 'next/link';
import { img } from '@/lib/site';
import { PageHero } from '@/components/ui';
import { Arrow } from '@/components/Icons';

export const metadata = {
  title: 'Insights',
  description: 'Insights — coming soon.',
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="INSIGHTS"
        title="Insights"
        image={img.city}
        subtitle="This section is coming soon."
      />
      <section className="section">
        <div className="container-x">
          <div className="mx-auto max-w-xl rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center">
            <p className="text-base leading-relaxed text-slate-300">
              Our perspectives and articles will be published here. Get in touch to stay
              updated.
            </p>
            <div className="mt-7 flex justify-center">
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
