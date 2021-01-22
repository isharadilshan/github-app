import "react-native-gesture-handler";
import React from "react";
import { Provider } from 'react-redux';
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from 'react-native-paper';
import { AppNavigator } from "./src/initializer/navigation/AppNavigator";
import configureStore from './src/initializer/store/Store';

const store = configureStore()

export default function App() {
  return (
    <Provider store = { store }>
      <PaperProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
}
