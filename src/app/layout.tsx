import type { Metadata } from 'next';
import { Provider } from 'react-redux';
import logo from '../assets/loader.gif';
import { store } from '../store';
import './globals.scss';
import Image from 'next/image';
import Link from 'next/link';

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
        <Provider store={store}>
          <Image className="logo" src={logo} alt="logo" />
          <header className="header">
            <Input
              className="input"
              type="text"
              value={value}
              newValue={setValue}
              onEnter={onSearch}
              placeholder="Do you want find anyone?"
            />
            <Button className="button" text="Search" onClick={onSearch} />
            <Link href="/about"> About author </Link>
            <Switcher />
          </header>
          <main>{children}</main>
        </Provider>
      </body>
    </html>
  );
}
