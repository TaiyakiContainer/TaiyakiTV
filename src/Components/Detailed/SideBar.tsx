import React, {FC, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

interface Props {
  index: number;
  tabNames: string[];
  color?: string;
  onSelectedIndex: (arg0: number) => void;
}

export const SideBar: FC<Props> = (props) => {
  const {tabNames, color, index, onSelectedIndex} = props;

  return (
    <View style={[styles.view, {backgroundColor: 'rgba(135, 53, 211, 0.32)'}]}>
      {tabNames.map((i, iIndex) => {
        const [isFocused, setFocused] = useState<boolean>(iIndex === index);
        return (
          <TouchableHighlight
          hasTVPreferredFocus={iIndex === 0}
            key={i}
            onFocus={() => setFocused(true)}
            onPress={() => {
                onSelectedIndex(iIndex);
            }}
            onBlur={() => setFocused(false)}>
            <View
              style={{
                backgroundColor: isFocused ? 'rgba(0,0,0,0.4)' : 'transparent',
              }}>
              <Text
                style={[
                  styles.titles,
                  {color: iIndex === index ? 'white' : 'grey'},
                ]}>
                {iIndex === index ? '• ' : ''} {i}
              </Text>
            </View>
          </TouchableHighlight>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width * 0.16,
  },
  titles: {
    marginHorizontal: 4,
    marginVertical: 8,
    fontSize: moderateScale(18),
    fontWeight: '700',
  },
});
