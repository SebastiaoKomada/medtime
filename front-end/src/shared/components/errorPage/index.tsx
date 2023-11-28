import React from 'react';
import { Button, Result } from 'antd';
import './index.sass'
import { useNavigate } from 'react-router-dom';
import { LandingRoutesEnum } from '../../../modules/LandingPage/routes';

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  const handleOnClickButton = () => {
    navigate(LandingRoutesEnum.LANDING_PAGE)
  }
  return(
  <div className='containerPageNoutFound'>
  <Result
    status="404"
    title="404"
    subTitle="Desculpe, a página que você está visitando não existe."
    extra={<Button type="primary" onClick={handleOnClickButton}>Início</Button>}
  />
  </div>
  )
};

export default ErrorPage;