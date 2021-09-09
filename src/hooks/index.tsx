import React, {ReactNode} from 'react';
import { AlarmDataProvider } from './Alarm';
import { AuthProvider } from './Auth';

interface Props {
    children: ReactNode;
}

export function Providers({children}:Props){
    return(
        <AuthProvider>
            <AlarmDataProvider >
                {children}
            </AlarmDataProvider>
        </AuthProvider>
    )
}