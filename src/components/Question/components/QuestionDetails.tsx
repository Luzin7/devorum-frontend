import { type ReactElement } from 'react';

import type Question from '../../../types/IQuestion';

interface QuestionProps {
  questionDetails: Question;
}

export function QuestionDetails({
  questionDetails,
}: QuestionProps): ReactElement {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { author_name, title, question } = questionDetails;

  return (
    <section className="mb-7 py-2 px-2 text-text">
      <span className="block mb-2 text-xs opacity-70">{author_name}</span>
      <div className="flex flex-col justify-evenly  gap-2">
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="font-medium">{question}</p>
      </div>
    </section>
  );
}
