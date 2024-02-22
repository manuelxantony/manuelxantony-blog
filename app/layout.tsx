import type { Metadata } from 'next';

import './globals.css';

import Header from '@/components/header';
import NavBar from '@/components/nav';

export const metadata: Metadata = {
  title: 'manuelxantony blog',
  description: 'Created by Manuel Antony',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
