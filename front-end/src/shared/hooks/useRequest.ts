import axios from 'axios';
import { useState } from 'react';

export const useRequest = () => {
  const [confirmationData, setConfirmationData] = useState(false);

  const getRequest = async (url: string) => {
    setConfirmationData(true);
    return await axios({
      method: 'get',
      url: url,
    }).then((result) => {
      return result.data;
    });
  };

  const postRequest = async (url: string, body: any) => {
    setConfirmationData(true);
    const returnData = await axios({
      method: 'post',
      url: url,
      data: body,
    }).then((result) => {
      return result.data;
    });

    setConfirmationData(false);
    return returnData;
  };

  return {
    confirmationData,
    getRequest,
    postRequest,
  };
};
