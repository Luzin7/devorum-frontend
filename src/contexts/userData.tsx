import { type ReactElement, createContext, useState } from 'react';

import { type User } from '../types';

const isUserThemeDark = window.matchMedia(
  '(prefers-color-scheme: dark)',
).matches;
const userTheme = localStorage.getItem('userTheme');
const userInfo = localStorage.getItem('l_storage.user_info');

interface ProviderProp {
  children: React.ReactNode;
}

const initialUser: User = {
  id: '',
  name: '',
  contact: '',
  questions: [],
};

const prevUserInfo = (): User => {
  if (userInfo !== null && userInfo !== undefined) {
    return JSON.parse(userInfo);
  } else {
    return initialUser;
  }
};

export const UserDataContext = createContext<{
  userData: User;
  setUserData: React.Dispatch<React.SetStateAction<User>>;
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  userData: prevUserInfo(),
  setUserData: () => {},
  isUserLoggedIn: false,
  setIsUserLoggedIn: () => {},
});

export const UserDataProvider = ({ children }: ProviderProp): ReactElement => {
  const [userData, setUserData] = useState(prevUserInfo);
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(isLoggedIn);

  if (isUserThemeDark) {
    userTheme === null && localStorage.setItem('userTheme', 'dark');
    userTheme !== 'dark' && userTheme !== null
      ? document.documentElement.setAttribute('theme', 'light')
      : document.documentElement.setAttribute('theme', 'dark');
  } else {
    userTheme === null && localStorage.setItem('userTheme', 'light');
    userTheme !== 'light' && userTheme !== null
      ? document.documentElement.setAttribute('theme', 'dark')
      : document.documentElement.setAttribute('theme', 'light');
  }

  return (
    <UserDataContext.Provider
      value={{ userData, setUserData, isUserLoggedIn, setIsUserLoggedIn }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
