import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { useRequest } from "../../shared/hooks/useRequest";
import './index.sass';
import { URL_USER } from "../../shared/constants/urls";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [usuNome, setName] = useState('');
  const [usuEmail, setEmail] = useState('');
  const [usuSenha, setPassword] = useState('');
  const [usuTelefone, setTelefone] = useState('');
  const { createUserRequest, loading } = useRequest();


  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleTelefone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTelefone(event.target.value);
  };

  const handleLogin = () => {
    createUserRequest(URL_USER, {
      usuNome,
      usuEmail,
      usuSenha,
      usuTelefone
    });
  };

  return (
    <div className="body__signup">
      <div className="center__signup">
        <div className="container__signup">
          <div className="content-left__signup">
            <h1 className="h1__signup">Cadastro</h1>
            <p className="p__signup">Mantenha os horários em dia!</p>
          </div>
          <div className="content-right__signup">
            <Form name="form_signup" layout="vertical" style={{ maxWidth: 800 }}>
              <Form.Item name="name" label="Nome" rules={[{ required: true, message: 'Please input your name!' }]} style={{ fontSize: 20 }}>
                <Input placeholder="Digite seu nome" value={usuNome} onChange={handleName}/>
              </Form.Item>
              <Form.Item name="email" label="E-mail" rules={[{ required: true, message: 'Please input your e-mail!' }]} style={{ fontSize: 20 }}>
                <Input placeholder="Digite seu e-mail" value={usuEmail} onChange={handleEmail}/>
              </Form.Item>
              <Form.Item name="password" label="Senha" rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input type="password" placeholder="Digite sua senha" value={usuSenha} onChange={handlePassword}/>
              </Form.Item>
              <Form.Item name="telefone" label="Telefone" rules={[{ required: true, message: 'Please input your telefone!' }]}>
                <Input type="phone" placeholder="Digite seu telefone" value={usuTelefone} onChange={handleTelefone}/>
              </Form.Item>
              <Button type="primary" htmlType="submit" loading={loading} onClick={handleLogin}>
                Criar
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp;
