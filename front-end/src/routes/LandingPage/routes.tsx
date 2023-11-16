import { RouteObject } from "react-router-dom";
import LandingPage from ".";
import ErrorPage from "../../shared/components/errorPage";
import React from "react";

export enum landingRoutesEnum {
    LANDING_PAGE ='/'
  }  

export const LandingPageRoutes: RouteObject[] =[
    {
        path: landingRoutesEnum.LANDING_PAGE,
        element: <LandingPage/>,
        errorElement: <ErrorPage />,
    }
];