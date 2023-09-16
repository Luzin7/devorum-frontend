import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import router from './routes/Router';
import { UserDataProvider } from './contexts/userData';
import { theme } from './styles/theme';

const queryClient = new QueryClient();

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <UserDataProvider>
          <RouterProvider router={router} />
        </UserDataProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
