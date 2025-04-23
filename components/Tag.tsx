import { Pressable, Text, StyleSheet, ViewStyle } from 'react-native';
import { AppColors } from '../constants/colors';
import { Typography } from '../constants/typography';
import { Fonts } from '../constants/fonts';
import { Dimens } from '../constants/dimens';
import { Colors } from 'react-native/Libraries/NewAppScreen';

type TagProps = {
    label: string;
    onPress: () => void;
};

export default function Tag({ label, onPress }: TagProps) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        backgroundColor: AppColors.secondary,
        borderRadius: Dimens.borderRadius,
        alignSelf: 'flex-start' 
    },
    label: {
        color: '#fff',
        fontSize: Typography.labelSmall.fontSize,
        fontWeight: Typography.labelSmall.fontWeight,
    },
});