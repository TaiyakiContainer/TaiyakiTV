import React, {FC} from 'react';
import {StyleProp, View, ViewProps} from 'react-native';

export const ThemedView: FC<{style?: StyleProp<ViewProps>}> = (props) => {
  return <View style={[props.style, {flex: 1}]}>{props.children}</View>;
};
