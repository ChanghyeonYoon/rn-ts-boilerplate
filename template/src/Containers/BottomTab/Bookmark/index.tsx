import React from 'react';
import { View, Text } from 'react-native';

import { useTheme } from '@/Hooks';
import styles from './styles';

const BookmarkScreen = (): React.ReactElement => {
  const { Layout, Fonts, Gutters } = useTheme();

  return (
    <View style={[Layout.fill]}>
      <Text style={Layout.fill}>Bookmark</Text>
    </View>
  );
};

export default BookmarkScreen;
