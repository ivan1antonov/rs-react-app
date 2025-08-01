import { Outlet } from 'react-router-dom';

import Header from './Header';
import logo from './assets/star-wars.svg';

export function Layout() {
  return (
    <>
      <img className="logo" src={logo} alt="logo" />;
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
