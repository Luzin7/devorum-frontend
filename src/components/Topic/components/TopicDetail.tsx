import React from 'react';
import Topic from 'types';
import { dateConverter } from './../../../functions/dateConverter';

type TopicDetailsProps = Pick<
  Topic,
  'title' | 'content' | 'author' | 'createdAt'
>;

export default function TopicDetail({
  author,
  content,
  createdAt,
  title
}: TopicDetailsProps) {
  return (
    <section className="my-8">
      <div className="text-text">
        <div>
          <span className="block mb-2 text-xs opacity-70 text-center">
            {author.name} - {dateConverter(createdAt)}
          </span>
        </div>
        <div className="flex flex-col justify-evenly gap-2">
          <h1 className="text-2xl font-bold">{title}</h1>
          <hr className="opacity-50" />
          <div
            className="min-w-full prose prose-invert prose-blockquote:text-text prose-headings:text-text prose-strong:text-text prose-pink prose-code:bg-secondary prose-code:rounded-sm text-text"
            dangerouslySetInnerHTML={{ __html: content }}
          ></div>
        </div>
      </div>
    </section>
  );
}
