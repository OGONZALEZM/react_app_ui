import { View, StyleSheet, Image, Text, Pressable } from "react-native";
import { Restaurant } from "../models/Restaurant";
import { MaterialIcons } from "@expo/vector-icons";
import { Dimens } from "../constants/dimens";
import { Typography } from "../constants/typography";
import { AppColors } from "../constants/colors";

interface ItemCardProps {
    restaurant: Restaurant
}
  
const ItemCard = ({ restaurant}: ItemCardProps) => {
    return (
      <View style={styles.card}>
        <Image source={{}} style={styles.imagePlaceholder} />
        <View style={styles.textContainer}>
            <View style={styles.header}>
                <Text style={styles.title}>{restaurant.name}</Text>
                <Text style={styles.rating}>
                    <MaterialIcons name="star" size={Dimens.iconSmall} style={styles.icons} />
                    {restaurant.rating} ({restaurant.reviewsCount})
                </Text>
            </View>
            <Text style={styles.description}>{restaurant.description}</Text>
            <Text style={styles.hours}>{restaurant.hours}</Text>
            <View style={styles.metaRow}>
                <Text style={styles.fee}>
                    <MaterialIcons name="moped" size={Dimens.iconSmall} style={styles.icons} />
                    {restaurant.deliveryFee}
                </Text>
                <Text style={styles.fee}>{restaurant.deliveryTime}</Text>
                <Text style={styles.fee}>from {restaurant.priceFrom}</Text>
          </View>
        </View>
        <Pressable style={styles.heartIcon}>
            <MaterialIcons name={restaurant.isFavorite ? "favorite" : "favorite-border"} size={24} color="gray" />
        </Pressable>
      </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: Dimens.borderRadius,
        padding: 0,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 6,
        elevation: 3,
        position: 'relative',
    },
    imagePlaceholder: {
        height: 120,
        backgroundColor: '#eee',
        marginBottom: Dimens.marginSmall,
    },
    textContainer: {
        padding: Dimens.paddingSmall,
        flexDirection: 'column',
        gap: 4,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: Typography.label.fontSize,
        fontWeight: Typography.label.fontWeight,
        color: AppColors.text
    },
    rating: {
        fontSize: Typography.labelSmall.fontSize,
        fontWeight: Typography.labelSmall.fontWeight,
        color: AppColors.gray,
    },
    description: {
        fontSize: Typography.labelSmall.fontSize,
        fontWeight: Typography.labelSmall.fontWeight,
        color: AppColors.text
    },
    hours: {
        fontSize: Typography.labelSmall.fontSize,
        fontWeight: Typography.labelSmall.fontWeight,
        color: AppColors.gray,
    },
    fee: {
        flexDirection: 'row', 
        alignItems: 'center',
        fontSize: Typography.labelSmall.fontSize,
        fontWeight: Typography.labelSmall.fontWeight,
        color: AppColors.text,
        verticalAlign: 'middle'
    },
    metaRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 6,
        fontSize: 12,
        color: '#444',
    },
    heartIcon: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
    icons: {
        color: AppColors.gray,
        verticalAlign: 'bottom'
    }
});

export default ItemCard;