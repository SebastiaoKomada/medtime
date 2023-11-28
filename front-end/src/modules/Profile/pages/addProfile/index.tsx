/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Row, Col, Input, Space } from "antd";
import "./index.css";
import ImageProfile from "../../../../shared/components/Image";
import { useRequest } from "../../../../shared/hooks/useRequest";
import { URL_PROFILE } from "../../../../shared/constants/urls";
import { MethodsEnum } from "../../../../shared/enums/methods.enum";
import { CreateProfileType } from "./types/ProfileType";
import { useNavigate } from "react-router-dom";
import { ProfileRoutesEnum } from "../../routes";


const AddProfile: React.FC = () => {
  const { request } = useRequest();
  const [inputValue, setInputValue] = useState<string>("");
  const [isDataEntered, setIsDataEntered] = useState<boolean>(false);
  const image = 'profile.png'
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsDataEntered(e.target.value.trim().length > 0);
  };

  const handleCreateProfile = () => {
    request<CreateProfileType>(URL_PROFILE, MethodsEnum.POST, undefined, {
      perNome: inputValue,
      perImagem: image
    }).then((result) => {
      if (result) {
        navigate(ProfileRoutesEnum.PROFILE);
        setTimeout(() => {
          window.location.reload();
        }, 1)
      }
    })
  }

  return (
    <div className="container__addProfile">
      <div className="card__addProfile ">
        <h1 className="title__addProfile ">Cadastrar perfil</h1>

        <div className="col-1__addProfile">
          <Col>
            <Space direction="vertical" align="center">
              <ImageProfile />
              <input
                className="input__addProfile"
                value={inputValue}
                onChange={handleInputChange}
              />
            </Space>
          </Col>
        </div>

        <hr />

        <div className="col-2__addProfile">
          <Col>
            <button
              type="button"
              className="btn-remove__addProfile "
              onClick={() => {
                navigate(ProfileRoutesEnum.PROFILE);
              }}
            >
              Cancelar
            </button>
          </Col>

          <button
            type="button"
            className={`btn-remove__addProfile ${isDataEntered
              ? ""
              : "disabled:opacity-50 disabled:cursor-not-allowed"
              }`}
            disabled={!isDataEntered}
            onClick={handleCreateProfile}
          >
            Salvar alterações
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProfile;
