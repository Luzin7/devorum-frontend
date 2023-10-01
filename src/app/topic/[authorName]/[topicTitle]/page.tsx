import Topic from '@components/Topic';
import { fakeTopics } from 'data/fakeTopics';
import React from 'react';

export default function page() {
  return <Topic data={fakeTopics[1]} />;
}
