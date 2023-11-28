import { useNavigate } from 'react-router-dom';
import { URL_PROFILE } from '../../shared/constants/urls';
import { useGlobalContext } from '../../shared/hooks/useGlobalContext';
import { useRequest } from '../../shared/hooks/useRequest';
import { HomeRoutesEnum } from '../Home/routes';
import { ERROR_SET_PROFILE } from '../../shared/constants/errorStatus';
import { ProfileType } from '../LogIn/types/UserType';
import { MethodsEnum } from '../../shared/enums/methods.enum';
import { useDataContext } from '../../shared/hooks/useDataContext';
import { useEffect } from 'react';
import { Row } from "antd";
import { Link } from "react-router-dom";
import "./index.css";
import { AddProfileRoutesEnum } from './pages/addProfile/routes';

const Profile = () => {
  const { user, setNotification } = useGlobalContext();
  const { setProfile } = useDataContext();
  const { request } = useRequest();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('perId');
  }, [])

  const handleAddButton = () => {
    navigate(AddProfileRoutesEnum.ADDPROFILE);
  }
  const handleProfileClick = async (perfilId: any): Promise<void> => {
    try {
      const result: ProfileType | undefined = await request(`${URL_PROFILE}/${perfilId}`, MethodsEnum.POST, setProfile);

      if (result !== undefined) {
        console.log(result);
        setProfile(result);
        localStorage.setItem('perId', result.perId.toString());
        navigate(HomeRoutesEnum.HOME);
      } else {
        setNotification("Perfil não encontrado", 'error');
      }
    } catch (error) {
      setNotification(ERROR_SET_PROFILE, 'error');
    }
  };

  return (
    <div className="container__profile">
      <h1 className='title__profile'>
        Quem é o paciente?
      </h1>

      <div className="card-container__profile">

        {user?.perfis.map((perfil) => (

          <div className='format__profile'>
            <a onClick={() => handleProfileClick(perfil.perId)}>
              <img
                className="btn-img__profile"
                src={perfil.perImagem}
                alt={`Profile ${perfil.perNome}`}
              />
              <h1 className='name__profile'>{perfil.perNome}</h1>
            </a>
          </div>
        ))}

        <div className='format__profile'>
          <Link to="/addProfile">

            <button
              className="btn-plus__profile"
              onClick={handleAddButton}
            >
              +
            </button>
            <h1 className='name__profile'>adicionar</h1>
          </Link>

        </div>

      </div>

    </div>
  )
}

export default Profile;
