import './App.css';

import {RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import type { Router as RemixRouter } from '@remix-run/router';

import React, { useEffect } from 'react';
 import { useRequest } from './shared/hooks/useRequest';
import { useGlobalContext } from './shared/hooks/useGlobalContext';
import { getAuthorizationToken, verifyLoggedIn } from './shared/functions/connection/auth';
import { MethodsEnum } from './shared/enums/methods.enum';
import { URL_USER } from './shared/constants/urls';
import { LoginRoutes } from './routes/LogIn/routeLogin';
import { ConfirmationRoutes } from './routes/ConfirmMedication/routeConfirmation';
import { LandingPageRoutes } from './routes/LandingPage/route';
import { MedicationRoutes } from './routes/Medication/routeMedication';
import { useNotification } from './shared/hooks/useNotification';

const routes: RouteObject[] = [...LoginRoutes];
const routesLoggedIn: RouteObject[] = [
  ...LandingPageRoutes,
  ...ConfirmationRoutes,
  ...MedicationRoutes
].map((route) => ({
  ...route,
  loader: verifyLoggedIn,
}));

const router: RemixRouter = createBrowserRouter([...routes, ...routesLoggedIn]);

function App() {
  const { user, setUser } = useGlobalContext();
  const { contextHolder } = useNotification();
  const { request } = useRequest();

  useEffect(() => {
    const token = getAuthorizationToken();
    if (token) {
      request(URL_USER, MethodsEnum.GET, setUser);
    }
  }, []);

  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}

export default App;

