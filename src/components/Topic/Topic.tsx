import React from 'react';
import TopicDetail from './components/TopicDetail';
import CommentInput from './components/CommentInput';
import { getTopicById } from 'services/http/requests/api';
import { UUID } from 'crypto';
import CommentsSection from './components/CommentsSection';

export default async function Topic({ id }: { id: UUID }) {
  const topic = await getTopicById(id);

  const { author, content, createdAt, title, comments } = topic;

  return (
    <>
      <TopicDetail
        author={author}
        content={content}
        createdAt={createdAt}
        title={title}
      />
      <CommentInput topicId={id} />
      <CommentsSection topicComments={comments} />
    </>
  );
}
