import React, {useEffect, useState} from 'react';
import {StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
import {Center, Input, Box, Text} from 'native-base';
import {TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import {useSelector,useDispatch} from 'react-redux'
import { addUser } from '../../redux/action/action';

const Signup = ({navigation}) => {
  const dispatch = useDispatch()
  const userData = useSelector(state=>state.Signup)

  const register = async payload => {
    dispatch(addUser(payload))
  };
  useEffect(() => {
    console.log('user--',userData);
    navigation.navigate('signin')
  }, [userData]);
  
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          onSubmit={values => {
            payload = {
              firstName: values.firstName,
              lastName: values.lastName,
              email: values.email,
              password: values.password,
              confirmPassword: values.confirmPassword,
            };
            if (payload) {
              register(payload);
            }
          }}>
          {({handleChange, handleBlur, handleSubmit, values, errors}) => (
            <Box alignItems="center">
              <Text style={styles.element} fontSize="2xl" mx="3">
                Please fill your Registration Details.
              </Text>
              <View style={styles.boxstyle}>
                <Text style={styles.fieldText} fontSize="lg">
                  First Name
                </Text>
                <Input
                  onChangeText={handleChange('firstName')}
                  value={values.firstName}
                  size="lg"
                  placeholder="Enter you firstName"
                  w="90%"
                  style={styles.inputbox}
                />
              </View>
              <View style={styles.boxstyle}>
                <Text style={styles.fieldText} fontSize="lg">
                  Last name
                </Text>
                <Input
                  onChangeText={handleChange('lastName')}
                  onBlur={handleBlur('lastName')}
                  value={values.lastName}
                  size="lg"
                  placeholder="Enter you lastname"
                  w="90%"
                  style={styles.inputbox}
                />
              </View>
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
                  placeholder="Enter you Contact Number"
                  w="90%"
                  style={styles.inputbox}
                />
              </View>
              <View style={styles.boxstyle}>
                <Text style={styles.fieldText} fontSize="lg">
                  Confirm Password
                </Text>
                <Input
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  size="lg"
                  placeholder="Enter your onfirm password"
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
export default Signup;

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
