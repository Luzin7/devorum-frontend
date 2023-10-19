import httpClient from 'services/http/requests/axios-conf';
import { useUserStore } from 'store/user';
import { useMemo } from 'react';
import { CheckAuth, hasAuthCookies } from './checkAuth';

export function hasAcessAuthCookies(cookies: string[]) {
  return (
    cookies.filter((cookie) => cookie.includes('acess-token')).length === 1
  );
}

export function PersistAuth() {
  const ISSERVER = typeof window === 'undefined';

  if (!ISSERVER) {
    const cookies = document.cookie.split(';');
    if (
      httpClient.defaults.headers.Authorization !== undefined ||
      httpClient.defaults.headers.refresh_token !== undefined
    ) {
      return;
    }

    if (!hasAuthCookies(cookies)) {
      return;
    }

    for (const cookie of cookies) {
      const [name, value] = cookie.split('=');
      // ESSE CODIGO DA PODRE DE FEIO ARRUMA ISSO PELO AMOR DE DEUS
      // EVITA DEIXAR ESSA FUNCAO DEPENDENDO DE OUTRA

      if (!hasAcessAuthCookies(cookies)) {
        return CheckAuth(cookies);
      }

      if (name === 'acess-token') {
        httpClient.defaults.headers.Authorization = value;
      }
      if (name === 'refresh-token') {
        httpClient.defaults.headers.refresh_token = value;
      }
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { actions } = useUserStore();

    const userDataCached = JSON.parse(localStorage.getItem('u_i') as string)
      .account[0];

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useMemo(() => {
      actions.updateUser({
        name: userDataCached.name,
        id: userDataCached.id
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  }
}
