import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({
    modal:{
        width: '80%',
        marginLeft: '10%',
        borderRadius: 10,
        height: '40%',
        padding: '5%',
        backgroundColor: theme.colors.background,
        justifyContent: 'center',
        alignContent: 'center',
    },
    textModal:{
        textAlign: 'center',
        fontFamily: theme.fonts.Title,
        color: theme.colors.title,
        fontSize: 15,
    },
})