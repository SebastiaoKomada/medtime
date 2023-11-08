import { RouteObject } from "react-router-dom";
import LogIn from ".";

export enum LoginRoutesEnum {
    LOGIN ='/logIn'
  }  

export const LoginRoutes: RouteObject[] =[
    {
        path: LoginRoutesEnum.LOGIN,
        element: <LogIn/>
    }
];