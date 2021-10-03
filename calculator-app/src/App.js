import React from "react";
import Header from "./Header";
import Main from "./Main";
import Screen from "./Screen";


import "./scss/App.scss";

function App() {
  return (
    <div className='container'>
      <Header/>
      <Screen/>
      <Main/>
    </div>
  )
}

export default App;
