import { UUID } from 'crypto';
import { deleteTopic } from 'services/http/requests/api';
import { ZodError } from 'zod';

export const deleteUserTopic = async (topicId: UUID) => {
  try {
    await deleteTopic(topicId);
  } catch (error) {
    throw new Error('Não foi possível apagar o tópico', error as ZodError);
  }
};
