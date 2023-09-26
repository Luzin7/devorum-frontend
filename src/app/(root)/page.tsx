import Topics from '@components/Topics'
import { fakeTopics } from 'data/fakeTopics'
import React from 'react'

export default function Root() {
  return <Topics content={fakeTopics} />
}
