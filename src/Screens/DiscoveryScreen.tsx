import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ThemedView} from '../Components/Base';
import { DiscoveryViewPager } from '../Components/ViewPagers';

const DiscoveryScreen = () => {
  return (
    
      <DiscoveryViewPager />
    
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  //TODO: Use a gradient instead
  backgroundView: {
      backgroundColor: 'rgba(0,0,0,0.4)'
  }
});

export default DiscoveryScreen;
