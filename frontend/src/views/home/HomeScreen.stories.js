// @flow
/* global module */

import React from "react";
import { storiesOf } from "@storybook/react";

import { mockedNavigation } from "../common/navigation";
import HomeScreen from "./HomeScreen";

storiesOf("HomeScreen", module).add("Home Screen", () => (
  <HomeScreen navigation={mockedNavigation} />
));
