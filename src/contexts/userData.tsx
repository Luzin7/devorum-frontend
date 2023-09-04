import { type ReactElement, createContext, useState } from 'react';

import { type PublicUserProps } from '../types/IUser';

const isUserThemeDark = window.matchMedia(
  '(prefers-color-scheme: dark)',
).matches;
const userTheme = localStorage.getItem('userTheme');
interface ProviderProp {
  children: React.ReactNode;
}

const initialUser: PublicUserProps = {
  name: '',
  contact: '',
  questions: [],
};

export const UserDataContext = createContext<{
  userData: PublicUserProps;
  setUserData: React.Dispatch<React.SetStateAction<PublicUserProps>>;
  isUserLoggedIn: boolean;
  setIsUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  userData: initialUser,
  setUserData: () => {},
  isUserLoggedIn: false,
  setIsUserLoggedIn: () => {},
});

export const UserDataProvider = ({ children }: ProviderProp): ReactElement => {
  const [userData, setUserData] = useState<PublicUserProps>(initialUser);
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
