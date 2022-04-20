import React from 'react';
import { View, Text } from 'react-native';
import ReactCarousel from 'react-native-snap-carousel';

import { STYLE_DIMENSIONS } from '@/Styles';
import styles from './styles';

const exampleItems = [
  {
    title: 'Item 1',
    text: 'Text 1',
  },
  {
    title: 'Item 2',
    text: 'Text 2',
  },
  {
    title: 'Item 3',
    text: 'Text 3',
  },
  {
    title: 'Item 4',
    text: 'Text 4',
  },
  {
    title: 'Item 5',
    text: 'Text 5',
  },
];

const Carousel = (): React.ReactElement => {
  const renderItem = (item: any) => {
    return (
      <View
        style={{
          height: STYLE_DIMENSIONS.screenWidth / 2,
          backgroundColor: 'floralwhite',
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: '500' }}>{(item.index as number) + 1}</Text>
      </View>
    );
  };

  return (
    <View style={styles.carouselWrapper}>
      <ReactCarousel
        layout={'default'}
        firstItem={2}
        sliderWidth={STYLE_DIMENSIONS.screenWidth}
        itemWidth={STYLE_DIMENSIONS.screenWidth / 2}
        data={exampleItems}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Carousel;
