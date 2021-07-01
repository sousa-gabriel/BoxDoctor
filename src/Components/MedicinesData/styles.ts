import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: 'auto',
        paddingHorizontal: 20,
        paddingVertical: '10%',
        backgroundColor: theme.colors.BackgroundItem,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: theme.colors.primary,
    },
    title: {
        marginVertical: 20,
        fontFamily: theme.fonts.Title,
        color: theme.colors.primary,
        fontSize: 20,
    },
    AlarmContent: {
        width: '75%',
        marginHorizontal: '23%',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    TextAlarm: {
        fontFamily: theme.fonts.Title,
        color: theme.colors.primary,
        fontSize: 20,
    },
    AlarmData: {
        width: 50,
        flexDirection: 'row',
        alignItems: "center",
    },
    field: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    column: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    divider: {
        marginRight: 4,
        fontSize: 20,
        fontFamily: theme.fonts.Title,
        color: theme.colors.primary,
    },
    label: {
        fontSize: 18,
        fontFamily: theme.fonts.Title,
        color: theme.colors.primary,
    }
})