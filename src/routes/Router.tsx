import { createBrowserRouter } from 'react-router-dom';

import { HOME, ROOT } from '../utils/routePaths';
import { ErrorPage } from '../components/ErrorPage/ErrorPage';
import { PrivateRoutes } from '../helpers/privateRoutes';
import { Layout } from '../components/Layout/Layout';
import Home from '../pages/Home';

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
      // {
      //   path: QUESTION,
      //   element: <Layout />,
      //   children: [
      //     {
      //       path: ':id/:username',
      //       element: <Question />,
      //     },
      //   ],
      // },
      // { path: REGISTER, element: <Register /> },
      // { path: LOGIN, element: <Login /> },
    ],
  },
]);

export default router;
