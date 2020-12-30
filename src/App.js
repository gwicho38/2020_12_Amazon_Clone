import React, {useEffect} from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route }
from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";

function App() {

  const [{}, dispatch] = useStateValue(); 

  useEffect(() => {
    //if blank --> will onnly run once when app component loads
    auth.onAuthStateChanged(authUser => {
      console.log("USER IS >>> ", authUser);
      if (authUser){
        //then it means that user is logged in or just logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
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
