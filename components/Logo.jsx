import Link from 'next/link';

// SVG re-creation of the multicolour SZ Global "swoosh" mark + wordmark.
export default function Logo({ className = '' }) {
  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`} aria-label="SZ Global Solutions home">
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <g strokeWidth="4.2" strokeLinecap="round" fill="none">
          <path d="M14 30c-6 0-9-4-9-8s3-8 9-8c5 0 8 4 12 8" stroke="#2bb3d4" />
          <path d="M34 18c6 0 9 4 9 8s-3 8-9 8c-5 0-8-4-12-8" stroke="#3fae5a" />
          <path d="M12 18c5 0 9 4 13 8" stroke="#f0a830" />
          <path d="M23 26c4 4 8 8 13 8" stroke="#e0533a" />
        </g>
      </svg>
      <span className="leading-none">
        <span className="block font-display text-lg font-extrabold tracking-tight text-white">
          SZ GLOBAL
        </span>
        <span className="block text-[10px] font-medium uppercase tracking-[0.42em] text-slate-400">
          Solutions
        </span>
      </span>
    </Link>
  );
}
