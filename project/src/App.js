import React, { useState } from "react";
import './App.css';


import Item from './components/Item';
import NavBar from "./components/NavBar";




const App = () => {

  return (
    <div className="App">
      <NavBar></NavBar>

      <body>
        <Item></Item>
        <Item></Item>
      </body>
      
    </div>
  );
}

export default App;
