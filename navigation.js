import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from './screens/HomeScreen';
import Menu from './screens/Menu';
const Stack = createNativeStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}