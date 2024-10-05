import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from '../BottomTabNavigator/CustomTabBar';
import IndexWelcome from '../Welcome/Index'
import IndexCadastro from '../Cadastro/Index'
import IndexHome from '../Home/Index';

export default function BottomTabs() {
  const Tab = createBottomTabNavigator();

  return (
    // <NavigationContainer independent={true}>
      <Tab.Navigator 
        screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true, tabBarShowLabel: false, 
          tabBarStyle: { borderTopWidth: 0, backgroundColor: "#fff" }
        }}

        tabBar={ (props) => <CustomTabBar {...props} /> }
      >

        <Tab.Screen name="Home"
         component={IndexHome}
         options={{tabBarIcon: "heart"}}
        />
        <Tab.Screen name="Welcome"
         component={IndexWelcome}
         options={{tabBarIcon: "home"}} 
        />
        <Tab.Screen name="Cadastro"
         component={IndexCadastro}
         options={{tabBarIcon: "bell"}} 
        />

      </Tab.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  bottomButtons: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#C19B8F",
  }
});
