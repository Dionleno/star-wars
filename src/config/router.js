import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Planets from "../pages/planets/planets";
import Home from "../pages/home/home";

export default props => (
  <BrowserRouter>
    <Switch>
      <Route path="/planets" component={Planets} />
      <Route path="/" component={Home} />
      <Route path="*" component={Home} />
    </Switch>
  </BrowserRouter>
);
