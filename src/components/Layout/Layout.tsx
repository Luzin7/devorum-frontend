import { type ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import ThemeSwitchButton from '../ThemeSwitchButton';

export function Layout(): ReactElement {
  return (
    <>
      <header>
        <nav className="fixed w-screen flex items-center justify-evenly h-[7vh] top-0 text-center">
          Nav
          <ThemeSwitchButton />
        </nav>
      </header>
      <Outlet />
      <footer className="fixed w-screen flex items-center justify-center h-[20vh] bottom-0 text-center">
        Footer
      </footer>
    </>
  );
}
