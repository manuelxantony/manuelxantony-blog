import { Inter, Rajdhani } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const rajdhani = Rajdhani({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rajdhani',
});
