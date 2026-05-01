import { Inter } from 'next/font/google';
import './globals.css';
import { SITE } from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: {
    default: `${SITE.name} - Final Year Project Help With 1:1 Mentorship | BTech, BCA, MCA`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    'final year project help',
    'BTech project mentorship',
    'BCA final year project',
    'MCA project guidance',
    'project mentor India',
    'viva preparation',
    'engineering project help',
    'computer science final year project',
    'project submission help',
    'student project mentorship',
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  metadataBase: new URL(SITE.url),
  openGraph: {
    title: `${SITE.name} - Final Year Project Help With 1:1 Mentorship`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} - Final Year Project Help`,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification later
    // google: 'your-verification-code',
  },
};

export const viewport = {
  themeColor: '#6366f1',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}