import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Coverpage } from "./components/Coverpage";
import Item from "./components/Item";
import NavBar from "./components/NavBar";
import Owner from "./components/Owner";
import Login from "./components/Login";
import Register from "./components/Register";
import { PrivateRoute } from "./components/PrivateRoute";
import Logout from "./components/logout";

const App = () => {
 return (
  <div className='App'>
   <NavBar />
   <Switch>
    <Route exact path='/' component={Coverpage} />
    <Route path='/login' component={Login} />
    <Route path='/register' component={Register} />
    <PrivateRoute path='/account' component={Owner} />
    <PrivateRoute path='/shop' component={Item} />
    <PrivateRoute path='/logout' component={Logout} />
   </Switch>
  </div>
 );
};

export default App;
