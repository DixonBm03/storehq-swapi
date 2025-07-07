// src/features/films/filmsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

export const fetchFilms = createAsyncThunk('films/fetchAll', async () => {
    const res = await api.get('/films');
    return res.data.results;
});

const filmsSlice = createSlice({
    name: 'films',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilms.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchFilms.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
            })
            .addCase(fetchFilms.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default filmsSlice.reducer;
