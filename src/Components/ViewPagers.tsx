import React, { useEffect } from 'react';
import {ActivityIndicator, Dimensions, Text, View} from 'react-native';
import {StyleSheet} from 'react-native';
import TabbedViewPager from 'react-native-tabbed-view-pager-android';
import {useQuery} from 'react-query';
import {useAnilistRequest} from '../Hooks/useAnilist';
import {AnilistPagedFrontModel} from '../Models/Anilist/models';
import {DiscoveryDataType} from '../Models/basic';
import {DiscoveryRow, DiscoveryTrendingRow} from '../Screens/Discovery/DiscoveryRows';

export const DiscoveryViewPager = () => {
  
  



  return (
    <TabbedViewPager
      style={styles.discovery.pager}
      tabTextColor={'grey'}
      tabSelectedTextColor={'white'}
      scrollEnabled={false}
      tabMode={'scrollable'}
      tabGravity={'center'}
      tabNames={['Discovery', 'Silk', 'Rainbows', 'Marbles', 'Drums']}>
      
      
      {/* <View style={{flexDirection: 'column', height: 250}}>
      <View style={{ height: 50}}>
      <Text >Trending</Text>
      </View>
      <Text >Not Treding</Text>
    </View> */}
    {DiscoveryTrendingRow()}
    </TabbedViewPager>
  );
};

const styles = {
  discovery: StyleSheet.create({
    pager: {
      flex: 1
    },
  }),
};
