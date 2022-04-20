import React from 'react';
import { View, Text } from 'react-native';

import { useTheme } from '@/Hooks';
import { Carousel } from '@/Components';

import styles from './styles';

const HomeScreen = (): React.ReactElement => {
  const { Layout, Gutters } = useTheme();

  return (
    <View style={[Layout.fill, Gutters.boldVPadding]}>
      <Text style={styles.screenText}>Home</Text>
      <Carousel />
    </View>
  );
};

export default HomeScreen;
