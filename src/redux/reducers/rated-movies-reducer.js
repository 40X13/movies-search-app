import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    ratedMovies: [],
}

export const ratedMoviesSlice = createSlice({
    name: 'ratedMovies',
    initialState,
    reducers: {},
})

export const {} = ratedMoviesSlice.actions

export default ratedMoviesSlice.reducer;