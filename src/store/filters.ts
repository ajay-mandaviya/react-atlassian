import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type AgeSort = "asc" | "desc";
type Gender = "male" | "female";

type InitialState = {
  searchByUnivercity: string;
  gender: Gender | string;
  ageSort: AgeSort | string;
  selectedGloodGroup: string[];
  searchUser: string;
};

const initialState: InitialState = {
  searchByUnivercity: "",
  gender: "",
  selectedGloodGroup: [],
  ageSort: "",
  searchUser: "",
};

const filters = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setUniversity: (state, { payload }) => {
      state.searchByUnivercity = payload;
    },
    setAge: (state, { payload }: PayloadAction<AgeSort>) => {
      state.ageSort = payload;
    },
    setGender: (state, { payload }: PayloadAction<Gender>) => {
      state.gender = payload;
    },
    resetFilters: (state) => {
      state.ageSort = "";
      state.gender = "";
      state.searchUser = "";
      state.searchByUnivercity = "";
      state.selectedGloodGroup = [];
    },
    addBloodGroup: (state, { payload }) => {
      state.selectedGloodGroup = state.selectedGloodGroup.includes(payload)
        ? state.selectedGloodGroup.filter((blood) => blood !== payload)
        : state.selectedGloodGroup.concat(payload);
    },
    searchUser: (state, { payload }) => {
      state.searchUser = payload;
    },
  },
});

export const {
  resetFilters,
  setAge,
  setGender,
  setUniversity,
  addBloodGroup,
  searchUser,
} = filters.actions;

const filterReducer = filters.reducer;
export default filterReducer;
