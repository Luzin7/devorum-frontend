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
      <div>
        <div className="flex flex-col gap-2">
          <p className="leading-7 [&:not(:first-child)]:mt-6 font-bold">
            {title}
          </p>
          <p className="text-sm text-muted-foreground leading-6 lg:leading-7">
            {reduceText(assertion, 200)}
          </p>
          <p className="text-muted-foreground opacity-60 text-xs">
            {numberOfComments}{' '}
            {numberOfComments !== 1 ? 'comentários' : 'comentário'} •{' '}
            {author.name} • {dateConverter(createdAt)}
          </p>
        </div>
      </div>
    </>
  );
}
