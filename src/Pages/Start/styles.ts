import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.background,
    },
    welcone: {
        backgroundColor: '#fff',
        width: 180,
        height: 100,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderWidth: 1,
        borderColor: theme.colors.borderColor,
        borderRadius: 30,
        borderBottomLeftRadius: 0,
        position: "absolute",
        bottom: 230,
        left: 150,
        shadowColor: theme.colors.shadowColor,
        shadowOpacity: 0.5,
        shadowOffset: { width: 5, height: 2 },
        shadowRadius: 5,
        elevation: 10,

    },
    welconeText: {
        fontFamily: theme.fonts.Text500,
        textAlign: 'center',
        fontSize: 13,
        color: theme.colors.title,
    },
    buttonStart: {
        width: 105,
        height: 24,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.sucess,
    },
    buttonStartText: {
        fontFamily: theme.fonts.TextButton,
        color: theme.colors.button,
    },
})