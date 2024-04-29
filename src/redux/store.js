import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from "./reducers/movies-reducer.js";
import ratedMoviesReducer  from "./reducers/rated-movies-reducer.js";

 const store = configureStore({
    reducer: {
        movies:moviesReducer,
        ratedMovies:ratedMoviesReducer
    },
})

export default store;