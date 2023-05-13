import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users.slice";
import shortListReducer from "./shortlist.users";

const store = configureStore({
  reducer: {
    users: userReducer,
    shortList: shortListReducer,
  },
});

//

export type ApplicationState = ReturnType<typeof store.getState>;
export type ApplicationDispatch = typeof store.dispatch;
export default store;
