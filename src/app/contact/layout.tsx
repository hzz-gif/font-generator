import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Font Generator Pro - Get Help & Support',
  description: 'Contact Font Generator Pro for support, feature requests, or business inquiries. We respond within 24 hours to help with your text styling needs.',
  openGraph: {
    title: 'Contact Font Generator Pro - Get Help & Support',
    description: 'Contact Font Generator Pro for support, feature requests, or business inquiries. We respond within 24 hours to help with your text styling needs.',
    url: 'https://font-generator.pro/contact/',
  },
  alternates: {
    canonical: 'https://font-generator.pro/contact/',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
