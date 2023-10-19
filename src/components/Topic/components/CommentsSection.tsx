import React from 'react';
import { dateConverter } from 'functions';
import { CommentWithAuthor } from 'types/IComments';

interface CommentProps {
  topicComments: CommentWithAuthor[];
}

export default function CommentsSection({ topicComments }: CommentProps) {
  return (
    <>
      {topicComments.map(({ author, content, createdAt, id }) => (
        <article key={id} className="py-4">
          <div className="flex flex-col gap-2">
            <span>
              {author.map((user) => (
                <b key={user.id}>{user.name}</b>
              ))}{' '}
              <span className="opacity-70">{dateConverter(createdAt)}</span>
            </span>
            <p>{content}</p>
            <hr className="bg-text dark:opacity-20" />
          </div>
        </article>
      ))}
    </>
  );
}
