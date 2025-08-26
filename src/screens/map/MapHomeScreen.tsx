import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import DrawerButton from '../../components/DrawerButton';

interface MapHomeScreenProps {}

const MapHomeScreen = ({}: MapHomeScreenProps) => {
  return (
    <SafeAreaView>
      <Text>지도 스크린</Text>
      <DrawerButton />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default MapHomeScreen;
