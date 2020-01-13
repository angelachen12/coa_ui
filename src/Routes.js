import React from "react";
import { Route, Switch } from "react-router-dom";

import Site from "./Site";
import Trends from "./Trends";
import FileUploader from "./FileUploader";

export default () =>
  <Switch>
    <Route path="/site" exact component={Site} />
    <Route path="/trends" exact component={Trends} />
    <Route path="/about" component={() => window.location = "http://www.cleanoceanaction.org/index.php?id=2"}/>
    <Route path="/upload" exact component={FileUploader}/>
  </Switch>;
