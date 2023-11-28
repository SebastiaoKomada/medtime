import { RouteObject } from "react-router-dom";
import Medication from ".";

export enum medicationRoutesEnum {
    MEDICATION = '/medication'
}

export const MedicationRoutes: RouteObject[] = [
    {
        path: medicationRoutesEnum.MEDICATION,
        element: <Medication />
    }
];