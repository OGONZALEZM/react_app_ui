import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useSelector } from 'react-redux';
import { selectAllFilters } from '../store/filterSlice';
import ScrollContainer from '../components/ScrollContainer';
import { AppColors } from '../constants/colors';
import { Typography } from '../constants/typography';
import { Dimens } from '../constants/dimens';
import Tag from '../components/Tag';
import PrimaryButton from '../components/PrimaryButton';

const AScreen = ({ navigation }: any) => {

    const filters = useSelector(selectAllFilters);
    
    return (
        <ScrollContainer>
            <Text style={styles.title}>Filters</Text>
            {filters.map((filter, index) => (
                <View key={index}>
                    <Text style={styles.subtitle}>{filter.name}</Text>
                    <View style={styles.tagContainer}>
                        {filter.tags.map((tag, tagIndex) => (
                            <Tag label={tag} onPress={() => {}} />
                        ))}
                    </View>
                </View>
            ))}
            <View style={styles.bottomButton}>
                <PrimaryButton label="Apply" onPress={() => {}} />
            </View>
        </ScrollContainer>
    );
}

const styles = StyleSheet.create({
    tagContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: Dimens.marginLarge
    },
    title: {
        color: AppColors.primary,
        fontSize: Typography.title.fontSize,
        fontWeight: Typography.title.fontWeight,
        marginBottom: Dimens.margin
    },
    subtitle: {
        color: AppColors.primary,
        fontSize: Typography.subtitle.fontSize,
        fontWeight: Typography.subtitle.fontWeight,
        marginBottom: Dimens.margin
    },
    bottomButton: {
        position: 'absolute',
        bottom: 20,
        left: 16,
        right: 16,
      },
});

export default AScreen;