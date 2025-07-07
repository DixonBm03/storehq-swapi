// src/features/planets/planetsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

export const fetchPlanets = createAsyncThunk(
    'planets/fetchAll',
    async (url = '/planets') => {
        const res = await api.get(url);
        return res.data;
    }
);

const planetsSlice = createSlice({
    name: 'planets',
    initialState: {
        items: [],
        next: null,
        prev: null,
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPlanets.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPlanets.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload.results;
                state.next = action.payload.next;
                state.prev = action.payload.previous;
            })
            .addCase(fetchPlanets.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default planetsSlice.reducer;
