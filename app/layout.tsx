import type { Metadata } from 'next';

import './globals.css';

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
