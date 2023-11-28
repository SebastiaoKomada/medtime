import { RouteObject } from "react-router-dom";
import Medication from ".";
import React from "react";

export enum medicationRoutesEnum {
    MEDICATION = '/medication'
}

export const MedicationRoutes: RouteObject[] = [
    {
        path: medicationRoutesEnum.MEDICATION,
        element: <Medication />
    }
];