import { createContext, useContext, useState } from 'react';
import { UserType } from '../../modules/LogIn/types/UserType';
import { MedicationType } from '../../modules/Home/types/MedicationType';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface NotificationProps {
  message: string,
  type: NotificationType,
  description?: string,
}
interface GlobalData {
  notification?: NotificationProps;
  user?: UserType;
  medication?: MedicationType,
}

interface GlobalContextProps {
  globalData: GlobalData;
  setGlobalData: (globalData: GlobalData) => void;
}

const GlobalContext = createContext({} as GlobalContextProps);

interface GlobalProvidersProps {
  children: React.ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProvidersProps) => {
  const [globalData, setGlobalData] = useState<GlobalData>({});

  return (
    <GlobalContext.Provider value={{ globalData, setGlobalData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const { globalData, setGlobalData } = useContext(GlobalContext);

  const setNotification = (message: string, type: NotificationType, description?: string) => {
    setGlobalData({
      ...globalData,
      notification: {
        message,
        type,
        description,
      }
    });
  };
  const setUser = (user: UserType) => {
    setGlobalData({
      ...globalData,
      user,
    });
  };

  const setMedication = (medication: MedicationType) => {
    setGlobalData({
      ...globalData,
      medication,
    });
  };

  return {
    notification: globalData?.notification,
    setNotification,
    user: globalData?.user,
    setUser,
    medication: globalData?.medication,
    setMedication,
  };
};