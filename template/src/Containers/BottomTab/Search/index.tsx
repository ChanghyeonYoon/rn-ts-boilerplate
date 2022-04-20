import React from 'react';
import { View, Text } from 'react-native';

import { useTheme } from '@/Hooks';
import styles from './styles';

const SearchScreen = (): React.ReactElement => {
  const { Layout, Fonts, Gutters } = useTheme();

  return (
    <View style={[Layout.fill]}>
      <Text style={Layout.fill}>Search</Text>
    </View>
  );
};

export default SearchScreen;
