import { dateConverter, reduceText, slugUrlMaker } from 'functions';
import Link from 'next/link';
import React from 'react';
import Topic from 'types';

// TROCAR O BOTAO E DEIXAR A PROPRIA PERGUNTA SER UM LINK?
// PEGAR O JSON DO TITAP E USAR COIMO PREVIEW PAPAI

type TopicPreviewProps = Pick<
  Topic,
  'title' | 'content' | 'authorName' | 'createdAt'
>;

export function TopicPreview({
  title,
  content,
  authorName,
  createdAt
}: TopicPreviewProps) {
  return (
    <>
      <div>
        <div className="flex flex-col gap-1">
          <p className="text-text opacity-70 text-sm">
            {reduceText(title, 25)}
          </p>
          <div
            className="font-bold text-text"
            dangerouslySetInnerHTML={{ __html: reduceText(content, 50) }}
          ></div>
        </div>
        <p className="text-text opacity-40 text-xs mt-2 2xl:mt-5">
          {dateConverter(createdAt)}
        </p>
      </div>
      <div className="flex flex-col justify-end">
        <Link href={`topic/${authorName}/${slugUrlMaker(title)}`}>
          <button
            type="button"
            className="font-bold bg-accent text-blue-100 rounded-full py-2 px-4 text-sm hover:bg-primary transition-colors"
          >
            Conferir
          </button>
        </Link>
      </div>
    </>
  );
}
