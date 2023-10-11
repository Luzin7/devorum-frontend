import TopicPreview from '@components/TopicPreview';
import { getTopics } from 'services/http/requests/api';

export async function Topics() {
  const topics = await getTopics();

  return (
    <div className="py-6 flex flex-col gap-4 w-full max-h-[90vh] overflow-y-scroll rounded-2xl cursor-default md:m-auto lg:w-3/5 xl:w-2/4">
      {topics.map(({ assertion, createdAt, title, id, author }) => (
        <div
          className="bg-topicBackground flex justify-between p-2 rounded-md md:p-4 md:rounded-xl"
          key={id}
        >
          <TopicPreview
            id={id}
            author={author}
            assertion={assertion}
            createdAt={createdAt}
            title={title}
          />
        </div>
      ))}
    </div>
  );
}
