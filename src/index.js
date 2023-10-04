// index.js
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import store from "./store";
import rootReducer from "./modules";

// Redux 관련 불러오기
import { Provider } from "react-redux";
import rootReducer from "./modules";
import { persistStore } from "redux-persist";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

const persistor = persistStore(store);

root.render(
  // <HelmetProvider>
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
      <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>
  // </HelmetProvider>
);

export default store;
