import React from 'react';
import {
    TextError,
} from './styles';

const ErrorMessage: React.FC = ({children}) => {
    return (
        <TextError>
            {children}
        </TextError>
    );
}
export default ErrorMessage;