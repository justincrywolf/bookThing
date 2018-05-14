import React from "react";
import Books from "./pages/Books";
import Nav from "./components/Nav";
import NoMatch from "./pages/NoMatch";
import Detail from "./pages/Detail";
import {BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";


const App = () => (
  <Router>
    <div>
      <Nav />
        <Switch>
          <Route path="/" exact component={Books} />
          <Route path="/books" exact component={Books} />
          <Route path="/books/:id" exact component={Detail} />
          <Route component={NoMatch} />
        </Switch>
    </div>
  </Router>
);

export default App;
