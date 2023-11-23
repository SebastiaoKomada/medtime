import { RouteObject } from "react-router-dom";

import Profile from '.';
import React from "react";

export enum ProfileRoutesEnum {
  PROFILE = '/profile'
}


export const ProfileRoutes: RouteObject[] = [
    {
      path: ProfileRoutesEnum.PROFILE,
      element: <Profile />,
    },
  ];