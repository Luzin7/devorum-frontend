import { redirect } from 'next/navigation';
import { refreshSession } from 'services/http/requests/api';
import httpClient from 'services/http/requests/axios-conf';
import { useUserStore } from 'store/user';
import { REGISTER } from 'utils';

export function hasAuthCookies(cookies: string[]) {
  return (
    cookies.filter(
      (cookie) =>
        cookie.includes('refresh-token') || cookie.includes('acess-token')
    ).length >= 1
  );
}

export function CheckAuth(cookies: string[]) {
  const { actions } = useUserStore();
  if (!hasAuthCookies(cookies)) {
    return redirect(REGISTER);
  }

  for (const cookie of cookies) {
    const [name, value] = cookie.split('=');

    if (!value) {
      return redirect(REGISTER);
    }

    if (name === 'acess-token') {
      httpClient.defaults.headers.Authorization = value;
    }

    if (name === 'refresh-token') {
      httpClient.defaults.headers.refresh_token = value;
    }
  }

  refreshSession().then((data) =>
    actions.updateUser({
      name: data?.name,
      notifications: data?.notifications,
      id: data?.id
    })
  );
  const lastFetchCacheKey = 'LAST_FETCH_CACHE_KEY';

  const currentTime = new Date().getTime();

  localStorage.setItem(lastFetchCacheKey, JSON.stringify(currentTime));
}
