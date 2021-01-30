import React from 'react';
import {AppProvider} from './src/Store/store';
import {QueryClient, QueryClientProvider} from 'react-query';
import Navigator from './src/Components/Navigator';
import {UIManager} from 'react-native';

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const App = () => {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <AppProvider>
        <Navigator />
      </AppProvider>
    </QueryClientProvider>
  );
};

export default App;
