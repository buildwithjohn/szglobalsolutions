import { img, site } from '@/lib/site';
import { PageHero } from '@/components/ui';
import ContactForm from '@/components/ContactForm';
import { Mail, Pin, Globe } from '@/components/Icons';

export const metadata = {
  title: 'Contact — Get in Touch',
  description:
    'Get in touch with SZ Global Solutions. We are ready to help you move forward.',
};

const details = [
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: Pin, label: 'Location', value: 'Ras Al Khaimah, United Arab Emirates' },
  { icon: Globe, label: 'Website', value: site.website },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="GET IN TOUCH"
        title="Get in"
        accent="Touch"
        image={img.worldNight}
        subtitle="Tell us about the opportunity, mandate or partnership you have in mind and we will get back to you."
      />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          {/* FORM */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
            <h2 className="font-display text-2xl font-semibold text-white">Send us a message</h2>
            <p className="mt-2 text-sm text-slate-400">
              Complete the form below and a member of our team will respond shortly.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          {/* DETAILS */}
          <div className="space-y-5">
            {details.map((d) => (
              <div key={d.label} className="card flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gold/10 text-gold">
                  <d.icon width={22} height={22} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {d.label}
                  </p>
                  {d.href ? (
                    <a href={d.href} className="mt-1 block text-sm text-white transition hover:text-gold">
                      {d.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-white">{d.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
