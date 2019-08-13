import React from 'react';
import './App.css';
import Login from './components/Login.js';
import Home from './components/Home.js';
import Signup from './components/Signup.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props){
    super(props);
  }

  
  render(){
    return (
      <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/signup" component={Signup} />
      </div>
    </Router>)
  }
}
export default App;
