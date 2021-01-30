import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DiscoveryScreen from '../Screens/DiscoveryScreen';
import DetailedScreen from '../Screens/Detailed/DetailedScreen';
import { EpisodesScreen } from '../Screens/Episodes/EpisodeScreen';

const Navigator = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Discover'}
          component={DiscoveryScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'Detail'}
          component={DetailedScreen}
          options={{
            title: 'Loading ...',
            headerStyle: {backgroundColor: 'rgba(135, 53, 211, 0.32)'},
            headerTitleStyle: {color: 'white'},
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name={'Episodes'}
          component={EpisodesScreen}
          options={{
            title: 'Loading ...',
            headerShown: false,
            headerStyle: {backgroundColor: 'rgba(135, 53, 211, 0.32)'},
            headerTitleStyle: {color: 'white'},
            headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
