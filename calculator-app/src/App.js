import React from "react";
import Header from "./Header";
import Main from "./Main";
import Screen from "./Screen";
import { useState } from "react";


import "./scss/App.scss";

function App() {
  const [calc, setCalc] = useState("");
  //const [result, setResult] = useState("");

  const updateCalc = value => {
    setCalc(calc + value);
  }

  return (
    <div className='app'>
      <Header/>
      <Screen calc={calc}/>
      <Main updateCalc={updateCalc}/>
    </div>
  )
}

export default App;
