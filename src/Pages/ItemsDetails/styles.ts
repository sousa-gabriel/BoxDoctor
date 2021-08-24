import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";

export const StylesDetalhes = StyleSheet.create({
    container:{
        flex: 1,
        width: '90%',
        marginHorizontal: '5%',
    },
    icon:{
        height: 50,
        width: '100%',
        paddingLeft: 10,
        borderRadius: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: 15,
        backgroundColor: theme.colors.background,
        shadowColor: theme.colors.shadowColor,
        shadowOpacity: 0.5,
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
        elevation: 10,
    },
    title:{
        fontFamily: theme.fonts.TextInput,
        fontSize: 20,
        marginLeft: 10,
        color: theme.colors.inputValue,
    },
    containerIcons:{
        width: '100%', 
        flexDirection:'row', 
        justifyContent: 'space-between', 
        marginTop: 20,

    }
})