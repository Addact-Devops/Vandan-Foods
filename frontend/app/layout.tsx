import { Footer } from '@/components/organisms/Footer';
import { Header } from '@/components/organisms/Header';
import { headerQuery } from '@/graphql/queries/header';
import type { Metadata } from 'next';
import { Handlee, Jost, Manrope, Marcellus } from 'next/font/google';
import './globals.css';
import { footerQuery } from '@/graphql/queries/footer';

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
const [headerRes, footerRes] = await Promise.all([headerQuery(), footerQuery()]);

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
        <Header data={headerRes.header} />
        {children}
        <Footer data={footerRes.footer} />
      </body>
    </html>
  );
}
