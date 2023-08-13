import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsersContent: any = createAsyncThunk("/users/content", async () => {
  const response = await axios.get("/api/users?page=2", {});
  console.log("response..", response);
  return response.data;
});

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    users: [],
  },
  reducers: {
    addNewUser: (state: any, action) => {
      let { newUserObj } = action.payload;
      state.users = [...state.users, newUserObj];
    },

    deleteUser: (state, action) => {
      let { index } = action.payload;
      state.users.splice(index, 1);
    },
  },

  extraReducers: {
    [getUsersContent.pending]: (state) => {
      state.isLoading = true;
    },
    [getUsersContent.fulfilled]: (state, action) => {
      state.users = action.payload.data;
      state.isLoading = false;
    },
    [getUsersContent.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { addNewUser, deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
