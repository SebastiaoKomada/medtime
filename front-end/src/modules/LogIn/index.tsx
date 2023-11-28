import React, { useState } from "react";
import { Form  } from "antd";
import { useRequest } from "../../shared/hooks/useRequest";

import './index.css';
import { Link } from "react-router-dom";
import { SignupRoutesEnum } from "../SignUp/routes";

const LogIn = () => {
  const [usuEmail, setEmail] = useState('');
  const [usuSenha, setPassword] = useState('');
  const { authRequest } = useRequest();

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    authRequest({
      usuEmail,
      usuSenha,
    })
  };

  return (

        <div className="container__login">
          <div className="content-left__login">
            <h1 className="h1__login">Bem-vindo!</h1>
            <p className="p__login">Faça login para acessar sua conta.</p>
          </div>
          <div className="content-right__login">
            <div className="card__login">
              <Form name="form_login" layout="vertical" style={{ maxWidth: 800 }}>
                <Form.Item name="email" label="E-mail" rules={[{ required: true, message: 'Please input your e-mail!' }]}>
                  <input className="input__login" placeholder="Digite seu e-mail" onChange={handleEmail} />
                </Form.Item>
                <Form.Item name="password" label="Senha" rules={[{ required: true, message: 'Please input your password!' }]}>
                  <input className="input__login" type="password" placeholder="Digite sua senha" onChange={handlePassword} />
                </Form.Item>
                <button className="btn__login" onClick={handleLogin}>
                  Entrar
                </button>
                <div className="text_link__login">
                  <p>Não possui uma conta?
                    <Link to={SignupRoutesEnum.SIGNUP}> Clique aqui!</Link>
                  </p>
                </div>

              </Form>
            </div>
          </div>
        </div>

  );
};

export default LogIn;