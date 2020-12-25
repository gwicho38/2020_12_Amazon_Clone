import React from "react";
import './App.css';
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    //BEM convention followed by naming app here
    <div className="App">
      {/*Header Component -- top part of app*/}
      <Header></Header>
      {/*Home Component -- body of app*/}
      <Home></Home>
    </div>
  );
}

export default App;
