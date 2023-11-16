import { useState } from 'react';

import ConnectionAPI, { MethodType, connectionAPIPost } from './../functions/connection/connectionAPI';
import { HomeRoutesEnum } from '../../routes/Home/routeHome';
import { useNavigate } from 'react-router-dom';
import { URL_AUTH } from '../constants/urls';
import { setAuthorizationToken } from '../functions/connection/auth';
import { useGlobalContext } from './useGlobalContext';
import { ERROR_CONNECTION } from '../constants/errorStatus';
import { AuthType } from '../../routes/LogIn/types/AuthType';

export const useRequest = () => {
  const navigate  = useNavigate()
  const { setNotification, setUser } = useGlobalContext();
  const [loading, setLoading] = useState(false);

  const request = async <T>(
    url: string,
    method: MethodType,
    saveGlobal?: (object: T) => void,
    body?: unknown,
    message?: string,
  ): Promise<T | undefined> => 
  {
    setLoading(true);

    const returnObject: T | undefined = await ConnectionAPI.connect<T>(url, method, body)
      .then((result) => {
        if (saveGlobal) {
          saveGlobal(result);
        }
        if (message) {
          setNotification('Sucesso!', 'success', message);
        }
        return result;
      })
      .catch((error: Error) => {
        setNotification(error.message, 'error');
        return undefined;
      });

    setLoading(false);

    return returnObject;
  };

  const authRequest = async (body: unknown): Promise<void> => {
    setLoading(true);

    await connectionAPIPost<AuthType>(URL_AUTH, body)
      .then((result) => {
        setUser(result.user);
        setAuthorizationToken(result.accessToken);
        navigate(HomeRoutesEnum.HOME);
        return result;
      })
      .catch(() => {
        setNotification(ERROR_CONNECTION, 'error');
        return undefined;
      });

    setLoading(false);
  };


  return {
    loading,
    authRequest,
    request,
  };
};
