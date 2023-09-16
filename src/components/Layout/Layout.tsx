import { type ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

export function Layout(): ReactElement {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
