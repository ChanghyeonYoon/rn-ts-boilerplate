import React from 'react';

// options
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs/src/types';

// Tab
import BottomTabStack from '@/Navigators/BottomTab/BottomTab';
import BottomTabBar from '@/Navigators/BottomTab/BottomTabBar';

// Screens
import { HomeScreen, SearchScreen, BookmarkScreen, SettingScreen } from '@/Containers/BottomTab';

const homeScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
};

const searchScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
};

const bookmarkScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
};

const settingScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
};

const BottomTabNavigation = (): React.ReactElement => (
  <BottomTabStack.Navigator tabBar={BottomTabBar}>
    <BottomTabStack.Screen name="Home" component={HomeScreen} options={homeScreenOptions} />
    <BottomTabStack.Screen name="Search" component={SearchScreen} options={searchScreenOptions} />
    <BottomTabStack.Screen name="Bookmark" component={BookmarkScreen} options={bookmarkScreenOptions} />
    <BottomTabStack.Screen name="Setting" component={SettingScreen} options={settingScreenOptions} />
  </BottomTabStack.Navigator>
);

export default BottomTabNavigation;
