import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

export type ThemeStyle = TextStyle & ViewStyle & ImageStyle;

export type ThemeFontSize = { [key: string]: number };
export type ThemeFontFamily = { [key: string]: string };
export type ThemeMetricsSizes = ThemeFontSize;

export type ThemeFonts = { [key: string]: TextStyle };
export type ThemeColors = { [key: string]: string };
export type ThemeImages = { [key: string]: ImageStyle };
export type ThemeGutters = { [key: string]: ThemeStyle };
export type ThemeLayout = { [key: string]: ThemeStyle };

// Theme
export type ThemeState = {
  FontSize: ThemeFontSize;
  MetricsSize: ThemeMetricsSizes;

  Colors: ThemeColors;
  Fonts: ThemeFonts;
  Gutters: ThemeGutters;
  Images: ThemeImages;
  Layout: ThemeLayout;
};
