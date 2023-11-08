import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useRequest } from "../../shared/hooks/useRequest";
import '../../routes/LogIn/index.sass';
import { UserType } from "./UserTypes";

const LogIn = () => {

  const navigate = useNavigate();

  const [userEmail, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  const { postRequest, loading } = useRequest();

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    postRequest<UserType>('http://localhost:5005/auth', {
      userEmail,
      userPassword,
    });
  };

  return (
    <div className="container">
      <div className="content-left">
        <h1>Bem-vindo!</h1>
        <p>Faça login para acessar sua conta.</p>
      </div>
      <div className="content-right">
        <Form name="form_login" layout="vertical" style={{ maxWidth: 600 }}>
          <Form.Item name="email" label="E-mail" rules={[{ required: true, message: 'Please input your e-mail!' }]}>
            <Input placeholder="Digite seu e-mail" onChange={handleEmail} />
          </Form.Item>
          <Form.Item name="password" label="Senha" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input type="password" placeholder="Digite sua senha" onChange={handlePassword} />
          </Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} onClick={handleLogin}>
            Entrar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default LogIn;