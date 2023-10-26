import { RouteObject } from "react-router-dom";
import ConfirmMedication from ".";


export const ConfirmationRoutes: RouteObject[] =[
    {
        path: '/confirmation',
        element: <ConfirmMedication/>
    }
];