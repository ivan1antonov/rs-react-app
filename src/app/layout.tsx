import type { Metadata } from 'next';
import logo from '../assets/loader.gif';
import './globals.scss';
import Image from 'next/image';
import Header from '../components/Header';
import Providers from './providers';
import Main from './Main';

export const metadata: Metadata = {
  title: 'Star Wars',
  description: 'My App is about persons of Star Wars',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <header>
            <Image className="logo" src={logo} alt="logo" />
            <Header />
          </header>
          <Main>{children}</Main>
        </Providers>
      </body>
    </html>
  );
}
