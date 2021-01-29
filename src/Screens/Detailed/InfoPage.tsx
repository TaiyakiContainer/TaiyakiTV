import React, {FC} from 'react';
import {View, Image, StyleSheet, Text, ScrollView, Button} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {AnilistMediaModel} from '../../Models/Anilist/models';

interface Props {
  detail: AnilistMediaModel;
}

export const DetailedInfoPage: FC<Props> = (props) => {
  const {coverImage, title, description} = props.detail;

  return (
    <View style={styles.view}>
      <View style={{flexDirection: 'row', marginBottom: moderateScale(12)}}>
        <Image source={{uri: coverImage.extraLarge}} style={styles.image} />
        <View
          style={{
            width: '100%',
            paddingHorizontal: 8,
            flexShrink: 0.8,
            justifyContent: 'space-between',
          }}>
          <View>
            <Text
              numberOfLines={3}
              adjustsFontSizeToFit
              minimumFontScale={0.8}
              style={styles.title}>
              {title.romaji}
            </Text>
            {title.english ? (
              <Text
                numberOfLines={3}
                adjustsFontSizeToFit
                minimumFontScale={0.75}
                style={styles.englishTitle}>
                {title.english}
              </Text>
            ) : null}
          </View>
          <View style={{width: '30%'}}>
          <Button onPress={() => {

}} title={'Watch Now'} />
          </View>
        </View>
      </View>
      <Text style={styles.description}>
        {description ?? 'There is no synopsis for this anime'}
      </Text>
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
  title: {
    fontWeight: '700',
    fontSize: moderateScale(21, 0.2),
    color: 'white',
  },
  description: {
    color: 'white',
    flexShrink: 0.9,
    fontWeight: '600',
  },
  englishTitle: {
    fontWeight: '700',
    fontSize: moderateScale(18, 0.2),
    color: 'rgb(218, 218, 218)',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
