import { RouteObject } from "react-router-dom";

import AddProfile from '.';
import React from "react";

export enum AddProfileRoutesEnum {
  ADDPROFILE = '/addProfile'
}


export const AddProfileRoutes: RouteObject[] = [
    {
      path: AddProfileRoutesEnum.ADDPROFILE,
      element: <AddProfile />,
    },
  ];