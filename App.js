import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/Login';
import RegistrationScreen from './screens/Registration';

const Stack = createStackNavigator();

const App = () =>
{
  return(
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="LoginScreen" component={LoginScreen} />
    <Stack.Screen name="RegistrationScreen" component={RegistrationScreen} />
    
  </Stack.Navigator>
</NavigationContainer>
  );

}
export default App;
