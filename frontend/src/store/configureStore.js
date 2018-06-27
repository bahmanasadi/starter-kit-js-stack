// @flow

import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducer";

import type { AppActions } from "./app/app.actions";
import type { AppState } from "./app/app.models";

type Store = {
  dispatch: (action: AppActions) => void,
  runSaga: any,
};

export default function configureStore(initialState: AppState): Store {
  const sagaMiddleware = createSagaMiddleware();

  const store: Store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );

  store.runSaga = sagaMiddleware.run;
  return store;
}
