import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';

import { UserDataProvider } from './contexts/userData';
import { theme } from './styles/theme';
import Index from './routes';

const queryClient = new QueryClient();

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <UserDataProvider>
          <Index />
        </UserDataProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
