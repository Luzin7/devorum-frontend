import TopicPreview from '@components/TopicPreview';
import { slugUrlMaker } from 'functions';
import Link from 'next/link';
import { getTopics } from 'services/http/requests/api';

export async function Topics() {
  const topics = await getTopics();

  return (
    <div className="pt-2 flex flex-col gap-4 w-full max-h-[86vh] overflow-y-scroll rounded-2xl cursor-default md:m-auto lg:w-3/5 xl:w-2/4">
      {topics.map(
        ({ assertion, createdAt, title, id, author, numberOfComments }) => (
          <Link
            href={`topic/${slugUrlMaker(author.name)}/${id.replace('%7D', '')}`}
            key={id}
          >
            <div className="bg-topicBackground flex justify-between p-2 rounded-md md:p-4 md:rounded-xl">
              <TopicPreview
                author={author}
                assertion={assertion}
                createdAt={createdAt}
                title={title}
                numberOfComments={numberOfComments}
              />
            </div>
          </Link>
        )
      )}
    </div>
  );
}
