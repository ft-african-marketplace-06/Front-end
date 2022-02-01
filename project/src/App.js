import React, { useState } from "react";
import './App.css';


import Item from './components/Item';
import NavBar from "./components/NavBar";




const App = () => {

  return (
    <div className="App">
      <NavBar/>
      <main>
        <Item/>
      </main>
      
    </div>
  );
}

export default App;
