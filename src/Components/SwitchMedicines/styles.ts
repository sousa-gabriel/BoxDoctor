import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({
    container:{
        width: '80%',
        borderRadius:10,
        height:'auto',
        backgroundColor:'#fff',
        padding:20,
    },
    title:{
        marginVertical:20,
        fontFamily: theme.fonts.Title,
        color: theme.colors.primary,
        fontSize: 20,
    },
    overlay:{
        flex: 1,
        backgroundColor: theme.colors.backgroundModal,
        justifyContent: 'center',
        alignItems: 'center',
    },
})