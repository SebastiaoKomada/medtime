/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Row, Col, Input, Space } from "antd";
import "./styles.css";
import ImageProfile from "../../../../shared/components/Image";

interface Props { }

const AddProfile: React.FC<Props> = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isDataEntered, setIsDataEntered] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    // Verificar se os dados foram inseridos
    setIsDataEntered(e.target.value.trim().length > 0);
  };

  return (
    <div className="container__addProfile">
      <div className="form-container bg-white mt-4 bg-shadow pl-48 pr-48 pb-4 shadow-xl rounded-md flex flex-col mx-auto">
        <h1 className="title text-3xl font-bold mb-4 ">Cadastrar perfil</h1>
        <Row justify="center" align="middle">
          <Col>
            <Space direction="vertical" align="center">
              <ImageProfile />
              <Input
                className="input-name w-96 h-10 border-2 border-sky-600 text-lg text-center font-bold"
                value={inputValue}
                onChange={handleInputChange}
              />
            </Space>
          </Col>
        </Row>
        <hr className="border-t-2 border-gray-500 mt-4" />

        <Row className="btn-functions" justify="center">
          <Col>
            <button
              type="button"
              className="btn-remove text-white bg-sky-600 hover:bg-sky-700 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 "
            >
              Cancelar
            </button>
          </Col>

          <Col>
            <button
              type="button"
              className={`btn-removebtn-remove text-white bg-sky-600 hover:bg-sky-700 font-medium rounded-lg text-lg px-5 py-2.5 me-2 mb-2 ${isDataEntered
                  ? ""
                  : "disabled:opacity-50 disabled:cursor-not-allowed"
                }`}
              disabled={!isDataEntered}
            >
              Salvar alterações
            </button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AddProfile;
