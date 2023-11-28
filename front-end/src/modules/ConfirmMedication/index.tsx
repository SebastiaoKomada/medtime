import { useEffect, useState } from 'react';

import './index.css'

import { useRequest } from "../../shared/hooks/useRequest";
import { MethodsEnum } from "../../shared/enums/methods.enum";
import { MedicationType } from "../../modules/Home/types/MedicationType";
import { format } from "date-fns";
import { io } from "socket.io-client";
import { useGlobalContext } from '../../shared/hooks/useGlobalContext';


const ConfirmMedication = () => {
  const { request } = useRequest();
  const { setNotification } = useGlobalContext();

  const [currentTime, setCurrentTime] = useState(new Date());
  const [medicationData, setMedicationData] = useState<MedicationType | null>(null);

  const [horarioData, setHorarioData] = useState(null);
  const [horIdData, setHorIdData] = useState(null);
  const [medIdData, setMedIdData] = useState<number | null>(null);
  const [perIdData, setPerIdData] = useState<number | null>(null);

  useEffect(() => {
    const socket = io('http://localhost:5005');

    socket.emit('msgToServer', true);
    socket.on('notificacao', (data) => {
      console.log(data);
      request<MedicationType>(`http://localhost:5005/medication/${data.horMedId}`, MethodsEnum.GET, undefined).then((result) => {
        if (result) {
          console.log(result);
          setMedIdData(result.medId);
          setHorarioData(data.horario);
          setHorIdData(data.horId);
          setMedicationData(result);
          setPerIdData(result.medPerId);
          socket.disconnect();
        }
      });
    });

    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [])

  const getBackgroundColor = () => {
    const currentHour = currentTime.getHours();

    if (currentHour >= 6 && currentHour < 18) {
      return '#FFB347';
    } else {
      return 'darkblue';
    }
  };

  const getImageSource = () => {
    const currentHour = currentTime.getHours();

    if (currentHour >= 6 && currentHour < 18) {
      return '/sun.png';
    } else {
      return './moon.png';
    }
  };

  const handleConfirmation = () => {
    const dataAtual = new Date();
    const dataString = `${dataAtual.getFullYear()}-${(dataAtual.getMonth() + 1)}-${dataAtual.getDate()}`;
    console.log('medIdData:', medIdData);
    console.log('horIdData:', horIdData);
    console.log('perIdData:', perIdData);
    request(`http://localhost:5005/confirmation/${perIdData}/${medIdData}/${horIdData}`, MethodsEnum.POST, undefined, {
      conData: dataString,
    }).then((result) => {
      if (result) {
        setNotification('Confirmacao concluida!', 'success');
        setTimeout(() => {
          window.close();
        }, 1000);
      }
    })
  };

  return (
    <div className="container___confirmation">

      <div className='form-image' style={{ backgroundColor: getBackgroundColor() }}>
      <img src={getImageSource()} alt="Imagem do momento do dia" />
        <img src="" alt="" />
      </div>

      {medicationData && (
        <div className="form">
          <div className="form-header">
            <div className="title">
              <h1 className='name__confirmation'>{medicationData.medNome}</h1>
            </div>
          </div>
          <div className="info-group">
            <div className="info-box">
              <label>Data inicio </label>
              <h2>{format(new Date(medicationData.medDataInicio), 'dd/MM/yyyy')}</h2>
            </div>
            <div className="info-box">
              <label>Forma</label>
              <h2>{medicationData.medForma}</h2>
            </div>
            {medicationData.medDataFim == "" && (
              <div className="info-box">
                <label>Data final</label>
                <h2>{format(new Date(medicationData.medDataFim), 'dd/MM/yyyy')}</h2>
              </div>
            )}

            {horarioData && (
              <div className="info-box">
                <label >Hora</label>
                <h2>{horarioData}</h2>
              </div>
            )}
          </div>

          <div className="continue-button">
            <button onClick={handleConfirmation}>Confirmar
            </button>
          </div>

        </div>
      )}
    </div>
  );
};

export default ConfirmMedication;
