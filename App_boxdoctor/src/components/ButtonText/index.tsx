import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {ContainerButton, TextButton} from './styles';

interface PropsButton {
  ColorText: string;
  IconName: string;
  DateButton: string;
  handleFunction: () => void;
}

const ButtonText: React.FC<PropsButton> = ({
  DateButton,
  ColorText,
  IconName,
  handleFunction,
}) => {
  return (
    <ContainerButton onPress={handleFunction}>
      <Icon name={IconName} size={20} color={ColorText} />
      <TextButton style={{color: ColorText}}>{DateButton}</TextButton>
    </ContainerButton>
  );
};
export default ButtonText;
