
import {RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import type { Router as RemixRouter } from '@remix-run/router';

import React from 'react';
import { useGlobalContext } from './shared/hooks/useGlobalContext';
import { verifyLogin } from './shared/functions/connection/auth';
import { ConfirmationRoutes } from './routes/ConfirmMedication/routeConfirmation';
import { LandingPageRoutes } from './routes/LandingPage/routes';
import { MedicationRoutes } from './routes/Medication/routeMedication';
import { useNotification } from './shared/hooks/useNotification';
import { LoginRoutes } from './routes/LogIn/routes';
import { SignupRoutes } from './routes/SignUp/routes';
import { HomeRoutes } from './routes/Home/routeHome';
import { ProfileRoutes } from './routes/Profile/routes';
import "./index.css"
import { AddProfileRoutes } from './routes/Profile/pages/addProfile/routes';
import { EditProfileRoutes } from './routes/Profile/pages/editProfile/routes';

function App() {
  const { user, setUser } = useGlobalContext();
  const { contextHolder } = useNotification();

const routes: RouteObject[] = [
  ...LandingPageRoutes, 
  ...LoginRoutes, 
  ...SignupRoutes, 
  ...MedicationRoutes, 
  ...ConfirmationRoutes
];
  const routesLoggedIn: RouteObject[] = [
    ...ProfileRoutes,
    ...AddProfileRoutes,
    ...EditProfileRoutes,
    ...HomeRoutes
  ].map((route) => ({
    ...route,
    loader: () => verifyLogin(setUser, user),
  }));

  const router: RemixRouter = createBrowserRouter([...routes,...routesLoggedIn]);

  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}

export default App;

