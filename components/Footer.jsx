import Link from 'next/link';
import Logo from './Logo';
import { nav, site } from '@/lib/site';
import { Mail, Pin, Clock, Globe } from './Icons';

export default function Footer() {
  const year = 2026;
  return (
    <footer className="border-t border-white/10 bg-navy-950">
      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <Logo imgClassName="h-16 w-auto sm:h-20" />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
            A UK &amp; UAE-based origination and transaction advisory firm. We connect
            opportunities, capital and counterparties across Africa, the GCC and
            international markets.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['UK', 'UAE', 'Africa', 'GCC'].map((r) => (
              <span
                key={r}
                className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-slate-400"
              >
                {r}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Navigate
          </h3>
          <ul className="mt-5 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-slate-400 transition hover:text-gold"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Get in Touch
          </h3>
          <ul className="mt-5 space-y-4 text-sm text-slate-400">
            <li className="flex gap-3">
              <Mail width={18} height={18} className="mt-0.5 shrink-0 text-gold" />
              <a href={`mailto:${site.email}`} className="transition hover:text-gold">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Pin width={18} height={18} className="mt-0.5 shrink-0 text-gold" />
              <span>{site.address}</span>
            </li>
            <li className="flex gap-3">
              <Clock width={18} height={18} className="mt-0.5 shrink-0 text-gold" />
              <span>{site.hours}</span>
            </li>
            <li className="flex gap-3">
              <Globe width={18} height={18} className="mt-0.5 shrink-0 text-gold" />
              <span>{site.website}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-slate-500 sm:flex-row">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p>Origination. Structuring. Execution.</p>
        </div>
      </div>
    </footer>
  );
}
