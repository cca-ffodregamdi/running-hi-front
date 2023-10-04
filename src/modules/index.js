import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import user from "./userModule";
import storage from "store/storages/cookieStorage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({ user });

export default rootReducer;
