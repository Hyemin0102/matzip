import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {FeedStackParamList} from '../../types/navigation';
import {useNavigation} from '@react-navigation/native';

type Navigation = StackNavigationProp<FeedStackParamList>;

const FeedListScreen = () => {
  const navigation = useNavigation<Navigation>();
  return (
    <SafeAreaView>
      <Text>피드 스크린</Text>
      <Text onPress={() => navigation.navigate('FeedDetail', {id: 1})}>
        1번
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default FeedListScreen;
