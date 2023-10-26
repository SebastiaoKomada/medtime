import { useEffect } from 'react';

import { useRequest } from '../../../shared/hooks/useRequest';

const ConfirmMedication = () => {
  const { getRequest, postRequest, confirmationData } = useRequest();

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
    <div>
      {/* {confirmationData.map((info, index) => (
          <h1 key={index}>{info}</h1>
        ))} */}
      {confirmationData}
      <button onClick={postData}>Confirmar Medicação</button>
    </div>
  );
};

export default ConfirmMedication;
