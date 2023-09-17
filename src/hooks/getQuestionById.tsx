import { type UseQueryResult, useQuery } from 'react-query';

import type Question from '../types/IQuestion';
import { getQuestionById } from '../services/api';

export function useGetQuestionById(
  questionId?: string,
): UseQueryResult<Question> {
  return useQuery<Question>(['getQuestionById', questionId], async () => {
    if (questionId === undefined) {
      throw new Error('ID da pergunta não especificado');
    }
    const response = await getQuestionById(questionId);
    if (Array.isArray(response)) {
      return response[0];
    }
    return response;
  });
}
