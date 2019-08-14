import Site from "./Site";
import Trends from "./Trends";

import * as React from "react";
import { Route, Switch } from "react-router-dom";

export default (): React.Component => (
  <Switch>
    <Route path="/site" exact={true} component={Site} />
    <Route path="/trends" exact={true} component={Trends} />
    <Route
      path="/about"
      // FIXME: This is definitely not the kosher way to do this.
      component={(): void => {
        window.location = "http://www.cleanoceanaction.org/index.php?id=2";
      }}
    />
  </Switch>
);
