import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users.slice";
import shortListReducer from "./shortlist.users";
import filterReducer from "./filters";

const store = configureStore({
  reducer: {
    users: userReducer,
    shortList: shortListReducer,
    filters: filterReducer,
  },
});

//

export type ApplicationState = ReturnType<typeof store.getState>;
export type ApplicationDispatch = typeof store.dispatch;
export default store;
