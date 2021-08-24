import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: 80,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: theme.colors.borderColor,
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
    },
    Power:{
        width: 40,
        height: 20,
        borderRadius: 10,
        backgroundColor: theme.colors.BackgroundItem,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: theme.colors.borderColor,  
        shadowColor: theme.colors.shadowColor,
        shadowOpacity: 0.5,
        shadowOffset: { width: 5, height: 3 },
        shadowRadius: 2,
        elevation: 5,
    },
    PowerSelector:{
        width: 20,
        height: 19,
        borderRadius: 10,
    }
})