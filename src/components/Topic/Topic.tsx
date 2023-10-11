import React from 'react';
import TopicDetail from './components/TopicDetail';
// import CommentsSection from './components/CommentsSection';
import { getTopicById } from 'services/http/requests/api';
import { UUID } from 'crypto';

export default async function Topic({ id }: { id: UUID }) {
  const topic = await getTopicById(id);
  const { author, content, createdAt, title } = topic;
  return (
    <>
      <TopicDetail
        author={author}
        content={content}
        createdAt={createdAt}
        title={title}
      />
      <hr />
      {/* <CommentsSection topicId={id} /> */}
    </>
  );
}
