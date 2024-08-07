import { dateConverter, reduceText } from 'functions';
import { TopicPreviewProps } from 'types/ITopic';

type TopicProps = Pick<
  TopicPreviewProps,
  'title' | 'assertion' | 'author' | 'createdAt' | 'numberOfComments'
>;

export function TopicPreview({
  title,
  assertion,
  author,
  createdAt,
  numberOfComments
}: TopicProps) {
  return (
    <>
      <div className="flex flex-col gap-2">
        <p className="leading-7 [&:not(:first-child)]:mt-6 font-bold">
          {title}
        </p>
        <p className="text-sm text-muted-foreground leading-6 lg:leading-7">
          {reduceText(assertion, 200)}
        </p>
        <div className="flex gap-4">
          <span className="bg-muted dark:bg-secondary-foreground/40 py-1 px-4 rounded-lg text-foreground  text-xs text-center">
            {author.name}
          </span>
          <span className="bg-muted dark:bg-secondary-foreground/40 py-1 px-4 rounded-lg text-foreground text-xs text-center">
            {numberOfComments}{' '}
            {numberOfComments !== 1 ? 'comentários' : 'comentário'}
          </span>
          <span className="bg-muted dark:bg-secondary-foreground/40 py-1 px-4 rounded-lg text-foreground text-xs text-center">
            {dateConverter(createdAt)}
          </span>
        </div>
      </div>
    </>
  );
}
