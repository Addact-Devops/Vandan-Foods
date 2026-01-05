import type { Metadata } from 'next';
import { Handlee, Manrope, Marcellus } from 'next/font/google';
import './globals.css';

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
      <body className={`${handlee.variable} ${manrope.variable} ${marcellus.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
