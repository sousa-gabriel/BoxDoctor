import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({
    container:{
        width: '80%',
        marginLeft: '10%',
        height: '80%',
        backgroundColor:theme.colors.primaryLigth,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: 5,
        borderWidth: 1,
        borderRadius: 20,
        borderColor:theme.colors.borderColor,
    },
    content:{
      width: '100%',
      padding: 20,
    },
    containerImage:{
        width: '100%',
        alignItems: 'center',
    },
    image:{
        width: 75,
        height: 84,
    }
})