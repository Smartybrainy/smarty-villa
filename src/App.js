import React from 'react';
import './App.css';

import Home from './pages/Home'
import Rooms from './pages/Rooms'
import SingleRoomPage from './pages/SingleRoomPage'
import Error from './pages/Error'
import Navbar from './components/Navbar'

import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/rooms" component={Rooms} />
      <Route exact path="/rooms/:slug" component={SingleRoomPage} />
      <Route component={Error} />
    </Switch>
    </>
  );
}

export default App;
