import React, {FC, memo, useEffect, useRef} from 'react';
import {
  Animated,
  Dimensions,
  Easing,
  Image,
  LogBox,
  StyleSheet,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Burns from 'react-native-ken-burns';

LogBox.ignoreLogs(['Setting a timer']);
interface Props {
  image?: string;
}

const _BackgroundCover: FC<Props> = (props) => {
  const {image} = props;
  const controller = useRef(new Animated.Value(0)).current;

  const oldImage = useRef<string | undefined>();

  const fade = controller.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const animation = Animated.timing(controller, {
    toValue: 1,
    useNativeDriver: true,
    easing: Easing.out(Easing.ease),
    duration: 1500,
  });

  useEffect(() => {
    oldImage.current = image;
    _imageOnLoad();
    //controller.setValue(0);
    //   _imageOnLoad();
    return () => {
      controller.setValue(0);
      //animation.stop();
    };
  }, [image]);

  const _imageOnLoad = () => {
    animation.start();
  };

  return (
    <View style={[styles.view, {backgroundColor: 'black'}]}>
      {image ? (
        <View style={styles.view}>
          <Burns key={image.slice(12)} style={[styles.absolute, {opacity: 1}]}>
            <Animated.Image
              source={{uri: oldImage.current}}
              onLoad={_imageOnLoad}
              style={[styles.view, {opacity: fade}]}
            />
          </Burns>
          <Burns
            key={image.slice(18)}
            duration={4 * 10000}
            min={1}
            style={[styles.absolute]}>
            <Animated.Image
              source={{uri: image}}
              onLoad={_imageOnLoad}
              style={[styles.view, {opacity: controller}]}
            />
          </Burns>
        </View>
      ) : null}
      <View style={styles.absolute}>
        <LinearGradient
          style={styles.view}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['rgba(0,0,0,0.55)', 'rgba(0,0,0,0.06)']}
        />
      </View>
    </View>
  );
};

export const BackgroundCover = memo(_BackgroundCover, (pp: Props, np: Props) => pp.image === np.image);

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
  },
});
