import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Game } from "./Game";
import { Home } from "./Home";

export const Routes = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/game">
            <Game />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}
