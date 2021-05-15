import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { HomeScreen } from '../../screens';
import { DEFAULT_STACK_OPTIONS } from '../options';

type HomeStackParams = {
  Home: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParams>();

export const HomeStackNavigator = () => (
  <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
    <Stack.Screen name="Home" component={HomeScreen} />
  </Stack.Navigator>
);
