import { useAppSelector } from '@/Store';
import { ThemeState } from '@/Theme/_shared';

const useTheme = (): ThemeState => {
  const { theme } = useAppSelector(state => state.theme);
  return theme;
};

export default useTheme;
