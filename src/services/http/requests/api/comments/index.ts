import { UUID } from 'crypto';
import { Comment } from 'types/IComments';
import { ZodError } from 'zod';
import httpClient from '../../axios-conf';

export async function createComment(
  topicId: UUID,
  data: Pick<Comment, 'content'>
): Promise<void> {
  const { content } = data;
  try {
    await httpClient.post(`/topics/${topicId}/comments`, {
      content
    });
  } catch (error) {
    throw new Error('Erro ao criar comentário', error as ZodError);
  }
}

export async function deleteComment(
  topicId: UUID,
  commentId: UUID
): Promise<void> {
  try {
    await httpClient.delete(`/topics/${topicId}/comments/${commentId}`);
  } catch (error) {
    throw new Error('Erro ao remover comentário', error as ZodError);
  }
}
