import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import IndexWelcome from '../pages/Welcome/Index'
import IndexLogin from '../pages/Login/Index'
import IndexCadastro from '../pages/Cadastro/Index'
import IndexCadastro2 from '../pages/Cadastro/Cadastro2'
import IndexHome from '../pages/Home/Index'
import IndexBottomTabScreen from '../pages/BottomTabNavigator/Index'
import IndexIMC from '../pages/IMC/Index'


const AppStack = createNativeStackNavigator()

export default function AppRoutes() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Welcome" component={IndexWelcome} options={{ headerShown: false} } />
      <AppStack.Screen name="Login" component={IndexLogin} options={{ headerShown: false} } />

      <AppStack.Screen name="Cadastro" component={IndexCadastro} options={{ headerShown: false} } />
      <AppStack.Screen name="Cadastro2" component={IndexCadastro2} options={{ headerShown: false} } />
      
      <AppStack.Screen name="Home" component={IndexHome} options={{ headerShown: false} } />
      <AppStack.Screen name="IndexBottomTab" component={IndexBottomTabScreen} options={{ headerShown: false} } />
    
      <AppStack.Screen name="IMC" component={IndexIMC} options={{ headerShown: false} } />

    </AppStack.Navigator>
  )
}