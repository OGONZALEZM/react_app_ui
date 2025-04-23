import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { AppColors } from '../constants/colors';
import { Typography } from '../constants/typography';
import { Fonts } from '../constants/fonts';
import { Dimens } from '../constants/dimens';

type PrimaryButtonProps = {
  label: string;
  onPress: () => void;
};

export default function PrimaryButton({ label, onPress }: PrimaryButtonProps) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        backgroundColor: AppColors.primary,
        fontFamily: Fonts.medium,
        paddingVertical: 16,
        alignItems: 'center',
        borderRadius: Dimens.borderRadius,
        marginBottom: 16,
    },
        label: {
        color: '#fff',
        fontSize: Typography.label.fontSize,
        fontWeight: Typography.label.fontWeight,
    },
});