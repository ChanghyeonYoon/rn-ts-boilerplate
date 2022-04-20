import React from 'react';
import 'react-native-gesture-handler';

// store
import { Provider } from 'react-redux';
import store from '@/Store';

// navigator
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from '@/Navigators/RootNavigator';

const App = (): React.ReactElement => (
  <Provider store={store}>
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  </Provider>
);

export default App;
