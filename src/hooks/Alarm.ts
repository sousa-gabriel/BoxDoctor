import { useCallback, useState } from 'react';
import { useAuth } from '../context/Auth';
import { UserAlarm } from '../services/interfacesServices';
import { createdAlarm, getUserAlarms } from '../services/serviceApp';

export const useGetAlarms = () => {
    const { user } = useAuth();
    const [Alarms, setAlarms] = useState<UserAlarm[]>([]);

    const getAlarmAll = useCallback(async () => {
        try {
            const response = await getUserAlarms(user.id);
            if (response) {
                setAlarms(response)
            } else {
                setAlarms([]);
            }
        } catch (err) {
            console.log(err);
        }
    }, []);

    return { getAlarmAll, Alarms };
};

export const useCreatedNewAlarm = () => {
    const { user } = useAuth();

    const CreatedNewAlarm = useCallback(async (AlarmData: UserAlarm[], NewAlarm: UserAlarm) => {   
        const newAlarms = [...AlarmData, NewAlarm]

        try {
            await createdAlarm(user.id, newAlarms);
        } catch (err) {
            console.log(err);
        } 
    }, []);

    return { CreatedNewAlarm };
};