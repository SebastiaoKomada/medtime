import { RouteObject } from "react-router-dom";

import Signup from './index';

export enum SignupRoutesEnum {
  SIGNUP = '/signup'
}


export const SignupRoutes: RouteObject[] = [
    {
      path: SignupRoutesEnum.SIGNUP,
      element: <Signup />,
    },
  ];