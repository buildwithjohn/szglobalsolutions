import Link from 'next/link';
import { Arrow } from './Icons';

// Standalone uppercase section label exactly as shown on the templates
// (e.g. "WHAT WE DO", "OUR TRANSACTION METHOD", "WHERE WE FOCUS").
export function SectionLabel({ children, center }) {
  return (
    <div data-reveal className={center ? 'text-center' : ''}>
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold">{children}</p>
      <span className={`grow-line mt-3 ${center ? 'mx-auto' : ''}`} />
    </div>
  );
}

// Eyebrow + heading block
export function SectionHeading({ eyebrow, title, accent, subtitle, center, light }) {
  return (
    <div data-reveal className={`${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}`}>
      {eyebrow && (
        <p className="eyebrow">
          {eyebrow}
          <span className={`grow-line mt-2 ${center ? 'mx-auto' : ''}`} />
        </p>
      )}
      <h2 className={`${eyebrow ? 'mt-3' : ''} heading-lg`}>
        {title} {accent && <span className="shine-text">{accent}</span>}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed ${light ? 'text-slate-300' : 'text-slate-400'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

// Page hero used by interior pages
export function PageHero({ eyebrow, title, accent, subtitle, image, children }) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      {image && (
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={image} alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 to-transparent" />
        </div>
      )}
      <div className="container-x relative py-20 sm:py-28">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="eyebrow animate-fade-up">{eyebrow}</p>
          )}
          <h1 className="mt-4 heading-xl">
            <span className="line-reveal block">
              <span style={{ '--line-delay': '120ms' }}>{title}</span>
            </span>
            {accent && (
              <span className="line-reveal block">
                <span style={{ '--line-delay': '260ms' }}>
                  <span className="shine-text">{accent}</span>
                </span>
              </span>
            )}
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-2xl animate-fade-up text-lg leading-relaxed text-slate-300 [animation-delay:420ms]">
              {subtitle}
            </p>
          )}
          <div className="animate-fade-up [animation-delay:560ms]">{children}</div>
        </div>
      </div>
    </section>
  );
}

// Stat counter block
export function Stat({ value, label }) {
  return (
    <div data-reveal="zoom" className="text-center sm:text-left">
      <div className="font-display text-4xl font-bold text-gold sm:text-5xl">{value}</div>
      <div className="mt-2 text-sm leading-snug text-slate-400">{label}</div>
    </div>
  );
}

// Closing CTA band reused across pages
export function CtaBand({
  eyebrow = "Let's Build",
  title = "What's Next.",
  text = 'Whether you are exploring an opportunity, seeking capital or looking for a trusted advisory partner — let’s start a conversation.',
  buttonLabel = 'Discuss an Opportunity',
  href = '/contact',
}) {
  return (
    <section className="section">
      <div className="container-x">
        <div
          data-reveal
          className="relative overflow-hidden rounded-2xl border border-gold/20 bg-gradient-to-br from-navy-800 to-navy-900 p-10 sm:p-14"
        >
          <div className="absolute -right-16 -top-16 h-56 w-56 animate-float rounded-full bg-gold/10 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="heading-lg">
                {eyebrow} <span className="shine-text">{title}</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300">{text}</p>
            </div>
            <Link href={href} className="btn-primary shrink-0">
              {buttonLabel} <Arrow width={16} height={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Feature card with icon
export function FeatureCard({ icon: Icon, title, children }) {
  return (
    <div className="card group">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/10 text-gold transition group-hover:bg-gold group-hover:text-navy-950">
        <Icon width={24} height={24} />
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">{children}</p>
    </div>
  );
}

// Image-backed card with overlay caption (used in "Where We Focus" style grids)
export function ImageCard({ image, icon: Icon, title, children, className = '' }) {
  return (
    <div
      data-reveal
      className={`group relative overflow-hidden rounded-xl border border-white/10 transition duration-300 hover:-translate-y-1 hover:border-gold/40 ${className}`}
    >
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt=""
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/20" />
      </div>
      <div className="relative flex h-full flex-col justify-end p-6">
        {Icon && (
          <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gold text-navy-950">
            <Icon width={22} height={22} />
          </div>
        )}
        <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
        {children && <p className="mt-2 text-sm leading-relaxed text-slate-300">{children}</p>}
      </div>
    </div>
  );
}
