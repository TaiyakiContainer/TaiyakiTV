import {useNavigation} from '@react-navigation/native';
import React, {FC, useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useAnilistRequest} from '../../Hooks/useAnilist';
import {AnilistDetailModel} from '../../Models/Anilist/models';

interface Props {
  route: {params: {id: number}};
}

const DetailedScreen: FC<Props> = (props) => {
  const {id} = props.route.params;
  const navigation = useNavigation();
  const {
    query: {data: detail},
  } = useAnilistRequest<AnilistDetailModel>('Detail', {id: id});
  useEffect(() => {
    //navigation.setOptions({title: })
    if (detail) {
      navigation.setOptions({title: detail.data.Media.title.romaji});
    }
  }, [detail]);

  return <View style={styles.view}>
      
  </View>;
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
});

export default DetailedScreen;
