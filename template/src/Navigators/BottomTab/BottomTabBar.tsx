import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ViewStyle } from 'react-native';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types';

const styles = StyleSheet.create({
  tabBarList: {
    height: 60,
    flexDirection: 'row',
    backgroundColor: '#ccc',
  } as ViewStyle,
  tabBarItem: {
    flex: 1,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabBarItemText: {
    flex: 1,
    textAlign: 'center',
  },
});

const getBottomTabBarLabel = (index: number): string => {
  switch (index) {
    case 0:
      return '홈';
    case 1:
      return '검색';
    case 2:
      return '북마크';
    case 3:
      return '설정';
    default:
      return '-';
  }
};

const BottomTabBar = ({ state, descriptors, navigation, insets }: BottomTabBarProps): React.ReactElement => {
  const tabBarList = state.routes.map((route, index) => {
    const { options } = descriptors[route.key];
    const label = getBottomTabBarLabel(index);
    const isFocused = state.index === index;

    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        // The `merge: true` option makes sure that the params inside the tab screen are preserved
        navigation.navigate({ name: route.name, merge: true } as any);
      }
    };

    const tabBarItemStyle = {
      ...styles.tabBarItemText,
      color: isFocused ? '#673ab7' : '#222',
    };

    return (
      <TouchableOpacity
        key={index}
        style={styles.tabBarItem}
        accessibilityRole="button"
        accessibilityState={isFocused ? { selected: true } : {}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options.tabBarTestID}
        onPress={onPress}
      >
        <Text style={tabBarItemStyle}>{label}</Text>
      </TouchableOpacity>
    );
  });

  return <View style={styles.tabBarList}>{tabBarList}</View>;
};

export default BottomTabBar;
