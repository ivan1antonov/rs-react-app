import type { Metadata } from 'next';
import './globals.scss';
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
          <Header />
          <Main>{children}</Main>
        </Providers>
      </body>
    </html>
  );
}
