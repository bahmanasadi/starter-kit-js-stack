// @flow

import { initialAppState } from "./app.models";

import type { AppActions } from "./app.actions";
import type { AppState } from "./app.models";

const reducer = (
  state: AppState = initialAppState,
  action: AppActions,
): AppState => {
  switch (action.type) {
  default:
    return state;
  }
};

export default reducer;
