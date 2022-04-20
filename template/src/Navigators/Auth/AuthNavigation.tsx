import React from 'react';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack/src/types';

// react-naviation stack
import RootStack from '@/Navigators/Root';

// screen
import { AuthSplash } from '@/Containers/Auth';

const authSplashOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const AuthNavigation: React.ReactElement = (
  <RootStack.Group>
    <RootStack.Screen name="AuthSplash" component={AuthSplash} options={authSplashOptions} />
  </RootStack.Group>
);

export default AuthNavigation;
