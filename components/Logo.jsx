import Link from 'next/link';
import Image from 'next/image';

// Official SZ Global Solutions logo.
// `variant="dark"` uses the light-text version for dark backgrounds (nav/footer).
export default function Logo({
  className = '',
  imgClassName = 'h-14 w-auto sm:h-16',
  variant = 'dark',
  priority = false,
}) {
  const src = variant === 'dark' ? '/logo-dark.png' : '/logo.png';
  return (
    <Link
      href="/"
      className={`inline-flex items-center ${className}`}
      aria-label="SZ Global Solutions — home"
    >
      <Image
        src={src}
        alt="SZ Global Solutions"
        width={378}
        height={246}
        priority={priority}
        className={imgClassName}
      />
    </Link>
  );
}
