/* eslint-disable react-native/no-inline-styles */
import React, {createRef, FC, useEffect, useRef, useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  ScrollView,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {BackgroundCover} from '../../Components/BackgroundCover';
import {TaiyakiText} from '../../Components/Base';
import {SimklEpisodesModel} from '../../Models/SIMKL/model';

interface Props {
  route: {params: {data: SimklEpisodesModel[]}};
}

interface EpisodeItemProps {
  episode: SimklEpisodesModel;
}

export const EpisodesScreen: FC<Props> = (props) => {
  const {data} = props.route.params;
  const scrollViewController = createRef<ScrollView>();

  const [page, setPage] = useState<number>(0);
  const [prePage, setNewPage] = useState<number>(0);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const newIndex = Number(
      event.nativeEvent.contentOffset.x / Dimensions.get('window').width,
    );
    setPage(newIndex);
  };

  useEffect(() => {
    scrollViewController.current?.scrollTo({
      x: prePage * Dimensions.get('window').width,
      animated: true,
    });
  }, [prePage]);

  return (
    <>
      <ScrollView
        ref={scrollViewController}
        style={{
          height: Dimensions.get('window').height,
          width: Dimensions.get('window').width,
        }}
        horizontal
        scrollEventThrottle={5}
        onScroll={onScroll}
        pagingEnabled>
        {data.map((i) => (
          <EpisodeItems episode={i} />
        ))}
        {/* <FlatList
        style={{flex: 1, backgroundColor: 'pink'}}
        data={data}
        renderItem={_renderItem}
        keyExtractor={(item) => item.ids.simkl_id.toString()}
      /> */}
      </ScrollView>
      <View style={styles.absoluteNative}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: moderateScale(12),
            width: Dimensions.get('window').width,
          }}>
          {page !== 0 ? (
            <Icon
              name={'chevron-left'}
              type={'MaterialCommunityIcons'}
              color={'white'}
              size={moderateScale(75)}
              onPress={() => {
                // setIndex((i) => i - 1);
                const newIndex = page - 1;
                if (newIndex < 0) return;
                scrollViewController.current?.scrollTo({
                  x: newIndex * Dimensions.get('window').width,
                  animated: true,
                });
              }}
            />
          ) : (
            <View />
          )}
          {page < data.length ? (
            <Icon
              name={'chevron-right'}
              type={'MaterialCommunityIcons'}
              color={'white'}
              size={moderateScale(75)}
              onPress={() => {
                // setIndex((i) => i + 1);
                const newIndex = prePage + 1;
                if (newIndex >= data.length) return;
                // scrollViewController.current?.scrollTo({
                //   x: newIndex * Dimensions.get('window').width,
                //   animated: true,
                // });
                setNewPage(newIndex);
              }}
            />
          ) : (
            <View />
          )}
        </View>
      </View>
    </>
  );
};

const EpisodeItems: FC<EpisodeItemProps> = (props) => {
  const {episode} = props;
  return (
    <View style={styles.view}>
      <BackgroundCover
        image={episode.img}
        staticMode
        darkColor={'rgba(0,0,0,0.8)'}
      />
      <View style={styles.absolute}>
        <View>
          <TaiyakiText fontWeight={'Medium'} style={styles.episodeNum}>
            Episode {episode.episode}
          </TaiyakiText>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TaiyakiText fontWeight={'Black'} style={styles.episodeTitle}>
              {episode.title}
            </TaiyakiText>
          </View>
        </View>
        <View>
          <ScrollView style={{maxHeight: moderateVerticalScale(150)}}>
            <TaiyakiText style={styles.description}>
              {episode.description ?? 'This episode has no description'}
            </TaiyakiText>
          </ScrollView>
          <View style={{flexDirection: 'row'}}>
            <TaiyakiText fontWeight={'Bold'} style={styles.source}>
              Vidstreaming
            </TaiyakiText>
            <TaiyakiText
              fontWeight={'Medium'}
              style={{marginHorizontal: moderateScale(15)}}>
              •
            </TaiyakiText>
            <TaiyakiText>~ 25 mins</TaiyakiText>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: moderateScale(12.75),
    justifyContent: 'space-between',
  },
  absoluteNative: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  episodeNum: {
    fontSize: moderateScale(17, 0.2),
  },
  episodeTitle: {
    fontSize: moderateScale(25, 0.22),
  },
  description: {
    marginBottom: moderateScale(10),
  },
  cancel: {
    color: '#e95555',
    fontWeight: 'bold',
  },
  source: {
    color: '#ca9249',
  },
});
