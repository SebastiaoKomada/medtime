import { Button } from 'antd';
import axios from 'axios';

// Envia uma requisição post

const ConfirmMedication = () => {
  const postData = async () => {
    const returnObject = await axios({
      method: 'post',
      url: 'http://localhost:5005/confirmation/1/1',
      data: {
        conData: '2023-11-23',
      },
    });
    console.log('return object', returnObject);
  };

  return (
    <div>
      <Button onClick={postData}> confirmar medicação </Button>
    </div>
  );
};

export default ConfirmMedication;
