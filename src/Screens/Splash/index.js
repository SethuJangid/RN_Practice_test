import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { useSelector } from 'react-redux';

const splashlogo = require('../../assets/images/splashlogo.png');


const Splash = ({navigation}) => {
  const login = useSelector(state=>state.login)
  console.log('splash--',login);
  useEffect(() => {
    setTimeout(() => {
      // navigation.navigate(login !== ''?'dashboard':'landing');
      navigation.navigate('landing');
    }, 3000);
  }, []);
  return (
    <View style={styles.main}>
      <Image style={styles.logo} source={splashlogo} />
      <Text style={styles.text}> Splash </Text>
    </View>
  );
};
export default Splash;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9B860',
  },
  logo: {
    height: 100,
    width: 100,
  },
  text: {
    fontSize: 20,
  },
});
