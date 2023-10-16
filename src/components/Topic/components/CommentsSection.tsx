import React from 'react';
import { dateConverter } from 'functions';
import { Comment } from 'types/IComments';

type CommentProps = Pick<Comment, 'topicId'>;

export default function CommentsSection({ topicId }: CommentProps) {
  // const comments = await getCommentsByTopicId(id);
  // const { author, content, createdAt } = comments;

  return comments.map(({ authorId, createdAt, content }) => (
    <div key={authorId}>
      <span>
        {authorId} {dateConverter(createdAt)}
      </span>
      <p>{content}</p>
    </div>
  ));
}
