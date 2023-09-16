import axios from 'axios';

import type Question from '../types/IQuestion';
import { API_URL_BASE, QUESTIONS_ENDPOINT } from '../utils/api';
import type Comment from '../types/IComment';

async function getQuestions(): Promise<Question[]> {
  try {
    const response = await axios.get(`${API_URL_BASE}${QUESTIONS_ENDPOINT}`);
    const data = response.data;

    const questionsArray = Array.isArray(data) ? data : [data];

    return questionsArray;
  } catch (error) {
    throw new Error('Erro ao buscar as perguntas');
  }
}

async function getQuestionById(questionId: string): Promise<Question> {
  try {
    const response = await axios.get(`${API_URL_BASE}/questions/${questionId}`);
    const data = response.data;

    return data;
  } catch (error) {
    throw new Error('Erro ao buscar as perguntas');
  }
}

async function getQuestionComments(questionId: string): Promise<Comment[]> {
  try {
    const response = await axios.get(`${API_URL_BASE}/comments/${questionId}`);
    const data = response.data;

    const questionsArray = Array.isArray(data) ? data : [data];

    return questionsArray;
  } catch (error) {
    throw new Error('Erro ao buscar comentários');
  }
}

export { getQuestions, getQuestionComments, getQuestionById };
