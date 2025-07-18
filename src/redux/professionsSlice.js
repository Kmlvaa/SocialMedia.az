import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_ENDPOINT;

export const fetchProfessions = createAsyncThunk(
  'professions/fetchProfessions',
  async () => {
    const response = await axios.get(`${API_URL}/user/professions`);
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
