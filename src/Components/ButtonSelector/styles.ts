import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/themes';

export const styles = StyleSheet.create({
    container: {
        height: 50,
        width: '100%',
        paddingLeft: 10,
        borderRadius: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 15,
        backgroundColor: theme.colors.background,
        shadowColor: theme.colors.shadowColor,
        shadowOpacity: 0.5,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
        elevation: 10,
    },
    icon:{
        marginRight: 10,
        position: 'absolute',
        right: 15,
    },
    title: {
        fontFamily: theme.fonts.TextImput,
        fontSize: 20,
        marginLeft: 10,
        color: theme.colors.input,
    },
})