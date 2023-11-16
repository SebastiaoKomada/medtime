import { useNavigate } from 'react-router-dom';
import { URL_SET_PROFILE } from '../../shared/constants/urls';
import { useGlobalContext } from '../../shared/hooks/useGlobalContext';
import { useRequest } from '../../shared/hooks/useRequest';
import { ERROR_SET_PROFILE } from '../../shared/constants/errorStatus';
import { ProfileType } from '../LogIn/types/UserType';
import { HomeRoutesEnum } from '../Home/routeHome';
import React from 'react'; 
import { MethodsEnum } from '../../shared/enums/methods.enum';

const Profile = () => {
  const { user, setProfile , setNotification } = useGlobalContext();
  const { request } = useRequest();
  const navigate = useNavigate();

  const handleProfileClick = async (perfilId: any): Promise<void> => {
    try {
      const result: ProfileType | undefined = await request(`${URL_SET_PROFILE}/${perfilId}`, MethodsEnum.POST, setProfile);

      if (result !== undefined) {
        setProfile(result);
        navigate(HomeRoutesEnum.HOME);
      } else {
        setNotification("Perfil não encontrado", 'error');
      }
    } catch (error) {
      setNotification(ERROR_SET_PROFILE, 'error');
    }
  };

  return (
    <div>
      <h1>Perfis:</h1>
      <ul>
        {user?.perfis.map((perfil) => (
          <li key={perfil.perId}>
            <h2>Perfil {perfil.perId}</h2>
            <p>Nome: {perfil.perNome}</p>
            <p>Imagem: {perfil.perImagem}</p>
            <button onClick={() => handleProfileClick(perfil.perId)}>
              Selecionar
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Profile;
