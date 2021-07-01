import { StyleSheet, Platform } from "react-native";
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: getStatusBarHeight(),
        paddingBottom: Platform.OS === 'android' ? 15 : getBottomSpace(),
    },
});