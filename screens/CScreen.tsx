import React, { useState } from 'react';
import ScrollContainer from "../components/ScrollContainer";
import { useSelector } from 'react-redux';
import { selectAllRestaurants } from '../store/restaurantSlice';
import ItemCard from '../components/ItemCard';
import SearchToolbar from '../components/SearchToolbar';

const CScreen = ({ navigation }: any) => {

    const restaurants = useSelector(selectAllRestaurants);

    return (
        <ScrollContainer>
            <SearchToolbar onChangeText={(text) => {}} />
            {restaurants.map((restaurant, index) => (
                <ItemCard key={index}
                restaurant={restaurant}/>
            ))}
        </ScrollContainer>
    );
}

export default CScreen;