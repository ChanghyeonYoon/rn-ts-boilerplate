import { StyleSheet } from 'react-native';
import { ThemeGutters } from '@/Theme/_shared';
import { MetricsSize } from './Variables';

const Gutters: ThemeGutters = StyleSheet.create({
  ...Object.entries(MetricsSize).reduce(
    (acc, [key, value]) => ({
      ...acc,
      /* Margins */
      [`${key}BMargin`]: {
        marginBottom: value,
      },
      [`${key}TMargin`]: {
        marginTop: value,
      },
      [`${key}RMargin`]: {
        marginRight: value,
      },
      [`${key}LMargin`]: {
        marginLeft: value,
      },
      [`${key}VMargin`]: {
        marginVertical: value,
      },
      [`${key}HMargin`]: {
        marginHorizontal: value,
      },
      [`${key}Margin`]: {
        marginBottom: value,
      },
      /* Paddings */
      [`${key}BPadding`]: {
        paddingBottom: value,
      },
      [`${key}TPadding`]: {
        paddingTop: value,
      },
      [`${key}RPadding`]: {
        paddingRight: value,
      },
      [`${key}LPadding`]: {
        paddingLeft: value,
      },
      [`${key}VPadding`]: {
        paddingVertical: value,
      },
      [`${key}HPadding`]: {
        paddingHorizontal: value,
      },
      [`${key}Padding`]: {
        padding: value,
      },
    }),
    {},
  ),
});

export default Gutters;
