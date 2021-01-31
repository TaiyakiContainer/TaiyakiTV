/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {StyleProp, Text, TextStyle, View, ViewStyle} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export const ThemedView: FC<{style?: StyleProp<ViewStyle>}> = (props) => {
  return <View style={[props.style, {flex: 1}]}>{props.children}</View>;
};

type TextWeight = 'Regular' | 'Black' | 'Bold' | 'ExtraBold' | 'Italic' | 'Light' | 'Medium' | 'SemiBold' | 'Thin' | 'ThinItalic' | 'LightItalic' | 'ExtraLight';

export const TaiyakiText: FC<{
  fontWeight?: TextWeight;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
}> = (props) => {
  const TextDissolve = (): string | undefined => {
    if (!props.fontWeight) return 'Poppins-Regular';
    return 'Poppins-' + props.fontWeight;
  };

  return (
    <Text
      style={[
        {
          fontFamily: TextDissolve(),
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
