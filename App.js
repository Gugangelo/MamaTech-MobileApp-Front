import React from 'react'
import { StatusBar, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from './src/pages/AppRoutes';

export default function App() {
  // const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      {/* <Tab.Navigator> */}
        <StatusBar backgroundColor={"#C19B8F"} barStyle={"light-content"} />
        <Routes />
      {/* </Tab.Navigator> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
