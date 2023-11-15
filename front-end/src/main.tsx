import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { GlobalProvider } from './shared/hooks/useGlobalContext.tsx';

import App from './App.tsx';
import { DataProvider } from './shared/hooks/useDataContext.tsx';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <GlobalProvider>
    <DataProvider>
      <App />
    </DataProvider>
  </GlobalProvider>,
);
