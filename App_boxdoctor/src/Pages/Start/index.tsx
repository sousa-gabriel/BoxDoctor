import React, {useRef, useState} from 'react';
import {Animated, TouchableOpacity} from 'react-native';
import LoginStarted from '../../components/Login/Started';
import LoginProgress from '../../components/Login/Progress';

const Login: React.FC = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [status, setStatus] = useState(0);

  function fadeIn(state: number) {
    setStatus(state);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }

  function fadeOut() {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
    fadeIn(2);
  }

  return (
    <>
      {status === 0 ? (
        <TouchableOpacity
          style={{flex: 1, width: '100%'}}
          onPress={fadeIn(1)}
        />
      ) : status === 1 ? (
        <TouchableOpacity
          style={{flex: 1, backgroundColor: 'trasparent', width: '100%'}}
          onPress={() => {
            fadeOut();
          }}>
          <Animated.View style={{opacity: fadeAnim, flex: 1, width: '100%'}}>
            <LoginStarted />
          </Animated.View>
        </TouchableOpacity>
      ) : (
        <Animated.View style={{opacity: fadeAnim, flex: 1, width: '100%'}}>
          <LoginProgress />
        </Animated.View>
      )}
    </>
  );
};
export default Login;
