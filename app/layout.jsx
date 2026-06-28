import './globals.css';
import { Inter, Sora } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollAnimator from '@/components/ScrollAnimator';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://www.szglobalsolutions.com'),
  title: {
    default: 'SZ Global Solutions — Origination. Structuring. Execution.',
    template: '%s | SZ Global Solutions',
  },
  description:
    'SZ Global Solutions is a UK & UAE-based origination and transaction advisory firm. We identify opportunities, structure commercially robust transactions and connect counterparties across Africa, the GCC and international markets.',
  keywords: [
    'transaction advisory',
    'deal origination',
    'capital advisory',
    'energy and commodities',
    'cross-border advisory',
    'UAE',
    'Africa',
    'GCC',
  ],
  openGraph: {
    title: 'SZ Global Solutions — Origination. Structuring. Execution.',
    description:
      'A UK & UAE-based origination and transaction advisory firm connecting opportunities, capital and counterparties across global markets.',
    url: 'https://www.szglobalsolutions.com',
    siteName: 'SZ Global Solutions',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <ScrollAnimator />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
