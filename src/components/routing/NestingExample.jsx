import React from "react";

import { Link, Switch, Route } from "react-router-dom";
import Home from './Home.jsx'
import Topics from './Topics.jsx'

class NestedExample extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default NestedExample;