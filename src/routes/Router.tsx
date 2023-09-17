import { Navigate, createBrowserRouter } from 'react-router-dom';

import {
  HOME,
  LOGIN,
  QUESTION,
  REGISTER,
  ROOT,
  ABOUT_US,
  USER_PROFILE,
  CREATE_QUESTION,
  ABOUT_PROJECT,
} from '../utils/routePaths';
import { ErrorPage } from '../components/ErrorPage/ErrorPage';
import { PrivateRoutes } from '../helpers/privateRoutes';
import { Layout } from '../components/Layout/Layout';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Question from '../components/Question';
import AboutUs from '../pages/AboutUs';
import { Profile } from '../pages/Profile';
import Form from '../components/FormQuestion';
import AboutProject from '../pages/AboutProject';

const router = createBrowserRouter([
  {
    path: ROOT,
    element: <Navigate to={HOME} replace />,
    errorElement: <ErrorPage />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: HOME,
        element: <Home />,
      },
      {
        path: QUESTION,
        children: [
          {
            path: ':questionId',
            element: <Question />,
          },
        ],
      },
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: USER_PROFILE,
            element: <Profile />,
          },
          {
            path: CREATE_QUESTION,
            element: <Form />,
          },
        ],
      },
      {
        path: ABOUT_US,
        element: <AboutUs />,
      },
      {
        path: ABOUT_PROJECT,
        element: <AboutProject />,
      },
    ],
  },
  { path: REGISTER, element: <Register /> },
  { path: LOGIN, element: <Register /> },
]);

export default router;
