import type { Router as RemixRouter } from '@remix-run/router'
import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { LoginRoutes } from './modules/LogIn/routes.tsx';
import { useNotification } from './shared/hooks/useNotification.ts';
import { LandingPageRoutes } from './modules/LandingPage/routes.tsx';
import { HomeRoutes } from './modules/Home/routes.tsx';
import { verifyLogin } from './shared/functions/connection/auth.ts';
import { useGlobalContext } from './shared/hooks/useGlobalContext.tsx';
import { SignupRoutes } from './modules/SignUp/routes.tsx';
import { ProfileRoutes } from './modules/Profile/routes.tsx';
import { MedicationRoutes } from './modules/Medication/routes.tsx';
import { ConfirmationRoutes } from './modules/ConfirmMedication/routes.tsx';
import { AddProfileRoutes } from './modules/Profile/pages/addProfile/routes.tsx';
import { EditProfileRoutes } from './modules/Profile/pages/editProfile/routes.tsx';

function App() {
  const { contextHolder } = useNotification();
  const { user, setUser } = useGlobalContext();

  const routes: RouteObject[] = [...LandingPageRoutes, ...LoginRoutes, ...SignupRoutes,];
  const routesLoggedIn: RouteObject[] = [...ProfileRoutes, ...AddProfileRoutes, ...EditProfileRoutes, ...HomeRoutes, ...MedicationRoutes, ...ConfirmationRoutes].map((route) => ({
    ...route,
    loader: () => verifyLogin(setUser, user),
  }));
  const router: RemixRouter = createBrowserRouter([...routes, ...routesLoggedIn]);

  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
