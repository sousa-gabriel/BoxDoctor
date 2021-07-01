import React from 'react';
import { BackgroundLogin } from '../../Components/BackgroundLogin';
import { ContentLogin } from '../../Components/ContentLogin';
import { HeaderLogin } from '../../Components/HeaderLogin';
import { Button } from '../../Components/Button';
import { Input } from '../../Components/Input';
import { View } from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/styles/themes';
import { useNavigation } from '@react-navigation/native';

export function Login() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <HeaderLogin title='BoxDoctor' />
            <BackgroundLogin />
            <ContentLogin>
                <Input name='E-mail' icon='user' />
                <Input name='senha' icon='lock' />
                <Button
                    color='#3B5998'
                    icon='facebook-square'
                    title='Entrar com o Facebook'
                    colorIcon='#FFF'
                />
                <Button
                    color='#E9500E'
                    icon='google-plus-square'
                    title='Entrar com o Google'
                    colorIcon='#FFF'
                />
                <Button
                    color={theme.colors.buttonBackground}
                    title='Entrar'
                    onPress={()=>{navigation.navigate('Home')}}
                />
            </ContentLogin>
        </View>
    )
}