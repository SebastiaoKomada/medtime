import { RouteObject } from "react-router-dom";
import ConfirmMedication from ".";
import React from "react";

export enum confirmationRoutesEnum {
    CONFIRMATION ='/confirmation'
  }  

export const ConfirmationRoutes: RouteObject[] =[
    {
        path: confirmationRoutesEnum.CONFIRMATION,
        element: <ConfirmMedication/>
    }
];