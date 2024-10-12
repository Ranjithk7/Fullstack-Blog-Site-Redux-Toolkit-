import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllArticles = createAsyncThunk(
    'fetch-all-articles',
    async ({ url, user, method, data }, { rejectWithValue }) => {
      try {
        const token = user && (await user.getIdToken());
        const headers = token ? { authtoken: token } : {};
  
        const response = await axios({
            method,
            url,
            headers,
            data
         });
        return response.data; // This will be the payload in `fulfilled` state
      } catch (error) {
        return rejectWithValue(error.response?.data || error.message);
      }
    }
);


const articleSlice = createSlice({
    name: 'article',
    initialState: {
        fetchStatus: '',
        data: [],
        error:null,
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchAllArticles.fulfilled, (state, action) => {
            state.data = action.payload;
            state.fetchStatus = 'success'
        })
        .addCase(fetchAllArticles.pending, (state) => {
            state.fetchStatus = 'loading'
        })
        .addCase(fetchAllArticles.rejected, (state, action) => {
            state.fetchStatus = 'error';
            state.error = action.payload;
        })
    }

})


export default articleSlice;