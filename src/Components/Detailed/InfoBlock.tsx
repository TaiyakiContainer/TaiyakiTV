/* eslint-disable react-native/no-inline-styles */
import React, { FC } from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import { AnilistMediaModel } from '../../Models/Anilist/models';

interface Props {
  data: AnilistMediaModel;
}

export const InfoBlock: FC<Props> = (props) => {
  const {data} = props;
  const {popularity, status, countryOfOrigin, hashtag, trending} = data;
  const Rows = (title: string, data: string) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: moderateScale(8),
          marginVertical: moderateScale(8),
        }}>
        <Text style={styles.subTitle}>{title}</Text>
        <Text style={styles.dataTitle}>{data}</Text>
      </View>
    );
  };
  return (
    <View style={styles.view}>
      {Rows('Status', status)}
      {Rows('Trending', `# ${trending ?? 0}`)}
      {Rows('Popularity', `${(popularity ?? 0).toLocaleString([]) ?? 'N/A'}`)}
      {Rows('Country of Origin', countryOfOrigin ?? 'N/A')}
      {Rows('Hashtag', hashtag ?? 'N/A')}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
      alignSelf: 'center',
    width: Dimensions.get('window').width * 0.94,
    padding: moderateScale(10),
    backgroundColor: 'rgba(255,255,255, 0.85)',
    marginVertical: moderateVerticalScale(12),
    borderRadius: moderateScale(6),
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: moderateScale(19, 0.2),
  },
  dataTitle: {
    fontWeight: 'bold',
    fontSize: moderateScale(18, 0.2),
  },
});
