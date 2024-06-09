import TopicPreview from '@components/TopicPreview';
import { slugUrlMaker } from 'functions';
import Link from 'next/link';
import { getTopics } from 'services/http/requests/api';

export async function Topics() {
  const topics = await getTopics();

  return (
    <div className="container py-4 flex flex-col gap-4 w-full rounded-2xl cursor-default">
      {topics.map(
        ({ assertion, createdAt, title, id, author, numberOfComments }) => (
          <Link
            href={`topic/${slugUrlMaker(author.name)}/${id.replace('%7D', '')}`}
            key={id}
          >
            <div className="bg-primary-foreground flex justify-between p-2 rounded-md md:p-4 md:rounded-xl shadow-lg lg:hover:scale-105 transition-transform">
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
