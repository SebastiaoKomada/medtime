import './index.css';

import type { Router as RemixRouter } from '@remix-run/router';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouteObject, RouterProvider } from 'react-router-dom';

import LandingPage from './routes/LandingPage/index.tsx';
import ErrorPage from './shared/components/errorPage/index.tsx';
import { ConfirmationRoutes } from './routes/ConfirmMedication/routeConfirmation.tsx';
import { GlobalProvider } from './shared/hooks/useGlobalContext.tsx';
import { LoginRoutes } from './routes/LogIn/routeLogin.tsx';
import { LandingPageRoutes } from './routes/LandingPage/route.tsx';

const router: RemixRouter = createBrowserRouter([...LandingPageRoutes, ...ConfirmationRoutes, ...LoginRoutes]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  </React.StrictMode>,
);
