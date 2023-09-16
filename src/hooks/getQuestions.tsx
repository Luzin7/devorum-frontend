import { type UseQueryResult, useQuery } from 'react-query';

import type Question from '../types/IQuestion';
import { getQuestions } from '../services/api';

export function useFetchQuestions(): UseQueryResult<Question[]> {
  return useQuery<Question[]>('fetchQuestion', getQuestions);
}
