import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
    container:{
        width: 48,
        height: 48,
        backgroundColor: theme.colors.BackgroundItem,
        color: theme.colors.inputValue,
        borderRadius: 8,
        fontFamily: theme.fonts.Text500,
        fontSize: 13,
        marginRight: 4,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: theme.colors.borderColor,
    },
})