import React from 'react';
import {StyleSheet, View} from 'react-native';
import DrawerNavigation from './DrawerNavigation';
import AuthNavigation from './AuthNavigation';

const RootNavigation = () => {
  const isLogin = false;

  return isLogin ? <DrawerNavigation /> : <AuthNavigation />;
};

export default RootNavigation;
