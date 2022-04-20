import React from 'react';

// react-navigation stack options
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack/src/types';

import RootStack from '@/Navigators/Root';
import BottomTabNavigation from '@/Navigators/BottomTab/BottomTabNavigation';
import AuthNavigation from '@/Navigators/Auth/AuthNavigation';

const bottomTabOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const RootNavigator = (): React.ReactElement => {
  return (
    <RootStack.Navigator initialRouteName="AuthSplash">
      <RootStack.Group>
        {AuthNavigation}
        <RootStack.Screen name="BottomTab" component={BottomTabNavigation} options={bottomTabOptions} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;
