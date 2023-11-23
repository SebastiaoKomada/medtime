import "./styles/index.css";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../shared/components/navBar";
import { useEffect } from "react";
import { getAuthorizationToken, unsetAuthorizationToken } from "../../shared/functions/connection/auth";
import { connectionAPIGet } from "../../shared/functions/connection/connectionAPI";
import { URL_USER } from "../../shared/constants/urls";
import { LandingRoutesEnum } from "./routes";
import { ProfileRoutesEnum } from "../Profile/routes";
import { Card, Col, Row } from 'antd';


import React from "react";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      const token = getAuthorizationToken();
      if (token) {
        await connectionAPIGet(URL_USER).then(() => {
          navigate(ProfileRoutesEnum.PROFILE);
        }).catch(() => {
          unsetAuthorizationToken();
          navigate(LandingRoutesEnum.LANDING_PAGE);
        })
      } else {
        navigate(LandingRoutesEnum.LANDING_PAGE);
      }
    }
    verifyToken();
  }, [])

  return (

    
    <div className="container__landingPage">
          
          <NavBar />

        
<div role="status" className="md:flex md:items-center">
    <div className="w-full">
    <div className="contentLeft__landingPage ml-9 mt-5">
        <h1>Sendo a sua</h1>
        <h2> memória </h2>
        <p>Cadastre-se para fazer parte.</p>
        <button className="buttonSignup__landingPage"><Link to="/signUp">Cadastre-se</Link></button>
    </div>
    </div>
    <div className="flex items-center justify-center   w-full h-100">
        <img src="true.png" className="imagem"/>
    </div>
</div>



          <div className="ondas">
            <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path className="wave-3" fill="#228aa4" fill-opacity="1" d="M0,256L60,261.3C120,267,240,277,360,272C480,267,600,245,720,202.7C840,160,960,96,1080,101.3C1200,107,1320,181,1380,218.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
              <path className="wave-2" fill="#11acd3" fill-opacity="1" d="M0,96L34.3,90.7C68.6,85,137,75,206,90.7C274.3,107,343,149,411,149.3C480,149,549,107,617,106.7C685.7,107,754,149,823,144C891.4,139,960,85,1029,74.7C1097.1,64,1166,96,1234,106.7C1302.9,117,1371,107,1406,101.3L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
              <path className="wave-1" fill="#00BEF0" fill-opacity="1" d="M0,128L34.3,160C68.6,192,137,256,206,250.7C274.3,245,343,171,411,160C480,149,549,203,617,208C685.7,213,754,171,823,138.7C891.4,107,960,85,1029,106.7C1097.1,128,1166,192,1234,213.3C1302.9,235,1371,213,1406,202.7L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
            </svg>
          </div>  
        <section className="conteudo">
          <br />

       <div className="conteudo">
       <Row gutter={16}>
    <Col span={8}>
      <Card title="Auxiliando sempre" bordered={false} className="card">
      <img src='remedio.png' alt="alien" className="relogio" />
      <p className="inf"> Tomar os medicamentos no horario correto é a chave para um tratamento com eficacia</p>
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Nunca se esqueça" bordered={false} className="card">
      <img src='relogio.png' alt="alien" className="relogio" />
      <p className="inf"> Sempre estando com você para que não se esqueça qual remedio deve tomar e seu horário</p>
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Em conjunto com a familia" bordered={false} className="card">
      <img src='cuidando.png' alt="alien" className="relogio" />
      <p className="inf"> Ajudando toda a familia ao mesmo tempo, servindo tanto para avó quanto para o filho</p>
     
      </Card>
    </Col>
  </Row>
      </div>
          {/* <div className="util">
            <img src='pontual.png' alt="alien" className="relogio" />
            <p className="descri">Auxiliando você para que não perca os horarios </p>
          </div>

          <div className="util">
            <img src='remedio.png' alt="alien" className="relogio" />
            <p className="descri">Não deixando com que você esqueça de tomar os medicamentos</p>
          </div>
          <div className="util">
            <img src='cuidando.png' alt="alien" className="relogio" />
            <p className="descri">Ajudando nos cuidados com a familia inteira</p>
          </div> */}
        </section>
    </div>
  )
}

export default LandingPage;
