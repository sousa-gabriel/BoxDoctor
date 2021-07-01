import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({
    container:{
        width: '80%',
        borderRadius:10,
        height:'auto',
        backgroundColor:'#fff',
        padding:20,
        marginTop: '40%'
    },
    title:{
        marginVertical:20,
        fontFamily: theme.fonts.Title,
        color: theme.colors.primary,
        fontSize: 20,
    }
})