import { type ReactElement, useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { HOME, LOGIN, ROOT } from '../utils/routePaths';
import { UserDataContext } from '../contexts/userData';

export const PrivateRoutes = (): ReactElement => {
  const { isUserLoggedIn } = useContext(UserDataContext);
  const currentLocation = useLocation().pathname;

  return !isUserLoggedIn ? (
    <>
      <Navigate to={LOGIN} />
      <Outlet />
    </>
  ) : currentLocation === ROOT ? (
    <Navigate to={HOME} />
  ) : (
    <Outlet />
  );
};
