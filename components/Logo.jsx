import Link from 'next/link';
import Image from 'next/image';

// Official SZ Global Solutions logo.
//  - variant="mark"  → colourful swoosh icon only (used in the navbar)
//  - variant="dark"  → full logo, light wordmark for dark backgrounds (footer)
//  - variant="light" → full logo for light backgrounds
const SOURCES = {
  mark: { src: '/logo-mark.png', w: 194, h: 151 },
  dark: { src: '/logo-dark.png', w: 378, h: 246 },
  light: { src: '/logo.png', w: 378, h: 246 },
};

export default function Logo({
  className = '',
  imgClassName = 'h-14 w-auto sm:h-16',
  variant = 'dark',
  priority = false,
}) {
  const { src, w, h } = SOURCES[variant] || SOURCES.dark;
  return (
    <Link
      href="/"
      className={`inline-flex items-center ${className}`}
      aria-label="SZ Global Solutions — home"
    >
      <Image
        src={src}
        alt="SZ Global Solutions"
        width={w}
        height={h}
        priority={priority}
        className={imgClassName}
      />
    </Link>
  );
}
