import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {FeedStackParamList} from '../../types/navigation';

type Props = StackScreenProps<FeedStackParamList, 'FeedDetail'>;
const FeedDetailScreen = ({route}: Props) => {
  const {id} = route.params;
  return (
    <SafeAreaView>
      <Text>피드 디테일 스크린 {id}번</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default FeedDetailScreen;
