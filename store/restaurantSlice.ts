import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Restaurant } from '../models/Restaurant';

interface RestaurantState {
    restaurants: Restaurant[];
}

const initialState: RestaurantState = {
    restaurants: [
        {
            name: "PizzaCrafters Co.",
            description: "Handcrafted dough and premium ingredients",
            rating: 5.0,
            reviewsCount: 70,
            hours: "11AM-12PM",
            deliveryFee: "15 ILS",
            deliveryTime: "30-40 min",
            priceFrom: "150 ILS",
            isFavorite: false
        },
        {
            name: "VeggieVista Pizza",
            description: "Garden-fresh, veggie-packed pizza",
            rating: 5.0,
            reviewsCount: 70,
            hours: "10AM-10PM",
            deliveryFee: "15 ILS",
            deliveryTime: "30-40 min",
            priceFrom: "50 ILS",
            isFavorite: false
        },
        {
            name: "JuanValdez",
            description: "Local coffee crafted with Colombian beans, offering rich flavor and cozy vibes. Perfect for a morning boost or a relaxed afternoon.",
            rating: 5.0,
            reviewsCount: 70,
            hours: "11AM-12PM",
            deliveryFee: "15 ILS",
            deliveryTime: "30-40 min",
            priceFrom: "150 ILS",
            isFavorite: false
        },
    ]

}

const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {  },
});

export const selectAllRestaurants = (state: { restaurant: RestaurantState }) => state.restaurant.restaurants;
export default restaurantSlice.reducer;