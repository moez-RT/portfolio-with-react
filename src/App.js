import './App.css';
import React from 'react';
import Home from './components/Home'
import {Switch, BrowserRouter as Router, Route, Redirect} from 'react-router-dom';


const App = props => {
  return (
      <Router>
      <Switch>
        <Route path="/" exact component={Home} />
          <Redirect from="*" to="/" />
      </Switch>
      </Router>


  );
};



export default App;
