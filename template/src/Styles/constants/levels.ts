import type { ViewStyle } from 'react-native';

const createLevels = (index: number): ViewStyle => ({
  zIndex: index,
  elevation: index,
});

const LEVELS = {
  MODAL: createLevels(50000),
  FOOTER: createLevels(10000),
};

export default LEVELS;
