import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//
const BASE_URL = "https://dummyjson.com/users";
//
type initialState = {
  users: User[];
  selectedUser: User | null;
  loading: boolean;
  modalVisible: boolean;
};
//
const initialState: initialState = {
  users: [],
  selectedUser: null,
  loading: false,
  modalVisible: false,
};

export const getUsers = createAsyncThunk(
  "uers/get",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(BASE_URL);
      console.log("users dara is", response.data.users);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error?.message || "Something went wrong");
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setModalUser: (state, { payload }: PayloadAction<User | null>) => {
      state.selectedUser = payload;
    },
    setModal: (state, { payload }: PayloadAction<boolean>) => {
      state.modalVisible = payload;
    },
  },
  extraReducers: (builder) => {
    //
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload.users;
      state.loading = false;
    });
    builder.addCase(getUsers.rejected, (state) => {
      state.loading = false;
    });
    //
  },
});

const userReducer = userSlice.reducer;
export const { setModalUser, setModal } = userSlice.actions;
export default userReducer;
