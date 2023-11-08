import { RouteObject } from "react-router-dom";
import LandingPage from ".";
import ErrorPage from "../../shared/components/errorPage";


export const LandingPageRoutes: RouteObject[] =[
    {
        path: '/',
        element: <LandingPage/>,
        errorElement: <ErrorPage />,
    }
];