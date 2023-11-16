import React from 'react';

import { createContext, useContext, useState } from 'react';
import { ProfileType, UserType } from '../../routes/LogIn/types/UserType';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface NotificationProps {
  message: string,
  type: NotificationType,
  description?: string,
}

interface GlobalData {
  notification?: NotificationProps
  user?: UserType;
  profile?: ProfileType;

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
        },
      });
  };

  const setUser = (user: UserType) => {
    setGlobalData({
      ...globalData,
      user
    })
  }

  const setProfile = (profile: ProfileType) => {
    setGlobalData({
      ...globalData,
      profile,
    });
  };

  return {
    notification: globalData?.notification,
    user: globalData?.user,
    profile: globalData?.profile,
    setUser,
    setProfile,
    setNotification,
  };
};

