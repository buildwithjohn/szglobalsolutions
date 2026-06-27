'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { nav } from '@/lib/site';
import { Arrow } from './Icons';

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href.split('#')[0]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-navy-950/90 backdrop-blur-md'
          : 'border-b border-transparent bg-navy-950/60 backdrop-blur-sm'
      }`}
    >
      <nav className="container-x flex h-[72px] items-center justify-between gap-4">
        <Logo />

        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <li key={item.href} className="group relative">
              <Link
                href={item.href}
                className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition ${
                  isActive(item.href)
                    ? 'text-gold'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
                {item.children && (
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5">
                    <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </Link>
              {item.children && (
                <div className="invisible absolute left-0 top-full w-56 translate-y-2 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="overflow-hidden rounded-lg border border-white/10 bg-navy-850 shadow-xl">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block border-b border-white/5 px-4 py-3 text-sm text-slate-300 transition last:border-0 hover:bg-white/5 hover:text-gold"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Link href="/contact" className="btn-primary">
            Get Started <Arrow width={16} height={16} />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white lg:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 bg-navy-900 lg:hidden">
          <ul className="container-x flex flex-col py-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block py-3 text-base font-medium ${
                    isActive(item.href) ? 'text-gold' : 'text-slate-200'
                  }`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="ml-4 border-l border-white/10 pl-4">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} className="block py-2 text-sm text-slate-400">
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="pt-3">
              <Link href="/contact" className="btn-primary w-full justify-center">
                Get Started <Arrow width={16} height={16} />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
