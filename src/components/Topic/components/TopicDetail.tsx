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
    <div className="prose prose-strong:text-text prose-code:text-text prose-code:bg-secondary prose-code:rounded-sm m-auto text-text">
      <div>
        <span>
          {author.name} {dateConverter(createdAt)}
        </span>
      </div>
      <h1 className="text-2xl font-bold text-text">{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
}
