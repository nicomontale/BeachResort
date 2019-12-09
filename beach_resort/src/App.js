import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import home from './pages/home';
import rooms from './pages/rooms';
import singleroom from './pages/singleroom';
import {Route, Switch} from 'react-router-dom'; 
import Error from './pages/Error';

function App() {
  return (
    <>
   <Navbar/>
    <Switch>
    <Route exact path="/" component={home}/> 
    <Route exact path="/rooms/" component={rooms}/> 
    <Route exact path="/rooms/:slug" component={singleroom}/> 
    <Route component={Error}  />
    </Switch>
 </>
  );
}

export default App;
