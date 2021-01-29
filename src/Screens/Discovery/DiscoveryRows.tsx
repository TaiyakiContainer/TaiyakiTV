import {useNavigation} from '@react-navigation/native';
import React, {FC, memo} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {ListBlock} from '../../Components/ListBlock';
import {AnilistMediaModel} from '../../Models/Anilist/models';

interface Props {
  title: string;
  data: AnilistMediaModel[];
  potentialCover: (arg0: string | undefined) => void;
}

const _DiscoveryTrendingRow: FC<Props> = (props) => {
  const {data, title, potentialCover} = props;
  const navigation = useNavigation();

  const renderSections = ({item}: {item: AnilistMediaModel}) => {
    //  if (section !== 0) return null;
    return (
      <ListBlock
        data={{
          title: item.title.romaji,
          image: item.coverImage.extraLarge,
          id: item.id,
          bannerImage: item.bannerImage,
        }}
        onFocus={potentialCover}
        onPress={() => navigation.navigate('Detail', {id: item.id})}
      />
    );
  };

  return (
    <View>
      <View>
        <Text style={styles.discovery.sectionTitle}>{title}</Text>
        <FlatList
          style={{borderEndWidth: 1}}
          horizontal
          data={data}
          renderItem={renderSections}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};
export const DiscoveryTrendingRow = memo(
  _DiscoveryTrendingRow,
  (pp: Props, np: Props) => pp.data.length === np.data.length,
);

const styles = {
  discovery: StyleSheet.create({
    pager: {
      flex: 1,
    },
    sectionTitle: {
      fontWeight: 'bold',
      fontSize: moderateScale(21),
      margin: 8,
      color: 'white',
    },
  }),
};
