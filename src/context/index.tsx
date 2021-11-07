import React, {ReactNode} from 'react';
import { AuthProvider } from './Auth';

interface Props {
    children: ReactNode;
}

export function Providers({children}:Props){
    return(
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}