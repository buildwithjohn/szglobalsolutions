import { img, site } from '@/lib/site';
import { PageHero } from '@/components/ui';
import ContactForm from '@/components/ContactForm';
import { Mail, Pin, Globe, Clock, Quote } from '@/components/Icons';

export const metadata = {
  title: 'Contact — Let’s Build What’s Next',
  description:
    'Whether you are exploring an opportunity, seeking capital or looking for trusted advisory — let’s start a conversation.',
};

const details = [
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: Pin, label: 'Office', value: site.address },
  { icon: Globe, label: 'Website', value: site.website },
  { icon: Clock, label: 'Hours', value: site.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in Touch"
        title="Let’s Build"
        accent="What’s Next."
        image={img.worldNight}
        subtitle="Whether you are exploring an opportunity, seeking capital or looking for a trusted advisory partner — let’s start a conversation."
      />

      <section className="section">
        <div className="container-x grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          {/* FORM */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
            <h2 className="font-display text-2xl font-semibold text-white">Send us a message</h2>
            <p className="mt-2 text-sm text-slate-400">
              Tell us a little about what you’re working on and we’ll get back to you.
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

            <div className="relative overflow-hidden rounded-xl border border-gold/20 bg-gradient-to-br from-navy-800 to-navy-900 p-7">
              <Quote width={32} height={32} className="text-gold/40" />
              <p className="mt-4 text-base leading-relaxed text-slate-200">
                Opportunities don’t happen. They are created through insight, relationships and
                execution. That’s where we come in.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
