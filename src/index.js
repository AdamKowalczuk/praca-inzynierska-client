import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import { reducers } from "./reducers";
import App from "./App";
import "./App.scss";
// import * as serviceWorker from "../public/serviceWorker";
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// if ("serviceWorker" in navigator) {
//   console.log("Service Worker Supported");
//   window.addEventListener("load", () => {
//     navigator.serviceWorker
//       .register("/serviceWorker.js")
//       .then((reg) => console.log("Service worker registered"))
//       .catch((err) => console.log(`Service worker error:${err}`));
//   });
// }
