import { type ReactElement } from 'react';

interface QuestionProps {
  author: string;
  title: string;
  question: string;
}

export function QuestionDetails({
  author,
  title,
  question,
}: QuestionProps): ReactElement {
  return (
    <section className="mb-7 py-2 px-2 text-text">
      <span className="block mb-2 text-xs opacity-70">{author}</span>
      <div className="flex flex-col justify-evenly  gap-2">
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="font-medium">{question}</p>
      </div>
    </section>
  );
}
