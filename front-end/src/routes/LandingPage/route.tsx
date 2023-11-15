import { RouteObject } from "react-router-dom";
import LandingPage from ".";
import ErrorPage from "../../shared/components/errorPage";
import React from "react";


export const LandingPageRoutes: RouteObject[] =[
    {
        path: '/',
        element: <LandingPage/>,
        errorElement: <ErrorPage />,
    }
];