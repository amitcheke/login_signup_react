import React from 'react';
import './App.css';
import LoginContainer from './components/login/LoginContainer.js'
import Home from './components/Home.js';
import SignupContainer from './components/signup/SignupContainer.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props){
    super(props);
  }

  
  render(){
    return (
      <Router>
      <div>
        <Route exact path="/" component={LoginContainer} />
        <Route path="/home" component={Home} />
        <Route path="/signup" component={SignupContainer} />
      </div>
    </Router>)
  }
}
export default App;
