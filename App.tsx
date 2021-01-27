import React from 'react';
import {Text, View} from 'react-native';
import DiscoveryScreen from './src/Screens/DiscoveryScreen';
import {AppProvider} from './src/Store/store';
import {QueryClient, QueryClientProvider} from 'react-query';

const App = () => {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <AppProvider>
        <DiscoveryScreen />
      </AppProvider>
    </QueryClientProvider>
  );
};

export default App;
