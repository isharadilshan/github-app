import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../../modules/profile/ProfileView';
import RepositoryView from '../../modules/repository/RepositoryView';
import UsersView from '../../modules/user/UsersView';

const Tab = createBottomTabNavigator();

export const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Users'}
      tabBarOptions={{
        style: {
          borderTopWidth: 0,
          backgroundColor: 'white',
        },
      }}>
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={(route, focused) => ({
          tabBarLabel: 'Profile',
        })}
      />
      <Tab.Screen
        name="Users"
        component={UsersView}
        options={(focused) => ({
          tabBarLabel: 'User',
        })}
      />
      <Tab.Screen
        name="Repos"
        component={RepositoryView}
        options={(focused) => ({
          tabBarLabel: 'Repos',
        })}
      />
    </Tab.Navigator>
  );
};
