import { type ReactElement } from 'react';

import FormQuestion from './components/FormQuestion';

export default function Form(): ReactElement {
  return (
    <main className="flex flex-col justify-center items-center h-screen">
      <FormQuestion />
    </main>
  );
}
