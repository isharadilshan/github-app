import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignInView from './../../modules/login/SignInView';
import {BottomNavigator} from './BottomNavigator';
import {DrawerNavigator} from './DrawerNavigator';

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={'BottomTabs'}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignIn" component={SignInView} />
      <Stack.Screen name="DrawerContent" component={DrawerNavigator} />
      <Stack.Screen name="BottomTabs" component={BottomNavigator} />
    </Stack.Navigator>
  );
};