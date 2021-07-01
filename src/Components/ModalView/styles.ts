import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        marginTop: 100,
    },
    overlay:{
        flex: 1,
        backgroundColor: theme.colors.backgroundModal,
    },
});