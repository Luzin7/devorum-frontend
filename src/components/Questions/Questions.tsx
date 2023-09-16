import { type ReactElement } from 'react';

import { QuestionMap } from './components/Question';

export function Questions(): ReactElement {
  return (
    <section>
      <QuestionMap />
    </section>
  );
}
