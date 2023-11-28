import { NotifyType } from './../../modules/Home/types/NotifyType';
import axios from "axios";

export const handleNotification = async (data: NotifyType[]) => {
  console.log(data);

  if (data) {
    const serviceWorker = await navigator.serviceWorker.register('service-worker.js');
    const publicKeyResponse = await axios.get('http://localhost:5005/notification/public_key');
    const subscription = await serviceWorker.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: publicKeyResponse.data.publicKey
    });

    // await axios.post('http://localhost:5005/notification/register', {
    //   subscription,
    // });

    await axios.post('http://localhost:5005/notification/send', {
      subscription,
    });
  }
};