import axios from 'axios';

import type UpdatePasswordProps from '../schemas';
import { API_URL_BASE, REGISTER_ENDPOINT } from '../../../../utils/api';

const handleNewPasswordSubmit = async (
  data: UpdatePasswordProps,
): Promise<object> => {
  const { userData } = data;

  try {
    const response = await axios.put(`${API_URL_BASE}${REGISTER_ENDPOINT}`, {
      password: userData.password,
    });

    if (response.status === 201) {
      return { success: true, message: 'Senha atualizada!' };
    } else {
      return {
        success: false,
        message: 'Ocorreu um erro ao atualizar senha.',
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error,
    };
  }
};

export default handleNewPasswordSubmit;
