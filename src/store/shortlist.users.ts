import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type InitialState = {
  shortListUsers: User[];
};
const initialState: InitialState = {
  shortListUsers: [],
};

const shortListUsers = createSlice({
  name: "shortListusers",
  initialState,
  reducers: {
    addShortListUser: (state, { payload }: PayloadAction<User>) => {
      state.shortListUsers.unshift(payload);
    },
  },
});

const shortListReducer = shortListUsers.reducer;
export const { addShortListUser } = shortListUsers.actions;
export default shortListReducer;
