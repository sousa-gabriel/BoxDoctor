import React, {ReactNode, createContext, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface StorageDataProps {
  children: ReactNode;
}

export interface NewAlarm {
  id: string | number[],
  hours: string;
  title: string,
  amountMedicine: string,
  icon: string,
  status: string,
}

interface IStorageDataContext {
  insertRegister(formData: NewAlarm): Promise<void>;
  SearchRegister(): Promise<string>;
}

const AlarmDataContext = createContext({} as IStorageDataContext);

function AlarmDataProvider({children}: StorageDataProps) {
  const useAlarmKey = '@boxdoctor:alarm';

  async function insertRegister(NewAlarmData: NewAlarm) {
    try {
      const response = await AsyncStorage.getItem(useAlarmKey);
      const responseCurrent = response ? JSON.parse(response) : [];

      const responseformatted = [...responseCurrent, NewAlarmData];

      await AsyncStorage.setItem(
        useAlarmKey,
        JSON.stringify(responseformatted),
      );
    } catch (error) {
      throw new Error();
    }
  }

  async function SearchRegister() {
    const response = await AsyncStorage.getItem(useAlarmKey);

    if (!response) {
      return '';
    }

    return response;
  }

  return (
    <AlarmDataContext.Provider
      value={{
        insertRegister,
        SearchRegister,
      }}>
      {children}
    </AlarmDataContext.Provider>
  );
}

function useAlarmData() {
  const context = useContext(AlarmDataContext);
  return context;
}

export {AlarmDataProvider, useAlarmData};
