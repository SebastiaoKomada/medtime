import { URL_USER } from '../../constants/urls';
import { AUTHORIZATION_KEY } from './../../constants/authorizationConstants';
import { getItemStorage, removeItemStorage, setItemStorage } from './storageProxy';
import { connectionAPIGet } from './connectionAPI';
import { UserType } from '../../../routes/LogIn/types/UserType';

export const unsetAuthorizationToken = () => removeItemStorage(AUTHORIZATION_KEY);

export const setAuthorizationToken = (token?: string) => {
  if (token) {
    setItemStorage(AUTHORIZATION_KEY, token);
  }
};

export const verifyLogin = async(setUser:(user: UserType) => void, user?: UserType,) => {
  const token = getAuthorizationToken();
  if(!token){
      location.href = '/';
  }
  if(!user){
      await connectionAPIGet<UserType>(URL_USER).then((userReturn) => {
          setUser(userReturn);
      }).catch(() => {
          unsetAuthorizationToken();
          location.href = '/';
      });
  }
  return null;
}

export const getAuthorizationToken = () => getItemStorage(AUTHORIZATION_KEY);
