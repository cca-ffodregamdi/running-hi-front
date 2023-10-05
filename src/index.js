// index.js
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import store from "./store";
import rootReducer from "./modules";

// Redux 관련 불러오기
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

// Helmet 관련 불러오기
import { HelmetProvider } from "react-helmet-async";

const persistor = persistStore(store); // redux store 생성
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider>
    <React.StrictMode>
      <Provider store={store}>
        {/* <PersistGate persistor={persistor}> */}
        <App />
        {/* </PersistGate> */}
      </Provider>
    </React.StrictMode>
  </HelmetProvider>
);

export default store;
