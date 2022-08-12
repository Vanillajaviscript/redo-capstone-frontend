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
export const getDog = createAsyncThunk(
  "dog/getDog",
  async (id, { rejectWithValue }) => {
    try {
      const response = await api.getDog(id);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getDogsByUser = createAsyncThunk(
  "dog/getDogsByUser",
  async (userId, { rejectWithValue }) => {
    try {
      const response = await api.getDogsByUser(userId);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteDog = createAsyncThunk(
  "dog/deleteDog",
  async ({ id, toast }, { rejectWithValue }) => {
    try {
      const response = await api.deleteDog(id);
      toast.success("Dog Deleted Successfully");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateDog = createAsyncThunk(
  "dog/updateDog",
  async ({ id, updatedDogData, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.updateDog(updatedDogData, id);
      toast.success("Dog Updated Successfully");
      navigate("/");
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const searchDogs = createAsyncThunk(
  "dog/searchDogs",
  async (searchQuery , { rejectWithValue }) => {
    try {
      const response = await api.getDogsBySearch(searchQuery);
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
    [getDog.pending]: (state, action) => {
      state.loading = true;
    },
    [getDog.fulfilled]: (state, action) => {
      state.loading = false;
      state.dog = action.payload;
    },
    [getDog.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getDogsByUser.pending]: (state, action) => {
      state.loading = true;
    },
    [getDogsByUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.userDogs = action.payload;
    },
    [getDogsByUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [deleteDog.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteDog.fulfilled]: (state, action) => {
      state.loading = false;
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.userDogs = state.userDogs.filter((item) => item._id !== id);
        state.dogs = state.dogs.filter((item) => item._id !== id);
      }
    },
    [deleteDog.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [updateDog.pending]: (state, action) => {
      state.loading = true;
    },
    [updateDog.fulfilled]: (state, action) => {
      state.loading = false;
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.userDogs = state.userDogs.map((item) =>
          item._id === id ? action.payload : item
        );
        state.dogs = state.dogs.map((item) =>
          item._id === id ? action.payload : item
        );
      }
    },
    [updateDog.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [searchDogs.pending]: (state, action) => {
      state.loading = true;
    },
    [searchDogs.fulfilled]: (state, action) => {
      state.loading = false;
      state.dogs = action.payload;
    },
    [searchDogs.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default dogSlice.reducer;
