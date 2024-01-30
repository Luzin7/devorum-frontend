import { dateConverter, reduceText } from 'functions';
import React from 'react';
import { TopicPreviewProps } from 'types/ITopic';

// TROCAR O BOTAO E DEIXAR A PROPRIA PERGUNTA SER UM LINK?

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
        <div className="flex flex-col gap-1">
          <p className="text-text opacity-70 text-sm lg:text-base 2xl:mb-2">
            {title}
          </p>
          <p className="font-bold text-text">{reduceText(assertion, 200)}</p>
        </div>
        <p className="text-text opacity-40 text-xs lg:text-sm mt-2 2xl:mt-4">
          {numberOfComments}{' '}
          {numberOfComments !== 1 ? 'comentários' : 'comentário'} {author.name}{' '}
          {dateConverter(createdAt)}
        </p>
      </div>
    </>
  );
}
