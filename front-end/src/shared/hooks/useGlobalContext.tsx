import { createContext, useContext, useEffect, useState } from 'react';

import { getAuthorizationToken, setAuthorizationToken } from '../functions/connection/auth';

interface GlobalData {
  acessToken?: string;
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

  useEffect(() => {
    const token = getAuthorizationToken();
    if (token) {
      setAcessToken(token);
    }
  }, []);

  const setAcessToken = (acessToken: string) => {
    setAuthorizationToken(acessToken),
      setGlobalData({
        ...globalData,
        acessToken,
      });
  };

  return {
    acessToken: globalData?.acessToken,
    setAcessToken,
  };
};
