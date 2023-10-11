import Topic from '@components/Topic';
import React from 'react';
import { useParams } from 'next/navigation';
import { UUID } from 'crypto';

export default function TopicDetails() {
  const { topicId } = useParams();

  return <Topic id={topicId as UUID} />;
}
