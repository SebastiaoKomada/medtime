
import "./index.css";

import React, { useEffect, useState } from 'react';

import { Button } from 'antd'
import { useRequest } from "../../shared/hooks/useRequest";
import { useDataContext } from "../../shared/hooks/useDataContext";
import { URL_GET_MEDICATION } from "../../shared/constants/urls";
import { MethodsEnum } from "../../shared/enums/methods.enum";
import { MedicationType } from "../../shared/types/MedicationType";


const ConfirmMedication = () => {
  const { medication, setMedication } = useDataContext();
  const { request } = useRequest();
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

  useEffect(() =>{
    request<MedicationType[]>(URL_GET_MEDICATION, MethodsEnum.GET, setMedication);
  },[])
  return (
    <div className="container___confirmation">
      {/* {confirmationData.map((info, index) => (
          <h1 key={index}>{info}</h1>
        ))} */}
      <div className="form-image">
        <img src="/sunshine.png" alt="" />
      </div>
      <div className="form">
        <div className="form-header">

          <div className="title">
          {medication.map((medication) => <h1 key={medication.medId}>{medication.medNome}</h1>)}
          </div>
        </div>

        <div className="info-group">
          <div className="info-box">
            <label>Data inicio </label>
            {medication.map((medication) => <h2 key={medication.medId}>{medication.medDataInicio}</h2>)}
          </div>

          <div className="info-box">
            <label>Forma</label>
            {medication.map((medication) => <h2 key={medication.medId}>{medication.MedForma}</h2>)}
          </div>

          <div className="info-box">
            <label>Data final</label>
            {medication.map((medication) => <h2 key={medication.medId}>{medication.medDataFim}</h2>)}
          </div>

          <div className="info-box">
            <label >Hora</label>
            <h2>15:00</h2>
          </div>
        </div>

        <div className="continue-button">
          <Button loading={loadings[0]} onClick={() => enterLoading(0)}>
            <a href="#">Confirmar</a>
          </Button>
        </div>

      </div>
    </div>
  );
};

export default ConfirmMedication;
