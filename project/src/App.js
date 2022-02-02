import React, { useState } from "react";
import './App.css';
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'; 

import Item from './components/Item';
import NavBar from "./components/NavBar";
import Owner from "./components/Owner";
import Login from "./components/Login";


const App = () => {

  return (
    <div className="App">
      <NavBar/>
      <main>
        <Item/>
        <Owner/>
      </main>
    </div>
  );
}

export default App;
