import { StyleSheet } from 'react-native';
import type {} from 'react-native';
import { MetricsSize } from '@/Theme/common/Variables';

const styles = StyleSheet.create({
  headerTextWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 32,
    textAlign: 'center',
  },
  socialButtonWrapper: {
    width: '100%',
    height: 48,
    marginTop: 16,
  },
  socialButton: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc',
    borderRadius: 8,
  },
});

export default styles;
