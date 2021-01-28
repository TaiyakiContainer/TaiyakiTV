import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DiscoveryScreen from '../Screens/DiscoveryScreen';
import DetailedScreen from '../Screens/Detailed/DetailedScreen';

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
        <Stack.Screen name={'Detail'} component={DetailedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
