'use client';

import React, { useEffect, useState } from 'react';
import TopicDetail from './components/TopicDetail';
import CommentInput from './components/CommentInput';
import { getTopicById } from 'services/http/requests/api';
import { UUID } from 'crypto';
import CommentsSection from './components/CommentsSection';
import { useParams } from 'next/navigation';
import TopicProps from 'types';

export function Topic() {
  const params = useParams();
  const topicId = params.topicId as UUID;
  const [topic, setTopic] = useState<TopicProps>();

  const fetchTopic = async () => {
    const response = await getTopicById(topicId);

    setTopic(response);
  };

  useEffect(() => {
    fetchTopic();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topicId]);

  if (!topic) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <TopicDetail
        author={topic.author}
        content={topic.content}
        createdAt={topic.createdAt}
        title={topic.title}
      />
      <CommentInput topicId={topic.id} />
      <CommentsSection topicComments={topic.comments} />
    </>
  );
}
