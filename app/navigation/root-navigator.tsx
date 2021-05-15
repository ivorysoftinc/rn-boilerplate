import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import { HomeStackNavigator } from './stacks';
import { InitialScreen } from '../screens';
import { navigationRef } from '../services/navigator';
import { DEFAULT_STACK_OPTIONS } from './options';

type RootParams = {
  Initial: undefined;
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootParams>();

const RootNavigator = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator screenOptions={DEFAULT_STACK_OPTIONS}>
      <Stack.Screen name="Initial" component={InitialScreen} />
      <Stack.Screen name="Home" component={HomeStackNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default RootNavigator;
