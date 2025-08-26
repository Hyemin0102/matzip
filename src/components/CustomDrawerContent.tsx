import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {colors} from '../constants/colors';

function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <SafeAreaView style={styles.container}>
      <DrawerContentScrollView
        {...props}
        scrollEnabled={false}
        contentContainerStyle={styles.contentContainer}>
        <Pressable style={styles.profileWrapper}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/default-user.png')}
              alt="기본 유저 프로필"
              style={styles.image}
            />
          </View>
          <View>
            <Text>닉네임</Text>
          </View>
        </Pressable>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.bottomContainer}>
        <Text style={styles.settingMenu}>설정</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: colors.GRAY_200,
  },
  settingMenu: {
    fontSize: 15,
  },
  imageContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  image: {
    width: '100%',
    height: '100%',
  },

  profileWrapper: {
    alignItems: 'center',
    marginBottom: 30,
    gap: 5,
  },
  contentContainer: {
    gap: 5,
    marginTop: 30,
  },
});

export default CustomDrawerContent;
