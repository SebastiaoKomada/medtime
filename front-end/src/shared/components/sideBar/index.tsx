import { Link } from "react-router-dom"; // Importe Link se estiver usando React Router
import "./style/index.css";
import { FaPills } from "react-icons/fa";
import { PiUserSwitchFill } from "react-icons/pi";
import { useEffect, useState } from "react";
import { useRequest } from "../../hooks/useRequest";
import { ProfileType } from "../../../modules/LogIn/types/UserType";
import { URL_PROFILE } from "../../constants/urls";
import { MethodsEnum } from "../../enums/methods.enum";

const SideBar = () => {
  const { request } = useRequest();
  const [perIdData, setPerIdData] = useState('');

  useEffect(() => {
    const perId = localStorage.getItem('perId');
    request<ProfileType>(`${URL_PROFILE}/${perId}`, MethodsEnum.POST, undefined).then((result) => {
      if(result) {
        setPerIdData(result.perNome);
      }
    })
  }, [])
  return (

    <aside className="sidebar">
      <div className="logo">
        <img src="img-2.jpg" alt="logo" />
        {perIdData && (
        <h2>{perIdData}</h2>
        )}
      </div>
      <ul className="links">
        <li>
          <div className="icon">
            <FaPills size={40}/>
          </div>
          <Link to="/medication">Medicação</Link>
        </li>
        <li>
          <div className="icon">
            <PiUserSwitchFill size={40} color="red"/>
          </div>
          <Link to="/profile">Trocar de Perfil</Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
