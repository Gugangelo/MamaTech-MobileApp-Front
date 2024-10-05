import { createNativeStackNavigator } from "@react-navigation/native-stack";

import IndexWelcome from '../pages/Welcome/Index'
import IndexLogin from '../pages/Login/Index'
import IndexCadastro from '../pages/Cadastro/Index'
import IndexCadastro2 from '../pages/Cadastro/Cadastro2'
import IndexHome from '../pages/Home/Index'
import IndexBottomTabScreen from './BottomTabNavigator/Index'


const Stack = createNativeStackNavigator()

export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={IndexWelcome} options={{ headerShown: false} } />
      <Stack.Screen name="Login" component={IndexLogin} options={{ headerShown: false} } />

      <Stack.Screen name="Cadastro" component={IndexCadastro} options={{ headerShown: false} } />
      <Stack.Screen name="Cadastro2" component={IndexCadastro2} options={{ headerShown: false} } />
      
      <Stack.Screen name="Home" component={IndexHome} options={{ headerShown: false} } />
      <Stack.Screen name="IndexBottomTab" component={IndexBottomTabScreen} options={{ headerShown: false} } />
    </Stack.Navigator>
  )
}