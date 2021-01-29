import {useNavigation} from '@react-navigation/native';
import React, {FC, useEffect, useState} from 'react';
import {Dimensions, Image, ScrollView, StyleSheet, View} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {BackgroundCover} from '../../Components/BackgroundCover';
import { EpisodeBlocks } from '../../Components/Detailed/EpisodeBlocks';
import { InfoBlock } from '../../Components/Detailed/InfoBlock';
import {SideBar} from '../../Components/Detailed/SideBar';
import {useAnilistRequest} from '../../Hooks/useAnilist';
import {AnilistDetailModel} from '../../Models/Anilist/models';
import {DetailedInfoPage} from './InfoPage';

interface Props {
  route: {params: {id: number}};
}

const DetailedScreen: FC<Props> = (props) => {
  const {id} = props.route.params;
  const navigation = useNavigation();
  const [currentIndex, setIndex] = useState<number>(0);
  const {
    query: {data: detail},
  } = useAnilistRequest<AnilistDetailModel>('Detail', {id: id});
  useEffect(() => {
    if (detail) {
      navigation.setOptions({title: detail.data.Media.title.romaji});
    }
  }, [detail]);

  if (!detail) {
    return <View />;
  }

  const {bannerImage} = detail.data.Media;

  return (
    <View style={styles.view}>
      <BackgroundCover
        image={bannerImage}
        staticMode
        darkColor={'rgb(0,0,0)'}
        lightColor={'rgba(0,0,0,0.4)'}
      />
      <View style={[styles.absolute, {flexDirection: 'row'}]}>
        {/* <SideBar
          index={currentIndex}
          tabNames={['Info', 'Watch', 'Sync']}
          color={'#8735d3'}
          onSelectedIndex={setIndex}
        /> */}
        <ScrollView
          style={{
            padding: moderateScale(12),
            width: Dimensions.get('window').width * 0.84,
          }}>
          <DetailedInfoPage detail={detail.data.Media} />
          <InfoBlock data={detail.data.Media} />
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  image: {
    width: moderateScale(120),
    height: moderateVerticalScale(150),
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default DetailedScreen;
