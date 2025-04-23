import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../HomeScreen';
import AScreen from '../AScreen';
import BScreen from '../BScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="AScreen" component={AScreen} />
            <Stack.Screen name="BScreen" component={BScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;