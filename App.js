import React from 'react';
import AppNavigation from './src/navigations/AppNavigation';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '@redux/store';

import { useEffect } from 'react';
import { LogBox } from 'react-native';

const App = () => {


useEffect(() => {
  LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
    'VirtualizedLists should never be nested'
  ]);
}, []);

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigation />
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
