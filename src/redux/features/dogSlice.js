import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const createDog = createAsyncThunk(
  "dog/createDog",
  async ({ updatedDogData, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await api.createDog(updatedDogData);
      toast.success("Dog Added!");
      navigate("/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getDogs = createAsyncThunk(
  "dog/getDogs",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.getDogs();
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
const dogSlice = createSlice({
  name: "dog",
  initialState: {
    dog: {},
    dogs: [],
    userDogs: [],
    error: "",
    loading: false,
  },
  extraReducers: {
    [createDog.pending]: (state, action) => {
      state.loading = true;
    },
    [createDog.fulfilled]: (state, action) => {
      state.loading = false;
      state.dogs = [action.payload];
    },
    [createDog.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getDogs.pending]: (state, action) => {
      state.loading = true;
    },
    [getDogs.fulfilled]: (state, action) => {
      state.loading = false;
      state.dogs = action.payload;
    },
    [getDogs.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default dogSlice.reducer;
