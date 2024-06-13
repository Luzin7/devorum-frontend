import {
  CURRENT_TIME_IN_MILLISECONDS,
  ONE_MINUTE_IN_MILLISECONDS
} from 'constants/times';
import { lastFetchCacheKey } from 'constants/variables';
import { NextRequest } from 'next/server';
import { getUserData, refreshSession } from 'services/http/requests/api';
import httpClient from 'services/http/requests/axios-conf';
import { useUserStore } from 'store/user';
import { setLocalStorage } from './setLocalStorage';

export async function checkSession(request: NextRequest) {
  try {
    console.log('Checking session');
    const fetchInterval = ONE_MINUTE_IN_MILLISECONDS * 5;
    const lastFetchTime = request.cookies.get(lastFetchCacheKey)?.value;
    const refreshCookieToken = request.cookies.get('@devorum/refreshToken');
    const accessCookieToken = request.cookies.get('@devorum/accessToken');

    const refreshToken = refreshCookieToken?.value;
    const accessToken = accessCookieToken?.value;

    if (!refreshToken || !accessToken) {
      throw new Error('Nenhum usuário autenticado.');
    }

    if (CURRENT_TIME_IN_MILLISECONDS - Number(lastFetchTime) >= fetchInterval) {
      httpClient.defaults.headers.Authorization = accessToken;
      httpClient.defaults.headers.refresh_token = refreshToken;

      await refreshSession();

      const updatedUserData = await getUserData();

      useUserStore.setState({
        userState: {
          user: {
            id: updatedUserData.id,
            name: updatedUserData.name,
            notifications: updatedUserData.notifications
          }
        }
      });

      setLocalStorage({
        storageKey: 'u_i',
        storageContent: {
          id: updatedUserData.id,
          name: updatedUserData.name
        }
      });

      return { newSession: true };
    }

    httpClient.defaults.headers.Authorization = accessToken;
    httpClient.defaults.headers.refresh_token = refreshToken;

    return { newSession: true };
  } catch (error) {
    console.error(error);
    return { newSession: false };
  }
}
