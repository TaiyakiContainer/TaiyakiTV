import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {useAnilistRequest} from '../../Hooks/useAnilist';

export const DiscoveryTrendingRow = () => {
  return (
    <View style={{flexDirection: 'column', height: 250}}>
      <View style={{ height: 50}}>
      <Text>Trending</Text>
      </View>
      <Text >Not Treding</Text>
    </View>
  );
};

const styles = {
  trending: StyleSheet.create({
    title: {
      fontWeight: 'bold',
      fontSize: moderateScale(21, 0.2),
    },
  }),
};
