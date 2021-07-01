import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    title:{
        fontFamily: theme.fonts.Title,
        fontSize: 50,
        color: theme.colors.title,
    }
});