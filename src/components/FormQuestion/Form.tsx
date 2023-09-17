import { type ReactElement } from 'react';

import FormQuestion from './components/FormQuestion';

export default function Form(): ReactElement {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      {/* <span className="text-xs">
        Por favor, leia isso antes de fazer sua primeira publicação.
      </span> */}
      <FormQuestion />
    </main>
  );
}
