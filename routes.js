import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/login';
import Home from './pages/home';
import Cadastro from './pages/cadastro';


const Stack = createStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login"
                component={Login}  
                options={{ headerShown: false }}               
                 />

            <Stack.Screen
                name="Home"
                component={Home}   
                //options={{ headerShown: false }}               
                />
            <Stack.Screen
                name="Cadastro"
                component={Cadastro}   
                options={{ headerShown: false }}               
                />
        </Stack.Navigator>
        )
} 