// @flow

import React from "react";
import ReactDOM from "react-dom";

import App from "./views/App";
import registerServiceWorker from "./registerServiceWorker";
import configureStore from "./store/configureStore";
import rootSaga from "./store/saga";
import { injectFonts } from "../webpack.common";

import "./index.css";

injectFonts(document);

const store = configureStore({});
store.runSaga(rootSaga);

const element = document.getElementById("root");
if (element != null) {
  ReactDOM.render(<App />, element);
}
registerServiceWorker();
