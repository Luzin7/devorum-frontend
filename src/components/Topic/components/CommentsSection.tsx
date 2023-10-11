import React from 'react';
import { fakeComments } from 'data/fakeComments';
import { dateConverter } from 'functions';
import { Comment } from 'types/IComments';

type CommentProps = Pick<Comment, 'topicId'>;

export default function CommentsSection({ topicId }: CommentProps) {
  const topicComments = fakeComments.filter(
    (comment) => comment.topicId === topicId
  );

  return topicComments.map(({ authorId, createdAt, content }) => (
    <div key={authorId}>
      <span>
        {authorId} {dateConverter(createdAt)}
      </span>
      <p>{content}</p>
    </div>
  ));
}
