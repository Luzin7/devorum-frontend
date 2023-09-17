import axios from 'axios';

import { API_URL_BASE, QUESTIONS_ENDPOINT } from '../../../../utils/api';
import { type questionProps } from '../schemas/questionSchema';

interface responseProps {
  success: boolean;
  message: string;
}

const questionSubmit = async (
  data: questionProps,
  userId: string,
): Promise<responseProps> => {
  const { userData } = data;

  try {
    const response = await axios.post(`${API_URL_BASE}${QUESTIONS_ENDPOINT}`, {
      author_id: userId,
      title: userData.title,
      question: userData.question,
    });

    if (response.status === 201) {
      return { success: true, message: 'Tópico publicado com sucesso!' };
    } else {
      return {
        success: false,
        message: 'Ocorreu um erro ao publicar o tópico.',
      };
    }
  } catch (error) {
    return {
      success: false,
      message: 'Ocorreu um erro interno.',
    };
  }
};

export default questionSubmit;
