import React, { ReactNode } from 'react';
import { ModalProps, Modal, TouchableWithoutFeedback } from 'react-native';

interface Props extends ModalProps {
    children?: ReactNode;
    closeModal: () => void;
}

export function ModalView({ children, closeModal, ...rest }: Props) {
    return (
        <Modal transparent animationType='slide' {...rest} statusBarTranslucent >
            <TouchableWithoutFeedback onPress={closeModal}>
                {children}
            </TouchableWithoutFeedback>
        </Modal>
    )
}