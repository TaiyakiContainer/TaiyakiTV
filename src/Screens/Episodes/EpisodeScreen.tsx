import React from 'react';
import {StyleSheet, Button, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {BackgroundCover} from '../../Components/BackgroundCover';
import {TaiyakiText} from '../../Components/Base';

export const EpisodesScreen = () => {
  return (
    <View style={styles.view}>
      <BackgroundCover
        image={'https://simkl.net/episodes/10/1087128073dd584c30_w.jpg'}
        staticMode
        darkColor={'rgba(0,0,0,0.8)'}
      />
      <View style={styles.absolute}>
        <View>
          <TaiyakiText style={styles.episodeNum}>Episode 3</TaiyakiText>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TaiyakiText style={styles.episodeTitle}>A Bare Knife</TaiyakiText>
            <View style={{alignItems: 'flex-end'}}>
              <Button color={'red'} title={'Cancel'} onPress={() => {}} />
              <View style={{height: 10}} />
              <Button color={'orange'} title={'Episode 4'} onPress={() => {}} />
            </View>
          </View>
        </View>
        <View>
          <TaiyakiText style={styles.description}>
            A pair of mysterious voices lead 14-year-old Ai Ohto to a strange
            egg, promising her a chance at what she wants most. What`s inside
            the egg? And what does Ai really want?
          </TaiyakiText>
          <View style={{flexDirection: 'row'}}>
            <TaiyakiText style={styles.source}>Vidstreaming</TaiyakiText>
            <TaiyakiText style={{marginHorizontal: moderateScale(15)}}>
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
    flex: 1,
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
  episodeNum: {
    fontWeight: '700',
    fontSize: moderateScale(17, 0.2),
  },
  episodeTitle: {
    fontWeight: 'bold',
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
    fontWeight: 'bold',
  },
});
