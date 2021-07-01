import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 40,
        flexDirection: 'row',
        position: "absolute",
        bottom: 0,
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderTopColor: theme.colors.borderColor,
    },
    icon:{
        marginTop: 5,
        width: 30,
        height: 30,
    }
})