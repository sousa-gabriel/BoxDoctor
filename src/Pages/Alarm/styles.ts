import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: '100%',
    },
    subtitle:{
        width: '100%',
        fontFamily: theme.fonts.subtitle,
        fontSize: 20,
        color: theme.colors.Loading,
        margin: 18,
    },
    content:{
        justifyContent: 'center',
        marginHorizontal: '5%',
    },
    add:{
        width: 60,
        height: 60,
        borderRadius: 30,
        position: "absolute",
        bottom: 80,
        right: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.buttonBackground,
        shadowColor: theme.colors.shadowColor,
        shadowOpacity: 0.5,
        shadowOffset: { width: 5, height: 3 },
        shadowRadius: 2,
        elevation: 10,
    },
    addText:{
        fontFamily: theme.fonts.Text500,
        color: theme.colors.button,
        fontSize: 45,
    }
})