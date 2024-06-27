'use server';

import { UUID } from 'crypto';
import { deleteComment } from 'services/http/requests/api';
import { ZodError } from 'zod';

export const deleteUserComment = async (topicId: UUID, commentId: UUID) => {
  try {
    await deleteComment(topicId, commentId);
  } catch (error) {
    throw new Error('Não foi possível apagar o comentário', error as ZodError);
  }
};
