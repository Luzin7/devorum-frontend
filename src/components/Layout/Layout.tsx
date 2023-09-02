import { type ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

export function Layout(): ReactElement {
  return (
    <>
      <nav className="fixed w-screen flex items-center justify-evenly h-[7vh] top-0 text-center">
        Nav
      </nav>
      <Outlet />
      <footer className="fixed w-screen flex items-center justify-center h-[20vh] bottom-0 text-center">
        Footer
      </footer>
    </>
  );
}
