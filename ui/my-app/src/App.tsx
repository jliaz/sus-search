import React from 'react';
import {  Route, Switch } from 'react-router';
import { BrowserRouter as Router } from "react-router-dom";

import HomePage from './screens/HomePage';
import ResultsPage from './screens/ResultsPage';
import './App.css';

function App() {

  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/results">
            <ResultsPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
