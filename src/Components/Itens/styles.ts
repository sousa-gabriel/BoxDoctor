import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 80,
        // marginLeft: 5,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomColor: theme.colors.sucess,
        borderBottomWidth: 5,
        backgroundColor: theme.colors.BackgroundItem,
        shadowColor: theme.colors.shadowColor,
        shadowOpacity: 0.5,
        shadowOffset: { width: 5, height: 3 },
        shadowRadius: 2,
        elevation: 10,
    },
    hours:{
        fontFamily: theme.fonts.Title,
        color: theme.colors.sucess,
        fontSize: 20,
    },
    title:{
        fontFamily: theme.fonts.Title,
        color: theme.colors.sucess,
        fontSize: 25,
    },
    subTitle:{
        fontFamily: theme.fonts.Title,
        color: theme.colors.sucess,
        fontSize: 15,
    },
    icon:{
        width: 35,
        height: 35,
        resizeMode: 'contain',
    }
})