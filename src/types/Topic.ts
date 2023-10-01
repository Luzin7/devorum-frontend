export interface Topic {
  id: string;
  authorId: string;
  authorName: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date | null;
}
