import { StyleSheet } from 'react-native';
import { ThemeFonts } from '@/Theme/_shared';
import { FontSize, FontFamily, Colors } from './Variables';

const Fonts: ThemeFonts = StyleSheet.create({
  textSmall: {
    fontSize: FontSize.small,
    color: Colors.text,
  },
  textRegular: {
    fontSize: FontSize.regular,
    color: Colors.text,
  },
  textLarge: {
    fontSize: FontSize.large,
    color: Colors.text,
  },
  titleSmall: {
    fontSize: FontSize.small * 2,
    fontWeight: 'bold',
    color: Colors.text,
  },
  titleRegular: {
    fontSize: FontSize.regular * 2,
    fontWeight: 'bold',
    color: Colors.text,
  },
  titleLarge: {
    fontSize: FontSize.large * 2,
    fontWeight: 'bold',
    color: Colors.text,
  },
  textCenter: {
    textAlign: 'center',
  },
  textJustify: {
    textAlign: 'justify',
  },
  textLeft: {
    textAlign: 'left',
  },
  textRight: {
    textAlign: 'right',
  },
  interBold: {
    fontFamily: FontFamily.interBold,
  },
  interRegular: {
    fontFamily: FontFamily.interRegular,
  },
  interLight: {
    fontFamily: FontFamily.interLight,
  },
});

export default Fonts;
