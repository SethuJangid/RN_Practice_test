import React, { useEffect } from 'react';
import { NativeBaseProvider, Box } from "native-base";
import Navigation from './src/navigations';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './src/redux/store/store';
import { Text } from 'react-native';



const App = () => {

  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <NativeBaseProvider>
        <Navigation />
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

