import React from 'react';
import { View, Text } from 'react-native';

import { useTheme } from '@/Hooks';
import styles from './styles';

const SettingScreen = (): React.ReactElement => {
  const { Layout, Fonts, Gutters } = useTheme();

  return (
    <View style={[Layout.fill]}>
      <Text style={Layout.fill}>Setting</Text>
    </View>
  );
};

export default SettingScreen;
