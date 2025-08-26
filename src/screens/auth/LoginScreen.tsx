import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface LoginScreenProps {}

const LoginScreen = ({}: LoginScreenProps) => {
  return (
    <SafeAreaView>
      <Text>로그인 스크린</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
