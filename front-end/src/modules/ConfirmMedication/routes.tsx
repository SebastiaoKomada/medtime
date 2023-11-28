import { RouteObject } from "react-router-dom";
import ConfirmMedication from ".";

export enum confirmationRoutesEnum {
    CONFIRMATION ='/confirmation'
  }  

export const ConfirmationRoutes: RouteObject[] =[
    {
        path: confirmationRoutesEnum.CONFIRMATION,
        element: <ConfirmMedication/>
    }
];