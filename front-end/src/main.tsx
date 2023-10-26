import './index.css';

import type { Router as RemixRouter } from '@remix-run/router';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import App from './App.tsx';
import ErrorPage from './modules/components/errorPage/index.tsx';
import { ConfirmationRoutes } from './modules/routes/ConfirmMedication/routeConfirmation.tsx';
import { GlobalProvider } from './shared/hooks/useGlobalContext.tsx';

const mainRoutes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
];
const router: RemixRouter = createBrowserRouter([...mainRoutes, ...ConfirmationRoutes]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  </React.StrictMode>,
);
