import React from 'react'
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";


// Import pages
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;