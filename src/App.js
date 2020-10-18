import React from "react";
import Header1 from "./Header1";
import Login from "./Login";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./Cart";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header1 />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" component={Login} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
