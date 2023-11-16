import { RouteObject } from "react-router-dom";

import Login from './index';

export enum LoginRoutesEnum {
  LOGIN = '/login'
}


export const LoginRoutes: RouteObject[] = [
    {
      path: LoginRoutesEnum.LOGIN,
      element: <Login />,
    },
  ];