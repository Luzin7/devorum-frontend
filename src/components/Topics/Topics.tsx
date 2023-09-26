import TopicPreview from '@components/TopicPreview'
import Topic from 'types'

interface TopicsProps {
  content: Topic[]
}

export function Topics({ content }: TopicsProps) {
  return (
    <div className="py-6 flex flex-col gap-4 w-full max-h-[90vh] overflow-y-scroll rounded-2xl cursor-default md:m-auto lg:w-3/5 xl:w-2/4">
      {content.map(({ authorName, content, createdAt, id, title }) => (
        <div
          className="bg-text flex justify-between p-2 rounded-md md:p-4 md:rounded-xl"
          key={id}
        >
          <TopicPreview
            authorName={authorName}
            content={content}
            createdAt={createdAt}
            title={title}
          />
        </div>
      ))}
    </div>
  )
}
