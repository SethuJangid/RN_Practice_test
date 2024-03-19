import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../Screens/Splash';
import Landing from '../Screens/Landingscreen';
import Signin from '../Screens/Signin';
import Signup from '../Screens/Signup';
import DashBorad from '../Screens/Dashboard';
import ItemDetails from '../Screens/Tabscreen/ItemDetails';


const Stack = createNativeStackNavigator();
const Navigation = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='splash'>
        <Stack.Screen name= "splash" component={Splash} options={{headerShown:false}} />
        <Stack.Screen name= "landing" component={Landing} options={{headerShown:false}} />
        <Stack.Screen name= "signin" component={Signin} options={{headerShown:false}} />
        <Stack.Screen name= "signup" component={Signup} options={{headerShown:false}} />
        <Stack.Screen name= "Dashboard" component={DashBorad} options={{headerShown:true,title:''}} />
        <Stack.Screen name= "Details" component={ItemDetails} options={{headerShown:true}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
