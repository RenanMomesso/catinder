import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Likeds from '../screens/favorites';
import HomeScreen from '../screens/home';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="Likeds"
        component={Likeds}
        options={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          cardOverlayEnabled: true,
          presentation: 'card',
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
