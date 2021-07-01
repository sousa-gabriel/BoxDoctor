import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    icon:{
        marginRight: 20,
        color: theme.colors.title,
    },
    title:{
        fontFamily: theme.fonts.Title,
        color: theme.colors.title,
        fontSize: 25,
    }
})