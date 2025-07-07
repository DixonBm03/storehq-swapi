// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import peopleReducer from '../features/people/PeopleSlice';
import planetsReducer from '../features/planets/PlanetsSlice';
import filmsReducer from '../features/films/FilmsSlice';

export default configureStore({
    reducer: {
        people: peopleReducer,
        planets: planetsReducer,
        films: filmsReducer,
    },
});
