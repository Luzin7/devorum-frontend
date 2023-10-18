import { type UUID } from 'crypto';
import { CommentWithAuthor } from './IComments';

interface TopicAuthor {
  id: UUID;
  name: string;
}

export interface TopicPreviewProps {
  id: UUID;
  author: TopicAuthor;
  title: string;
  assertion: string;
  createdAt: Date;
  updatedAt: null | Date;
  numberOfComments: number;
}

export interface TopicProps {
  id: UUID;
  author: TopicAuthor;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: null | Date;
  numberOfComments: number;
  comments: CommentWithAuthor[];
}
