import { createBrowserRouter } from 'react-router-dom';

import {
  HOME,
  LOGIN,
  QUESTION,
  REGISTER,
  ROOT,
  ABOUT_US,
  ABOUT_PROJECT,
} from '../utils/routePaths';
import { ErrorPage } from '../components/ErrorPage/ErrorPage';
import { PrivateRoutes } from '../helpers/privateRoutes';
import { Layout } from '../components/Layout/Layout';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Question from '../components/Question';
import AboutUs from '../pages/AboutUs';
import AboutProject from '../pages/AboutProject';

const router = createBrowserRouter([
  {
    path: ROOT,
    element: <PrivateRoutes />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: HOME,
        element: <Layout />,
        children: [
          {
            path: '',
            element: <Home />,
          },
        ],
      },
      {
        path: ABOUT_US,
        element: <Layout />,
        children: [
          {
            path: '',
            element: <AboutUs />,
          },
        ],
      },
      {
        path: ABOUT_PROJECT,
        element: <Layout />,
        children: [
          {
            path: '',
            element: <AboutProject />,
          },
        ],
      },
      {
        path: QUESTION,
        element: <Layout />,
        children: [
          {
            path: ':questionId',
            element: <Question />,
          },
        ],
      },
      { path: REGISTER, element: <Register /> },
      { path: LOGIN, element: <Register /> },
    ],
  },
]);

export default router;
