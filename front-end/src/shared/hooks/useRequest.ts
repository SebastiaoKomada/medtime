import axios from 'axios';
import { useState } from 'react';

import { connectionAPIPost } from './../functions/connection/connectionAPI';

export const useRequest = () => {
  const [loading, setLoading] = useState(false);

  const getRequest = async (url: string) => {
    setLoading(true);
    return await axios({
      method: 'get',
      url: url,
    }).then((result) => {
      return result.data;
    });
  };

  const postRequest = async <T>(url: string, body: unknown): Promise<T | undefined> => {
    setLoading(true);

    const returnData = await connectionAPIPost<T>(url, body)
      .then((result) => {
        return result;
      })
      .catch((error: Error) => {
        console.log(error.message, 'error');
        // setNotification(error.message, 'error');
        return undefined;
      });

    setLoading(false);
    return returnData;
  };

  return {
    loading,
    getRequest,
    postRequest,
  };
};
