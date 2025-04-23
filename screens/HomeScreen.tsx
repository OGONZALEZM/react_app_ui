import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { Dimens } from '../constants/dimens';
import { Typography } from '../constants/typography';
import { AppColors } from '../constants/colors';

const HomeScreen = ({ navigation }: any) => {

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Home</Text>
            <PrimaryButton
                label={'Screen A'}
                onPress={() => navigation.navigate('AScreen')}
            />
            <PrimaryButton
                label={'Screen B'}
                onPress={() => navigation.navigate('BScreen')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: Dimens.padding
    },
    label: {
        color: AppColors.primary,
        fontSize: Typography.title.fontSize,
        marginBottom: Dimens.margin
    },
});

export default HomeScreen;