import { useEffect } from "react";
import { useDataContext } from "../../shared/hooks/useDataContext";
import { useRequest } from "../../shared/hooks/useRequest";
import { MethodsEnum } from "../../shared/enums/methods.enum";
import { MedicationType } from "./types/MedicationType";
import { URL_GET_MEDICATION } from "../../shared/constants/urls";
import axios from "axios";

import "./index.css";
import SideBar from "../../shared/components/sideBar";
import Calendar from "../../shared/components/calendar";
import ProfileHome from "../../shared/components/profileHome";
import BottomNav from "../../shared/components/bottomNav";

const Home = () => {
  const { medication, setMedication } = useDataContext();
  const { request } = useRequest();

  useEffect(() => {
    request<MedicationType[]>(URL_GET_MEDICATION, MethodsEnum.GET, setMedication);

    navigator.serviceWorker.register('service-worker.js').then(async (serviceWorker) => {
      const publicKeyResponse = await axios.get('http://localhost:5005/notification/public_key');
      const subscription = await serviceWorker.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: publicKeyResponse.data.publicKey
      });
      await request('http://localhost:5005/notification/register', MethodsEnum.POST, undefined, {
        subscription,
      });
    })

  }, []);

  return (
    <div className="container__home clearfix">
      <div className="colunm-1__home">
        <SideBar />
      </div>
      <ProfileHome/>

      <div className="colunm-2__home">
        {medication.map((medication) => (
          <div className="card-list__home" key={medication.medId}>
            <a href="#" className="card-item__home">
              <div className="col-1__home">
                <h1 className="title__home">{medication.medNome}</h1>
                <h2 className="cont__home">Forma: {medication.medForma}</h2>
              </div>
              <div className="col-2__home">
                {medication.times.map((time) => {
                  const partes = time.horario.split(":");
                  const horarioFormatado = partes[0] + ":" + partes[1];
                  return (
                    <div className="horPd__home"  key={`${medication.medId}-${time.horId}`}>
                      <h2 className="hor__home">{horarioFormatado}</h2>
                    </div>
                  );
                })}
              </div>
            </a>
          </div>
        ))}
      </div>
      <div className="colunm-3__home">
        <div className="card__home">
        <div className="card-history__home">
        <Calendar/>
        </div>
        </div>
      </div>
      <BottomNav/>
    </div>

  );
};

export default Home;
