import { Comment } from "types/IComments";
import httpClient from "../../axios-conf";
import { ZodError } from "zod";
import { UUID } from "crypto";

export async function createComment(topicId: UUID, data: Pick<Comment, 'content'>): Promise<void> {
  const { content } = data
  try {
    await httpClient.post(
      `/topics/${topicId}/comments`,
      {
        content,
      },
    );

  } catch (error) {
    throw new Error('Erro ao publicar tópico', error as ZodError);
  }
}
