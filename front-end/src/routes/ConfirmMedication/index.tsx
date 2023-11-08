import "./index.sass";

import { useEffect, useState} from 'react';

import { Button } from 'antd'
import { useRequest } from "../../shared/hooks/useRequest";


const ConfirmMedication = () => {
  const { getRequest, postRequest } = useRequest();
  const [loadings, setLoadings] = useState<boolean[]>([]);

  const enterLoading = (index: number) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 1000);
  };

  const getData = async () => {
    getRequest('http://localhost:5005/medication');
  };

  const postData = () => {
    postRequest('http://localhost:5005/confirmation/1/1', { conData: '2023-11-23' });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="containerCon">
      {/* {confirmationData.map((info, index) => (
          <h1 key={index}>{info}</h1>
        ))} */}
        <div className="form-image">
          <img src="/sunshine.png" alt=""/>
        </div>
        <div className="form">
          <div className="form-header">

            <div className="title">
              <h1>Omeprazol</h1>
            </div>
          </div>

          <div className="info-group">
            <div className="info-box">
              <label>Data inicio </label>
              <h2>30/10/2023</h2>
            </div>

            <div className="info-box">
              <label>Forma</label>
              <h2>Comprimido</h2>
            </div>

            <div className="info-box">
              <label>Data final</label>
              <h2>30/10/2024</h2>
            </div>

            <div className="info-box">
              <label >Hora</label>
              <h2>15:00</h2>
            </div>
          </div>

          <div className="continue-button">
            <Button loading={loadings[0]} onClick={(postData) => enterLoading(0)}>
              <a href="#">Confirmar</a>
            </Button>
          </div>
          
        </div>
    </div>
  );
};

export default ConfirmMedication;
