import { type ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import ThemeSwitchButton from '../ThemeSwitchButton';

export function Layout(): ReactElement {
  return (
    <>
      <header>
        <nav className="flex items-center justify-evenly h-[7vh]">
          Nav
          <ThemeSwitchButton />
        </nav>
      </header>
      <Outlet />
      <footer className="flex items-center justify-center h-[7vh]">
        Footer
      </footer>
    </>
  );
}
