import { dateConverter, reduceText } from 'functions';
import Link from 'next/link';
import React from 'react';
import { TopicPreviewProps } from 'types/ITopic';

// TROCAR O BOTAO E DEIXAR A PROPRIA PERGUNTA SER UM LINK?
// PEGAR O JSON DO TITAP E USAR COIMO PREVIEW PAPAI

type TopicProps = Pick<
  TopicPreviewProps,
  'title' | 'assertion' | 'author' | 'createdAt' | 'id'
>;

export function TopicPreview({
  id,
  title,
  assertion,
  author,
  createdAt
}: TopicProps) {
  return (
    <>
      <div>
        <div className="flex flex-col gap-1">
          <p className="text-text opacity-70 text-sm">{title}</p>
          <div
            className="font-bold text-text"
            dangerouslySetInnerHTML={{ __html: assertion }}
          ></div>
        </div>
        <p className="text-text opacity-40 text-xs mt-2 2xl:mt-5">
          {dateConverter(createdAt)}
        </p>
      </div>
      <div className="flex flex-col justify-end">
        <Link href={`topic/${author.name}/${id}}`}>
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
