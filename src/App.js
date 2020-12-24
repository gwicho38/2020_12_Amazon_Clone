import React from "react";
import './App.css';
import Header from "./Header";

function App() {
  return (
    //BEM convention followed by naming app here
    <div className="App">
      {/*Header Component -- top part of app*/}
      <Header></Header>
      {/*Home Component -- body of app*/}
    </div>
  );
}

export default App;
