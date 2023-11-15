import { RouteObject } from "react-router-dom";
import Home from ".";
import React from "react";

export enum HomeRoutesEnum {
    HOME ='/home'
  }  

export const HomeRoutes: RouteObject[] =[
    {
        path: HomeRoutesEnum.HOME,
        element: <Home/>
    }
];