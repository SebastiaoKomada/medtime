import { RouteObject } from "react-router-dom";

import EditProfile from '.';
import React from "react";

export enum EditProfileRoutesEnum {
  EDITPROFILE = '/editProfile'
}


export const EditProfileRoutes: RouteObject[] = [
    {
      path: EditProfileRoutesEnum.EDITPROFILE,
      element: <EditProfile />,
    },
  ];