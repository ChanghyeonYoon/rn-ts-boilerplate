import { useNavigation } from '@react-navigation/core';

import type { RootStackParamsList } from '@/Navigators/types/root';
import { useCallback } from '@/Hooks';

const useAppNavigation = () => {
  const navigation = useNavigation<any>();
  return navigation;
};

export default useAppNavigation;
