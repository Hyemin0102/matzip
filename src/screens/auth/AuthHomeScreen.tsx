import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {AuthStackParamList} from '../../types/navigation';
import CustomButton from '@/components/CustomButton';

type Navigation = StackNavigationProp<AuthStackParamList>;

const AuthHomeScreen = () => {
  const navigation = useNavigation<Navigation>();
  return (
    <SafeAreaView>
      <CustomButton label={'이메일 로그인'} variant={'filled'} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loginButton: {},
});

export default AuthHomeScreen;
