import { type ReactElement } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { HOME, REGISTER } from '../utils/routePaths';

export const PrivateRoutes = (): ReactElement => {
  const location = useLocation();
  const currentLocation = location.pathname;
  const isUserLoggedIn = true;
  // const { isUserLoggedIn } = useContext(UserDataContext);
  if (!isUserLoggedIn) {
    return <Navigate to={REGISTER} />;
  }

  if (isUserLoggedIn) {
    if (currentLocation === '/') {
      return <Navigate to={HOME} />;
    }
    return <Outlet />;
  }

  return <>Erro interno</>;
};
