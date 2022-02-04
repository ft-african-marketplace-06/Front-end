import React from "react";
import './App.css';
import { Switch, Route } from 'react-router-dom';

import Item from './components/Item';
import NavBar from "./components/NavBar";
import Owner from "./components/Owner";
import Login from "./components/Login";
import Register from './components/Register';
import AddItem from "./components/AddItem";


const App = () => {

  return (
    <div className="App">
      <NavBar/>
        <Switch>
          <Route exact path='/' component={Owner} />
          <Route path='/login' component={Login} />
          <Route path='/account' component={Owner} />
          <Route path='/shop' component={Item} />
          <Route path='/register' component={Register} />
          <Route path='/add-item' component={AddItem} />
        </Switch>
    </div>
  );
}

export default App;
