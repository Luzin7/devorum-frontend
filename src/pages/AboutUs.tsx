import { type ReactElement } from 'react';

import AboutUsCards from '../components/AboutUsCards';

export default function AboutUs(): ReactElement {
  return (
    <main className="w-11/12 min-h-screen flex flex-col m-auto">
      <AboutUsCards />
    </main>
  );
}
