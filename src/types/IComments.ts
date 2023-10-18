import { UUID } from 'crypto';

export interface Comment {
  topicId: string;
  authorId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date | null;
}

export interface CommentAuthor {
  id: UUID;
  name: string;
}

export interface CommentWithAuthor {
  id: UUID;
  content: string;
  createdAt: Date;
  updatedAt: null | Date;
  author: CommentAuthor[];
}
