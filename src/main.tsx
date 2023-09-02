import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { RouterProvider } from 'react-router-dom';

import router from './routes/Router';
import { UserDataProvider } from './contexts/userData';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserDataProvider>
      <RouterProvider router={router} />
    </UserDataProvider>
  </React.StrictMode>,
);
