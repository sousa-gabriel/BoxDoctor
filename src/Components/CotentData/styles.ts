import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({
    container:{
        width: '80%',
        marginTop: 20,
        paddingHorizontal:20,
        marginLeft: '10%',
        height: '78%',
        backgroundColor:theme.colors.contentData,
        alignItems: 'center',
        paddingTop: 20,
        borderWidth: 1,
        borderRadius: 20,
        borderColor:theme.colors.primary,
        shadowColor: theme.colors.shadowColor,
        shadowOpacity: 0.5,
        shadowOffset: { width: 5, height: 3 },
        shadowRadius: 2,
        elevation: 10,
    }
})