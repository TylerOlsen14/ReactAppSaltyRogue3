import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home"
import Clients from "./components/Clients"
import Prospects from "./components/Prospects"


function Routing() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Clients" component={Clients} />
        <Route path="/Prospects" component={Prospects} />
      </Switch>
    </Router>
  );
}
export default Routing