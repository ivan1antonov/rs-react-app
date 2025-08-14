import type { Metadata } from 'next';
import logo from '../assets/loader.gif';
import './globals.scss';
import Image from 'next/image';
import Header from '../components/Header';
import Providers from './providers';

export const metadata: Metadata = {
  title: 'Star Wars',
  description: 'My App is about people of Swar Wars',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Next js</title>
      </head>
      <body>
        <Providers>
          <Image className="logo" src={logo} alt="logo" />
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
