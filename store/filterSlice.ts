import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Filter } from '../models/Filter';

interface FilterState {
    filters: Filter[];
}

const initialState: FilterState = {
    filters: [
        {
            name: "Cuisine type",
            tags: ["Italian", "Mexican", "Asian", "Mediterranean", "Japanesse", "French", "Greek", "Indian", "Israel"],
            order: 1
        },
        {
            name: "Food type",
            tags: ["Burger", "Sushi", "Pizza", "Hummus", "Salad", "Shirmp", "Chicken Wings", "Wok", "Green Bowl"],
            order: 2
        },
        {
            name: "Type of food establisment",
            tags: ["Fast food", "Cafe", "Restaurant", "Coffee Shop", "Pizzeria"],
            order: 3
        },
        {
            name: "Specific food preferences",
            tags: ["Gluten Free", "No Sugar", "Vegan", "Low Carbs", "Child-Friendly", "Kosher"],
            order: 4
        },
    ],
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {  },
});

export const selectAllFilters = (state: { filter: FilterState }) => state.filter.filters;
export default filterSlice.reducer;