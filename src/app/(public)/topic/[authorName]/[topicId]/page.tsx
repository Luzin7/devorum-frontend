'use client';

import Loading from 'app/loading';
import { UUID } from 'crypto';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getTopicById } from 'services/http/requests/api';
import TopicProps from 'types';
import CommentInput from '../../components/components/CommentInput';
import CommentsSection from '../../components/components/CommentsSection';
import TopicDetail from '../../components/components/TopicDetail';

export default function Topic() {
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
    return <Loading />;
  }

  return (
    <main className="container min-h-screen">
      <TopicDetail
        updatedAt={topic.updatedAt}
        author={topic.author}
        content={topic.content}
        createdAt={topic.createdAt}
        title={topic.title}
        id={topic.id}
      />
      <CommentInput topicId={topic.id} />
      <CommentsSection topicComments={topic.comments} topicId={topic.id} />
    </main>
  );
}
