import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import { Foods } from "./containers/Foods";
import { Orders } from "./containers/Orders";
import { Restaurants } from "./containers/Restaurants";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/restaurants">
          <Restaurants />
        </Route>
        <Route exact path="/foods">
          <Foods />
        </Route>
        <Route exact path="/orders">
          <Orders />
        </Route>
        <Route
          exact
          path="/restaurants/:restaurantsId/foods"
          render={({ match }) => <Foods match={match} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
