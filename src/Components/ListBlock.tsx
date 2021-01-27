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

const _ListBlock: FC<DiscoveryDataType> = (props) => {
  const {image, title} = props;
  const [isFocused, setFocused] = useState<boolean>(false);

  return (
    <TouchableHighlight
      hasTVPreferredFocus
      onFocus={() => {
        setFocused(true);
      }}
      onBlur={() => setFocused(false)}>
      <View
        style={[
          styles.listBlock.view,
          {
            backgroundColor: isFocused
              ? 'rgba(0, 0,0,0.2)'
              : 'rgba(0, 0, 0, 0.6)',
          },
        ]}>
        <Image source={{uri: image}} style={styles.listBlock.image} />
        <View style={styles.listBlock.textView}>
          <Text style={styles.listBlock.textTitle}>{title}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};
export const ListBlock = memo(_ListBlock);

const styles = {
  listBlock: StyleSheet.create({
    view: {
      height: moderateVerticalScale(100),
      width: (Dimensions.get('window').width - 25) / 2,
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
