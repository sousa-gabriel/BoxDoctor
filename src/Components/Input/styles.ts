import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/themes";

export const styles = StyleSheet.create({
  container:{
    height: 50,
    width: '100%',        
    marginVertical: 15,
    paddingLeft: 10,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    borderColor: theme.colors.borderColor,
    backgroundColor: theme.colors.background,
    shadowColor: theme.colors.shadowColor,
    shadowOpacity: 0.5,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    elevation: 10,
  },
  input:{
    fontFamily: theme.fonts.TextInput,
    color: theme.colors.inputValue,
    fontSize: 17,
    height: '100%',
    width: '100%',    
    marginLeft: 10,
  }
});