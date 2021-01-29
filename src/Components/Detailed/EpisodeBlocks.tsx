import React, {FC} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {SimklEpisodes} from '../../Models/SIMKL/model';

interface Props {
  data: SimklEpisodes[];
}

interface CardProps {
  episodeDetails: SimklEpisodes;
}

export const EpisodeBlocks: FC<Props> = (props) => {
  const {data} = props;
  const _renderItem = ({item}: {item: SimklEpisodes}) => (
    <EpisodeCards episodeDetails={item} />
  );

  return (
    <View style={styles.view}>
      <FlatList data={data} renderItem={_renderItem} horizontal />
    </View>
  );
};

const EpisodeCards: FC<CardProps> = (props) => {
  const {episodeDetails} = props;
  return (
    <View style={styles.episodeView}>
      <Image
        source={
          episodeDetails.img
            ? {uri: episodeDetails.img}
            : require('../../Assets/icon.png')
        }
        style={styles.episodeImage}
      />
      <Text>{episodeDetails.episode}</Text>
      <Text style={styles.episodeTitle}>{episodeDetails.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    height: moderateVerticalScale(325),
    width: '100%',
},
episodeView: {
    overflow: 'hidden',
    width: Dimensions.get('window').width / 3,
    height: '88%',
    marginHorizontal: moderateScale(12),
    backgroundColor: 'white',
    borderRadius: moderateScale(6),
  },
  episodeImage: {
    width: '100%',
    height: '80%',
  },
  episodeTitle: {
    fontWeight: '800',
    fontSize: moderateScale(18),
  },
});
