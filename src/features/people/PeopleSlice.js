// src/features/people/peopleSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/api';

export const fetchPeople = createAsyncThunk(
    'people/fetchAll',
    async (url = '/people') => {
        const res = await api.get(url);
        return res.data;
    }
);

const peopleSlice = createSlice({
    name: 'people',
    initialState: {
        items: [],
        next: null,
        prev: null,
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPeople.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPeople.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload.results;
                state.next = action.payload.next;
                state.prev = action.payload.previous;
            })
            .addCase(fetchPeople.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default peopleSlice.reducer;
