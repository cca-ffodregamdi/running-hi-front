import { configureStore } from "@reduxjs/toolkit";
import user from "./modules/user";
import thunk from "redux-thunk";
import logger from "redux-logger";

export default configureStore({
  reducer: {
    user,
  },
  middleware: [thunk, logger],
});
