import React, {memo, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  SectionList,
  Text,
  View,
} from 'react-native';
import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {useAnilistRequest} from '../Hooks/useAnilist';
import {AnilistPagedFrontModel} from '../Models/Anilist/models';
import {DiscoveryTrendingRow} from '../Screens/Discovery/DiscoveryRows';
import {BackgroundCover} from './BackgroundCover';
export const DiscoveryViewPager = () => {
  const {
    query: {data: trending},
  } = useAnilistRequest<AnilistPagedFrontModel>('Trending');
  const [currentCover, setCurrentCover] = useState<string | undefined>(
    trending?.data.Page.media[0].bannerImage,
  );
  const {
    query: {data: popular},
  } = useAnilistRequest<AnilistPagedFrontModel>('Popular');

  useEffect(() => {
    if (trending && !currentCover) {
      setCurrentCover(trending.data.Page.media[0].bannerImage);
    }
  }, [trending]);

  return (
    <View style={styles.discovery.pager}>
      <BackgroundCover image={currentCover} />
      <View style={styles.discovery.absolute}>
        <DiscoveryTrendingRow
          title={'Trending'}
          data={trending?.data.Page.media ?? []}
          potentialCover={setCurrentCover}
        />
        <DiscoveryTrendingRow
          title={'Popular Anime'}
          data={popular?.data.Page.media ?? []}
          potentialCover={setCurrentCover}
        />
      </View>
    </View>
  );
};

const styles = {
  discovery: StyleSheet.create({
    pager: {
      flex: 1,
    },
    sectionTitle: {
      fontWeight: 'bold',
      fontSize: moderateScale(21),
      margin: 8,
    },
    absolute: {
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      position: 'absolute',
    },
  }),
};
