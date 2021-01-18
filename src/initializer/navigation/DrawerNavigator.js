import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SettingsView from '../../modules/utils/SettingsView';
// import {HomeStackNavigator} from './HomeStackNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={DrawerComponent}
      initialRouteName="Settings">
      <Drawer.Screen name="Settings" component={SettingsView} />
    </Drawer.Navigator>
  );
};