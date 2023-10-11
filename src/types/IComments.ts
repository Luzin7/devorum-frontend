export interface Comment {
  topicId: string;
  authorId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date | null;
}
