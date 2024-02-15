import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Inicio from '../pages/Inicio'
import ServidoresLinux from '../pages/ServidoresLinux';
import AjustagemMecanica from '../pages/AjustagemMecanica';
import AnalistaDaQualidade from '../pages/AnalistaDaQualidade';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Inicio'
                component={Inicio}
                options={{
                    headerShown:false,}}
            />
            <Stack.Screen
                name='ServidoresLinux'
                component={ServidoresLinux}
            />
            <Stack.Screen
                name='AjustagemMecanica'
                component={AjustagemMecanica}
            />
            <Stack.Screen
                name='AnalistaDaQualidade'
                component={AnalistaDaQualidade}
            />
        </Stack.Navigator>
    )
}