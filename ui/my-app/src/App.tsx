import React from 'react';
import {  Route, Switch } from 'react-router';
import { BrowserRouter as Router } from "react-router-dom";

import HomePage from './screens/HomePage';
import ResultsPage from './screens/ResultsPage';
import NavBar from './components/NavBar';
import './App.css';
import {
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {

  /** Global colour palette */
  const theme = createMuiTheme({
    palette: {
      primary: { main: '#7289DA'},
      secondary: { main: '#FCFAF8'},
      background: { default: '#36393f'},
    }
  })
  
  return (
    <div className="App" color='background'>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <NavBar/>
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
      </ThemeProvider>
    </div>
  );
}

export default App;
