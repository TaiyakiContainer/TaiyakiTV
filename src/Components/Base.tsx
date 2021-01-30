/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {StyleProp, Text, TextStyle, View, ViewStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export const ThemedView: FC<{style?: StyleProp<ViewStyle>}> = (props) => {
  return <View style={[props.style, {flex: 1}]}>{props.children}</View>;
};

export const TaiyakiText: FC<{
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
}> = (props) => {
  return (
    <Text
      style={[
        {
          fontFamily: 'Poppins',
          fontSize: moderateScale(13),
          color: 'white',
        },
        props.style,
      ]}
      numberOfLines={props.numberOfLines}>
      {props.children}
    </Text>
  );
};
