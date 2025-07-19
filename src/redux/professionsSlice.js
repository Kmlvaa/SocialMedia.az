import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getProfessions } from '../services/AuthService';

export const fetchProfessions = createAsyncThunk(
  'professions/fetchProfessions',
  async () => {
    const response = await getProfessions();
    console.log(response.data)
    return response.data;
  } 
);

const professionsSlice = createSlice({
  name: 'professions',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfessions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProfessions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchProfessions.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default professionsSlice.reducer;
