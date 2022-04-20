import { ThemeFontSize, ThemeColors, ThemeMetricsSizes, ThemeFontFamily } from '@/Theme/_shared';

export const FontSize: ThemeFontSize = {
  small: 14,
  regular: 16,
  large: 24,
};

export const FontFamily: ThemeFontFamily = {
  interBold: 'Inter-Bold',
  interRegular: 'Inter-Regular',
  interLight: 'Inter-Light',
};

export const Colors: ThemeColors = {
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#FFFFFF',
  white: '#ffffff',
  text: '#212529',
  primary: '#4f4f4f',
  success: '#28a745',
  error: '#dc3545',
};

const light = 4;
const thin = light * 3; // 12
const regular = light * 4; // 16
const medium = light * 5; // 20
const bold = light * 6;

export const MetricsSize: ThemeMetricsSizes = {
  light,
  thin,
  regular,
  medium,
  bold,
};
