import { type ReactElement } from 'react';

// import Hero from '../components/Hero';
import Questions from '../components/Questions';

export default function Home(): ReactElement {
  return (
    <main className="w-11/12 min-h-screen flex flex-col m-auto">
      {/* <Hero /> */}
      <Questions />
    </main>
  );
}
