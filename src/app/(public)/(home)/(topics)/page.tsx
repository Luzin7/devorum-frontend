import { slugUrlMaker } from 'functions';
import Link from 'next/link';
import { getTopics } from 'services/http/requests/api';
import TopicPreview from './components/TopicPreview';

export const revalidate = 5;

export default async function Topics() {
  const topics = await getTopics();

  return (
    <div className="container py-4 flex flex-col gap-4 w-full cursor-default">
      {topics.map(
        ({ assertion, createdAt, title, id, author, numberOfComments }) => (
          <Link
            href={`topic/${slugUrlMaker(author.name)}/${id.replace('%7D', '')}`}
            key={id}
          >
            <div className="bg-secondary flex justify-between p-2 rounded-lg md:p-4 shadow-lg lg:hover:scale-105 transition-transform">
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
