import React from 'react';

import { createContext, useContext, useState } from 'react';
import { MedicationType } from '../../modules/Home/types/MedicationType';
import { ProfileType } from '../../modules/LogIn/types/UserType';
import { NotifyType } from '../../modules/Home/types/NotifyType';

interface DataContext {
  medication?: MedicationType[];
  profile?: ProfileType;
  notify?: NotifyType[];
}

interface DataContextProps {
  data: DataContext;
  setData: (data: DataContext) => void;
}

const DataContext = createContext({} as DataContextProps);

interface DataProvidersProps {
  children: React.ReactNode;
}

export const DataProvider = ({ children }: DataProvidersProps) => {
  const [data, setData] = useState<DataContext>({});

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const { data, setData } = useContext(DataContext);

  const setMedication = (medication: MedicationType[]) =>{
    setData({
      ...data,
      medication
    });
  };

  const setProfile = (profile: ProfileType) => {
    setData({
      ...data,
      profile,
    });
  };

  const setNotify = (notify: NotifyType[]) => {
    setData({
      ...data,
      notify,
    });
  };

  return {
    medication: data?.medication || [],
    setMedication,
    profile: data?.profile,
    setProfile,
    notify: data?.notify || [],
    setNotify
  };
};

