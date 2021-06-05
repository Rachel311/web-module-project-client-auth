import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import './App.css';

import login from './components/login';
import PrivateRoute from './components/PrivateRoute';
import Friends from './components/friends';

function App() {

  const logout = () => {
    axios.post('/logout')
      .then(res => {
        localStorage.removeItem('token')
        window.location.href = '/login'
      })
      .catch(err => {
        console.log(err);
      })
  };


  return (
    
      <Router>
      <div className="App">
       
        <Switch>
          <PrivateRoute exact path="/friends" component={Friends} />
          <Route path="/login" component={login} />
          
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
