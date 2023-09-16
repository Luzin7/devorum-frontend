import axios from 'axios';

import { type registerProps } from '../schemas';
import { API_URL_BASE, REGISTER_ENDPOINT } from '../../../../utils/api';

const handleRegisterSubmit = async (data: registerProps): Promise<object> => {
  const { userData } = data;

  try {
    const response = await axios.post(`${API_URL_BASE}${REGISTER_ENDPOINT}`, {
      name: userData.name,
      contact: userData.contact,
      password: userData.password,
    });

    if (response.status === 201) {
      return { success: true, message: 'Usuário registrado com sucesso!' };
    } else {
      return {
        success: false,
        message: 'Ocorreu um erro ao cadastrar o usuário.',
      };
    }
  } catch (error) {
    return {
      success: false,
      message: error,
    };
  }
};

export default handleRegisterSubmit;
