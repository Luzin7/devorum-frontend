'use client'

import { CREATE_USER_ENDPOINT, LOGIN_ENDPOINT } from 'env/api';
import httpClient from '../../axios-conf';
import { userRegisterData } from 'schemas/register';
import { userLoginData } from 'schemas/login';
import { UserProps } from 'types/IUser';
type NewUserProps = userRegisterData;
type LoginProps = userLoginData;

export async function createUser(data: NewUserProps): Promise<void> {
  const { email, name, password } = data;

  try {
    await httpClient.post(CREATE_USER_ENDPOINT, {
      name,
      email,
      password
    });
  } catch (error) {
    throw new Error('Erro ao criar usuário');
  }
}

export async function getUserData(): Promise<UserProps> {
  try {
    const { data } = await httpClient.get('/users');

    const userSessionInfo = {
      account: [{id: data.user.userId, name: data.user.name}]
    }

    localStorage.setItem("isLoggedIn", 'true');
    localStorage.setItem("session_info-user", JSON.stringify(userSessionInfo));
    return data.user;
  } catch (error) {
    console.error('Erro na requisição:', error);
    localStorage.setItem("isLoggedIn", 'false');
    return error as UserProps;
  }
}

export async function login(data: LoginProps) {
  const { email, password } = data;

  try {
    await httpClient.post(
      LOGIN_ENDPOINT,
      {
        email,
        password
      },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        }
      }
    );

    const userData = await getUserData();

    return userData
  } catch (error) {
    console.error('Erro na requisição:', error);
  }
}
