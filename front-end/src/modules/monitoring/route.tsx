import { RouteObject } from "react-router-dom";
import Monitoring from ".";
import React from "react";

export enum monitoringRoutesEnum {
    MONITORING = '/monitoring'
}

export const MonitoringRoutes: RouteObject[] = [
    {
        path: monitoringRoutesEnum.MONITORING,
        element: <Monitoring />
    }
];