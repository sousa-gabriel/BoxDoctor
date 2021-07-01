import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        position: "absolute",
        top: '10%',
        flexDirection: 'row',
    },
    imageBox: {
        width: '50%',
        left: 0,
        position: "absolute",
        resizeMode:'contain',
    },
    imagePlus: {
        width: '60%',
        right: '0%',
        position: "absolute",
        resizeMode: 'contain'
    },
    doctor:{
        position: "absolute",
        bottom: 0,
        height: '60%',
        width: '100%',
    },
    imageDoctor:{
        resizeMode: 'contain',
        position: "absolute",
        bottom: -10,
        height: 258,
        width: 244,
    },
});