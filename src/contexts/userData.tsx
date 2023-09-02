import { type ReactElement, createContext, useState } from 'react';

import { type PublicUserProps } from '../types/IUser';

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

  return (
    <UserDataContext.Provider
      value={{ userData, setUserData, isUserLoggedIn, setIsUserLoggedIn }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
