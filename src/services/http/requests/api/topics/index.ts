'use server';

import { UUID } from 'crypto';
import { TOPICS_ENDPOINT } from 'env/api';
import {
  NewTopicProps,
  TopicPreviewProps,
  TopicProps,
  UpdateTopicProps
} from 'types/ITopic';
import { ZodError } from 'zod';
import httpClient from '../../axios.config';

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
    console.log(error);
    throw new Error('Erro ao publicar tópico', error as ZodError);
  }
}

export async function updateTopic(data: UpdateTopicProps): Promise<void> {
  const { content, title, author, topicId } = data;

  try {
    await httpClient.put(`${TOPICS_ENDPOINT}/${topicId}`, {
      content,
      title,
      authorId: author
    });
  } catch (error) {
    throw new Error('Erro ao publicar tópico', error as ZodError);
  }
}

export async function deleteTopic(topicId: UUID): Promise<void> {
  try {
    await httpClient.delete(`${TOPICS_ENDPOINT}/${topicId}`);
  } catch (error) {
    console.log(error);
    throw new Error('Erro ao apagar tópico', error as ErrorOptions);
  }
}
