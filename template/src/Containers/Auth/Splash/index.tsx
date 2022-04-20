import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { useTheme } from '@/Hooks';

import useSplash from './useSplash';
import styles from './styles';

const SearchScreen = (): React.ReactElement => {
  const { Layout, Gutters } = useTheme();
  const { onTestLogin } = useSplash();

  return (
    <View style={[Layout.fill, Gutters.regularHPadding, Gutters.boldVPadding]}>
      <View style={styles.headerTextWrapper}>
        <Text style={styles.headerText}>HelloWorld</Text>
      </View>

      <TouchableOpacity style={[styles.socialButtonWrapper]} onPress={onTestLogin}>
        <View style={[styles.socialButton, { backgroundColor: 'transparent' }]}>
          <Text>Test Login</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButtonWrapper}>
        <View style={styles.socialButton}>
          <Text>Google Login</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.socialButtonWrapper}>
        <View style={styles.socialButton}>
          <Text>Apple Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SearchScreen;
