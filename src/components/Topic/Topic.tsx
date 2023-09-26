import React from 'react'
import Topic from 'types'
import TopicDetail from './components/TopicDetail'
import CommentsSection from './components/CommentsSection'

interface TopicProps {
  data: Topic
}

export default function Topic({ data }: TopicProps) {
  return (
    <>
      <TopicDetail
        authorName={data.authorName}
        content={data.content}
        createdAt={data.createdAt}
        title={data.title}
      />
      <hr />
      <CommentsSection />
    </>
  )
}
