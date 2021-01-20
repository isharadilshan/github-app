import "react-native-gesture-handler";
import React from "react";
import { Provider } from 'react-redux';
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "./src/initializer/navigation/AppNavigator";
import configureStore from './src/initializer/store/Store';

const store = configureStore()

export default function App() {
  return (
    <Provider store = { store }>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}
