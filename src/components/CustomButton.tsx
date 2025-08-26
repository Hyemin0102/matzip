import {colors} from '@/constants/colors';
import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

interface CustomButtonProps {
  label: string;
  variant?: 'filled' | 'outlined';
  size?: 'large' | 'small';
}

function CustomButton({
  label,
  variant = 'filled',
  size = 'large',
}: CustomButtonProps) {
  return (
    <Pressable style={[styles.container, styles[variant], styles[size]]}>
      <Text style={styles[`${variant}Text`]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filled: {
    backgroundColor: colors.PINK_700,
  },
  outlined: {
    backgroundColor: colors.WHITE,
    borderColor: colors.PINK_700,
    borderWidth: 1,
  },
  filledText: {color: colors.WHITE, fontSize: 14, fontWeight: 'bold'},
  outlinedText: {color: colors.PINK_700, fontSize: 14, fontWeight: 'bold'},
  large: {},
  small: {},
});

export default CustomButton;
