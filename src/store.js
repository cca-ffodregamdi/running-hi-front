import { configureStore } from "@reduxjs/toolkit";
import userModule from "./modules/userModule";
import thunk from "redux-thunk";
import logger from "redux-logger";

export default configureStore({
  reducer: {
    userModule,
  },
  middleware: [thunk, logger],
});
