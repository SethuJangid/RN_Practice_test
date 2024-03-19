import React, {useState, useEffect} from 'react';
import {StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
import { Input, Box, Text} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import { loginUser } from '../../redux/action/action';
import { useDispatch, useSelector } from 'react-redux';




const Signin = ({navigation}) => {
  const dispatch = useDispatch()
  const signUp = useSelector(state=>state.signUp.data)
  const login = useSelector(state=>state.login)

  const Login = async payload => {
    signUp.forEach((ele)=>{
      console.log('ele--',ele);
      if(payload.email === ele.user.email){
        let data = {
          ...ele.user,
          id:ele.id
      }
        console.log('signin--',data);
        dispatch(loginUser(data))
        // navigation.navigate('dashboard');
      }
    })
  };


  useEffect(()=>{
    console.log('login--',login);
    if(login !== ''){
      navigation.navigate('Dashboard');
    }
  },[login])
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={values => {
            payload = {
              email: values.email,
              password: values.password,
            };
            if (payload) {
              Login(payload);
            }
          }}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <Box alignItems="center">
              <Text style={styles.element} fontSize="2xl" mx="3">
              Please Signin to your account
              </Text>
          
              <View style={styles.boxstyle}>
                <Text style={styles.fieldText} fontSize="lg">
                  Email
                </Text>
                <Input
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  size="lg"
                  placeholder="Enter you email"
                  w="90%"
                  style={styles.inputbox}
                />
              </View>
              <View style={styles.boxstyle}>
                <Text style={styles.fieldText} fontSize="lg">
                  Password
                </Text>
                <Input
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  size="lg"
                  placeholder="Enter you Password"
                  w="90%"
                  style={styles.inputbox}
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  handleSubmit();
                }}
                style={styles.button}>
                <View>
                  <Text> Sign In </Text>
                </View>
              </TouchableOpacity>
            </Box>
          )}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5DCBA',
  },
  inputbox: {
    backgroundColor: '#F8EED9',
  },
  boxstyle: {
    marginTop: 10,
  },
  element: {
    marginTop: 70,
    color: '#7E5936',
  },
  fieldText: {
    color: '#7E5936',
  },
  button: {
    margin: 27,
    padding: 10,
    backgroundColor: '#D4AD5D',
    height: 50,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
});
