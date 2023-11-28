import { RouteObject } from "react-router-dom";
import LandingPage from ".";
import ErrorPage from "../../shared/components/errorPage";

export enum LandingRoutesEnum {
    LANDING_PAGE = '/'
  }
  


export const LandingPageRoutes: RouteObject[] =[
    {
        path: LandingRoutesEnum.LANDING_PAGE,
        element: <LandingPage/>,
        errorElement: <ErrorPage />,
    }
];