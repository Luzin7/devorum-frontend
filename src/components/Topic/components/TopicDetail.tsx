import React from 'react';
import Topic from 'types';
import { dateConverter } from './../../../functions/dateConverter';

type TopicDetailsProps = Pick<
  Topic,
  'title' | 'content' | 'authorName' | 'createdAt'
>;

export default function TopicDetail({
  authorName,
  content,
  createdAt,
  title
}: TopicDetailsProps) {
  return (
    <div>
      <div>
        <span>
          {authorName} {dateConverter(createdAt)}
        </span>
      </div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
}
