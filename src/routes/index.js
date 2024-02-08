import { Button, StyleSheet } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import Inicio from '../pages/Inicio';
import Contatos from '../pages/Contatos'
import Cursos from '../pages/Cursos'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator screenOptions={
      {
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'grey',
      }
    }>
      <Tab.Screen
        name='Inicio'
        component={Inicio}

        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name='home' color={color} size={size}></FontAwesome>
          },
          headerStyle: {
            backgroundColor: '#121212',
          },
        }}
      />

      <Tab.Screen
        name='Cursos'
        component={Cursos}
        options={{
          headerTintColor: '#d2f7ff',
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name='graduation-cap' color={color} size={size}></FontAwesome>
          },
          headerStyle: {
            backgroundColor: '#121212',
          },
        }}
      />

      <Tab.Screen
        name='Contatos'
        component={Contatos}
        options={{
          headerTintColor: '#d2f7ff',
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name='mobile' color={color} size={size}></FontAwesome>
          },
          headerStyle: {
            backgroundColor: '#121212',
          },
        }}
      />
    </Tab.Navigator>

  )
}
