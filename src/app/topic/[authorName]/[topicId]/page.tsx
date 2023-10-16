import Topic from '@components/Topic';
import React from 'react';
import { UUID } from 'crypto';
import { NextRequest } from 'next/server';

export default function TopicDetails(req: NextRequest) {
  const { params } = req;

  const topicId = params.topicId

  return <main className='px-5 xl:w-3/5 lg:w-3/4  mx-auto'><Topic id={topicId as UUID} /></main>;
}
