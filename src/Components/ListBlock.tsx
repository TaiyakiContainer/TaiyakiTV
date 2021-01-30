import React, {FC, memo, useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {DiscoveryDataType} from '../Models/basic';
import { TaiyakiText } from './Base';

interface Props {
  data: DiscoveryDataType;
  onFocus: (arg0: string | undefined) => void;
  onPress?: () => void;
}

const _ListBlock: FC<Props> = (props) => {
  const {image, title, bannerImage} = props.data;
  const [isFocused, setFocused] = useState<boolean>(false);

  return (
    <TouchableHighlight
      underlayColor={'transparent'}
      onPress={props.onPress}
      onFocus={() => {
        setFocused(true);
        props.onFocus(bannerImage);
      }}
      onBlur={() => setFocused(false)}>
      <View
        style={[
          styles.listBlock.view,
          {
            backgroundColor: isFocused ? '#e9e5e5' : 'rgba(0, 0, 0, 0.6)',
          },
        ]}>
        <Image source={{uri: image}} style={styles.listBlock.image} />
        <View style={styles.listBlock.textView}>
          <TaiyakiText
            style={[
              styles.listBlock.textTitle,
              {color: isFocused ? 'black' : 'white'},
            ]}>
            {title}
          </TaiyakiText>
        </View>
      </View>
    </TouchableHighlight>
  );
};
export const ListBlock = memo(
  _ListBlock,
  (np: Props, pp: Props) => np.data.id === pp.data.id,
);

const styles = {
  listBlock: StyleSheet.create({
    view: {
      height: moderateVerticalScale(100),
      width: (Dimensions.get('window').width - 35) / 2,
      margin: moderateScale(10),
      flexDirection: 'row',
    },
    image: {
      height: '100%',
      width: '25%',
    },
    textView: {
      flexShrink: 0.8,
      padding: 8,
    },
    textTitle: {
      color: 'white',
      fontSize: moderateScale(18, 0.2),
      fontWeight: '700',
    },
  }),
};
