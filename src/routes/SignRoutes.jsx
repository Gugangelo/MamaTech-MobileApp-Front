import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import IndexWelcome from '../pages/Welcome/Index'
import IndexLogin from '../pages/Login/Index'
import IndexCadastro from '../pages/Cadastro/Index'
import IndexCadastro2 from '../pages/Cadastro/Cadastro2'


const SignStack = createNativeStackNavigator()

export default function SignRoutes() {
  return (
    <SignStack.Navigator>
      <SignStack.Screen name="Welcome" component={IndexWelcome} options={{ headerShown: false} } />
      <SignStack.Screen name="Login" component={IndexLogin} options={{ headerShown: false} } />
      
      <SignStack.Screen name="Cadastro" component={IndexCadastro} options={{ headerShown: false} } />
      <SignStack.Screen name="Cadastro2" component={IndexCadastro2} options={{ headerShown: false} } />
      
    </SignStack.Navigator>
  )
}