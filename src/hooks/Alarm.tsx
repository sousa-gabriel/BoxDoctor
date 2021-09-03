import React, {ReactNode, createContext, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface StorageDataProps {
  children: ReactNode;
}

interface NewAlarm {
  id: string,
  title: string,
  amountMedicine: number,
  icon: string,
  status: 'inactive',
}

interface IStorageDataContext {
  insertRegister(formData: NewAlarm): Promise<void>;
  SearchRegister(): Promise<string>;
}

const AlarmDataContext = createContext({} as IStorageDataContext);

function AlarmData({children}: StorageDataProps) {
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
      throw new Error(error);
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

export {AlarmData, useAlarmData};
