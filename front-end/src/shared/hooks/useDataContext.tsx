import React from 'react';

import { createContext, useContext, useState } from 'react';
import { MedicationType } from '../types/MedicationType';

interface DataContext {
  medication?: MedicationType[];
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
    })
  }

  return {
    medication: data?.medication || [],
    setMedication,
  };
};

