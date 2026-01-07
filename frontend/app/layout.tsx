import type { Metadata } from 'next';
import { Handlee, Manrope, Marcellus, Jost } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/organisms/Header';
import { Footer } from '@/components/organisms/Footer';

// Define Handlee font
const handlee = Handlee({
  variable: '--font-handlee',
  subsets: ['latin'],
  weight: ['400'],
});

// Define Manrope font
const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

// Define Marcellus font
const marcellus = Marcellus({
  variable: '--font-marcellus',
  subsets: ['latin'],
  weight: ['400'],
});

// Define Jost font
const jost = Jost({
  variable: '--font-jost',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Vandan Foods',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${handlee.variable} ${manrope.variable} ${marcellus.variable}  ${jost.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
