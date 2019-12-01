import React from 'react';
import Navbar from './components/Navbar';
//import './App.css';
import home from './pages/home';
import rooms from './pages/rooms';
import singleroom from './pages/singleroom';
import {Route, Switch} from 'react-router-dom'; 
function App() {
  return (
    <div className="app">
    <Switch>
    <Route exact path="/" component={home}/> 
    <Route exact path="/rooms" component={rooms}/> 
    <Route exact path="/rooms:slug" component={singleroom}/> 
    <Route component={Error}  />
    </Switch>
    </div>
  );
}

export default App;
