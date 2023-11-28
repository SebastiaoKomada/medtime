import { useState } from "react";
import { useGlobalContext } from "./useGlobalContext";
import ConnectionAPI, { MethodType, connectionAPIPost } from "../functions/connection/connectionAPI";
import { URL_AUTH } from "../constants/urls";
import { ERROR_INVALID_PASSWORD } from "../constants/errorStatus";
import { useNavigate } from "react-router-dom";
import { setAuthorizationToken } from "../functions/connection/auth";
import { AuthType } from "../../modules/LogIn/types/AuthType";
import { ProfileRoutesEnum } from "../../modules/Profile/routes";

export const useRequest = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { setNotification, setUser } = useGlobalContext();

    const request = async <T>(url: string, method: MethodType, saveGlobal?: (object: T) => void, body?: unknown): Promise<T | undefined> => {
        setLoading(true);
        const returnObject: T | undefined = await ConnectionAPI.connect<T>(url, method, body)
            .then((result) => {
                if (saveGlobal) {
                    saveGlobal(result);
                }
                return result;
            }).catch((error: Error) => {
                setNotification(error.message, 'error');
                return undefined;
            });
        return returnObject;
    };

    const createUserRequest = async <T>(url: string, body: unknown): Promise<T | undefined> => {
        setLoading(true);
        const returnData = await connectionAPIPost<T>(url, body)
            .then((result) => {
                setNotification('Conta criada com sucesso!', 'success');
                return result;
            }).catch(() => {
                setNotification('O E-mail já está sendo utilizado.', 'error');
                return undefined;
            });
        setLoading(false);
        return returnData;
    }

    const authRequest = async (body: unknown): Promise<void> => {
        setLoading(true);
        await connectionAPIPost<AuthType>(URL_AUTH, body)
            .then((result) => {
                setUser(result.user);
                setAuthorizationToken(result.accessToken);
                navigate(ProfileRoutesEnum.PROFILE);
                return result;
            }).catch(() => {
                setNotification(ERROR_INVALID_PASSWORD, 'error');
                return undefined;
            });

        setLoading(false);
    }

    return {
        loading,
        request,
        authRequest,
        createUserRequest
    }
}