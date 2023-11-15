import { redirect } from 'react-router-dom';
import { LoginRoutesEnum } from '../../../routes/LogIn/routeLogin';
import { URL_USER } from '../../constants/urls';
import { AUTHORIZATION_KEY } from './../../constants/authorizationConstants';
import { getItemStorage, removeItemStorage, setItemStorage } from './storageProxy';
import { connectionAPIGet } from './connectionAPI';
import { UserType } from '../../types/UserTypes';

export const unsetAuthorizationToken = () => removeItemStorage(AUTHORIZATION_KEY);

export const setAuthorizationToken = (token?: string) => {
  if (token) {
    setItemStorage(AUTHORIZATION_KEY, token);
  }
};

export const verifyLoggedIn = async () => {
  const token = getAuthorizationToken();
  if (!token) {
    return redirect(LoginRoutesEnum.LOGIN);
  }
  const user = await connectionAPIGet<UserType>(URL_USER).catch(() => {
    unsetAuthorizationToken();
  });

  if (!user) {
    return redirect(LoginRoutesEnum.LOGIN);
  }

  return null;
};

export const getAuthorizationToken = () => getItemStorage(AUTHORIZATION_KEY);
