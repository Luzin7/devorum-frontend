import { TOPICS_ENDPOINT } from 'env/api';
import httpClient from '../../axios-conf';
import { NewTopicProps, TopicPreviewProps, TopicProps } from 'types/ITopic';
import { UUID } from 'crypto';
import { ZodError } from 'zod';

export async function getTopics(): Promise<TopicPreviewProps[]> {
  try {
    const { data } = await httpClient.get(TOPICS_ENDPOINT);

    return data.topics;
  } catch (error) {
    throw new Error('Erro ao buscar as perguntas', error as ErrorOptions);
  }
}

export async function getTopicById(id: UUID): Promise<TopicProps> {
  try {
    const { data } = await httpClient.get(`${TOPICS_ENDPOINT}/${id}`);

    return data.topic;
  } catch (error) {
    throw new Error('Erro ao buscar a pergunta', error as ErrorOptions);
  }
}

export async function createTopic(
  data: Pick<NewTopicProps, 'title' | 'content' | 'author'>
): Promise<void> {
  const { author, content, title } = data;
  try {
    await httpClient.post(TOPICS_ENDPOINT, {
      author,
      content,
      title
    });
  } catch (error) {
    throw new Error('Erro ao publicar tópico', error as ZodError);
  }
}
