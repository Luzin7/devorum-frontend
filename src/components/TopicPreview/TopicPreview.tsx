import { dateConverter, reduceText, slugUrlMaker } from 'functions'
import Link from 'next/link'
import React from 'react'
import Topic from 'types'

// TROCAR O BOTAO E DEIXAR A PROPRIA PERGUNTA SER UM LINK?

type TopicPreviewProps = Pick<
  Topic,
  'title' | 'content' | 'authorName' | 'createdAt'
>

export function TopicPreview({
  title,
  content,
  authorName,
  createdAt,
}: TopicPreviewProps) {
  return (
    <>
      <div>
        <div className="flex flex-col gap-1">
          <p className="text-background opacity-70 text-sm">
            {reduceText(title, 25)}
          </p>
          <p className="text-primary font-semibold">
            {reduceText(content, 45)}
          </p>
        </div>
        <p className="text-background opacity-50 text-xs mt-2 2xl:mt-5">
          {dateConverter(createdAt)}
        </p>
      </div>
      <div className="flex flex-col justify-end">
        <Link href={`topic/${authorName}/${slugUrlMaker(title)}`}>
          <button
            type="button"
            className="font-bold bg-accent rounded-full py-2 px-4 text-sm hover:bg-primary transition-colors"
          >
            Conferir
          </button>
        </Link>
      </div>
    </>
  )
}
