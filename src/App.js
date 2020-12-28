import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route }
from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
            <Header></Header>
            <Checkout></Checkout>
          </Route>
          <Route path="/">
            {/*Header Component -- top part of app*/}
            <Header></Header>
            {/*Home Component -- body of app*/}
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
