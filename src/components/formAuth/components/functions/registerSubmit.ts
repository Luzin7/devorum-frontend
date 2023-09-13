import axios from 'axios';

import { type registerProps } from '../schemas';
import { API_URL_BASE, REGISTER_ENDPOINT } from '../../../../utils/api';

const handleRegisterSubmit = async (data: registerProps): Promise<void> => {
  const { userData } = data;
  console.log('chegou no registro api');
  console.log(userData);

  try {
    await axios.post(`${API_URL_BASE}${REGISTER_ENDPOINT}`, {
      name: userData.name,
      contact: userData.contact,
      password: userData.password,
    });
  } catch (error) {
    console.log(error);
  }
};

export default handleRegisterSubmit;
