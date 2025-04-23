import React from 'react';
import { Pressable, Text, StyleSheet, View, TextInput } from 'react-native';
import { MaterialIcons } from "@expo/vector-icons";
import { Dimens } from '../constants/dimens';
import { AppColors } from '../constants/colors';

type SearchToolbarProps = {
  onChangeText: (text: string) => void;
};

export default function SearchToolbar({ onChangeText, ...props }: SearchToolbarProps) {
  return (
    <View style={styles.searchContainer}>
      <MaterialIcons name="search" size={20} color="#888" />
      <TextInput placeholder="Search" 
      style={styles.searchInput} 
      onChangeText={(text) => { onChangeText(text) }}
      {...props} />
      <Pressable style={[styles.filter]}>
            <MaterialIcons name="tune" size={30} color={AppColors.gray} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: AppColors.white,
    paddingVertical: 8,
    padding: Dimens.padding,
    borderRadius: Dimens.borderRadius,
    marginBottom: Dimens.marginSmall,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333'
  },
  filter: {
    width: 45,
    height: 45,
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    marginLeft: 15,
    justifyContent: 'center'
  }
});