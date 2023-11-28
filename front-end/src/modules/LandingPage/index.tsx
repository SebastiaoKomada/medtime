import "./styles/index.css";
import "../../index.css";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../shared/components/navBar";
import { useEffect } from "react";
import { getAuthorizationToken, unsetAuthorizationToken } from "../../shared/functions/connection/auth";
import { connectionAPIGet } from "../../shared/functions/connection/connectionAPI";
import { URL_USER } from "../../shared/constants/urls";
import { LandingRoutesEnum } from "./routes";
import { ProfileRoutesEnum } from "../Profile/routes";


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
          <img src="true.png" className="imagem" />
        </div>
      </div>



      <div className="ondas">
        <svg className="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path className="wave-3" fill="#228aa4" fill-opacity="1" d="M0,256L60,261.3C120,267,240,277,360,272C480,267,600,245,720,202.7C840,160,960,96,1080,101.3C1200,107,1320,181,1380,218.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
          <path className="wave-2" fill="#11acd3" fill-opacity="1" d="M0,96L34.3,90.7C68.6,85,137,75,206,90.7C274.3,107,343,149,411,149.3C480,149,549,107,617,106.7C685.7,107,754,149,823,144C891.4,139,960,85,1029,74.7C1097.1,64,1166,96,1234,106.7C1302.9,117,1371,107,1406,101.3L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
          <path className="wave-1" fill="#00BEF0" fill-opacity="1" d="M0,128L34.3,160C68.6,192,137,256,206,250.7C274.3,245,343,171,411,160C480,149,549,203,617,208C685.7,213,754,171,823,138.7C891.4,107,960,85,1029,106.7C1097.1,128,1166,192,1234,213.3C1302.9,235,1371,213,1406,202.7L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
        </svg>
      </div>


      <div className="conteudo">
        <main className="cards">
          <section className="card contact">
            <div className="icon">
              <img src="remedio.png" alt="Contact us." />
            </div>
            <h3>Auxiliando sempre</h3>
            <span>Tomar os medicamentos no horario correto é a chave para um tratamento com eficacia</span>

          </section>
          <section className="card shop">
            <div className="icon">
              <img src="relogio.png" alt="Shop here." />
            </div>
            <h3>Nunca se esqueça</h3>
            <span>Sempre estando com você para que não se esqueça qual remedio deve tomar e seu horário</span>

          </section>
          <section className="card about">
            <div className="icon">
              <img src="cuidando.png" alt="About us." />
            </div>
            <h3>Em conjunto com a familia</h3>
            <span>Ajudando toda a familia ao mesmo tempo, servindo tanto para avó quanto para o filho</span>

          </section>
        </main>
        <br />

        <div className="requisitos">
          <h2 className="mt-4 ml-5 text-center"> Requisitos </h2>
          <main className="cards">
            <section className="card contact">
              <div className="icon">
                <img src="fechar.png" alt="Contact us." />
              </div>
              <h3>Não fechar o navegador</h3>
              <span>A partir do navegador que poderemos enviar as notificações de quando tomar o medicamento, então ele não pode ser fechado</span>
            </section>
            <section className="card shop">
              <div className="icon">
                <img src="aceitar.png" alt="Shop here." />
              </div>
              <h3>Aceitar as permissões</h3>
              <span>Aceitar as permissões é muito importante porque precisamos que você aceite-as para que seu aparelho receber as notificações</span>

            </section>
            <section className="card about">
              <div className="icon">
                <img src="internet.png" alt="About us." />
              </div>
              <h3>Conectar-se ao wi-fi</h3>
              <span>Para poder se conectar ao site e receber os alertar é preciso estar conectado ao wi-fi ou a sua rede de dados movéis</span>

            </section>
          </main>
        </div>

        {/* <div className="objetivos">
          <h2 className="tit mt-6"> Objetivo </h2>
          <div className="objText grid grid-cols-2 gap-2 mt-6 text-justify p-4">
            <p>A não adesão adequada ao tratamento com medicamentos é um desafio significativo para a saúde pública, resultando em complicações médicas evitáveis e custos 
              extras ao sistema de saúde. Logo, idealizou-se a proposta de uma aplicação para a gestão eficaz de remédios através de alertas de horários personalizados. 
              Não obstante, visa-se facilitar o acompanhamento das prescrições e promover a adesão satisfatória aos tratamentos médicos. O projeto MedTime, desenvolvido em 
              TSX com lógica em JavaScript, destaca-se por oferecer uma gestão inteligente de medicamentos. Utilizando o framework React no front-end, a aplicação busca 
              proporcionar uma experiência intuitiva. Sua lógica em JavaScript permite a configuração fácil de horários, datas e envio de notificações personalizadas pelos 
              usuários. O MedTime possibilita a criação de perfis independentes, garantindo que cada usuário tenha seu espaço individual para gerenciar dados, conectados 
              apenas pelo login inicial. </p>
            <div className="objImage">
              <img src="obj.png" className="objimg" alt="About us." />
            </div>
          </div>
        </div> */}

      </div>

      <div className="footer">
        <div className="content">
          <h1>criadores:</h1>
          <p>Luis Otavio, Sebastião, Leonardo, Luma, Millene</p>
        </div>
      </div>

    </div>
  )
}

export default LandingPage;
