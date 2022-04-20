import { useCallback, useAppNavigation } from '@/Hooks';

type TuseSplash = {
  onTestLogin(): void;
};

const useSplash = (): TuseSplash => {
  const navigation = useAppNavigation();

  const onTestLogin = useCallback(() => {
    navigation.navigate('BottomTab');
  }, [navigation]);

  return { onTestLogin };
};

export default useSplash;
