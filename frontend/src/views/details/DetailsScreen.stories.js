// @flow
/* global module */

import React from "react";
import { storiesOf } from "@storybook/react";

import { mockedNavigation } from "../common/navigation";
import DetailsScreen from "./DetailsScreen";

storiesOf("DetailsScreen", module).add("Details Screen", () => (
  <DetailsScreen navigation={mockedNavigation} />
));
