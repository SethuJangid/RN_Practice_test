import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Tabscreen/Home';
import Content from '../Tabscreen/Content';

const Tab = createBottomTabNavigator();

const DashBorad = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: 'false',
        tabBarLabelPosition: 'beside-icon',
        tabBarLabelStyle: {
          fontWeight: '700',
          fontSize: 15,
        },
        tabBarIconStyle: {display: 'none'},
      }}>
      <Tab.Screen
        options={{tabBarLabel: 'Home'}}
        name="Home"
        component={Home}
      />
      <Tab.Screen name="User" component={Content} />
    </Tab.Navigator>
  );
};

export default DashBorad;

const styles = StyleSheet.create({
  
});
