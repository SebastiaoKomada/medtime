import axios from 'axios';
import { useState } from 'react';

import { connectionAPIPost } from './../functions/connection/connectionAPI';

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

  const postRequest = async (url: string, body: unknown) => {
    setConfirmationData(true);
    const returnData = await connectionAPIPost(url, body)
      .then((result) => {
        return result;
      })
      .catch((error: Error) => {
        return error.message, 'error';
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
