import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import CountriesList from './views/CountriesList/CountriesList';
import CountryDetails from './views/CountryDetail/CountryDetails';

import './App.css';

const App = (): JSX.Element => {
  return (
    <Router>
      <Switch>
        <Route path="/details/:name">
          <CountryDetails />
        </Route>
        <Route exact path="/">
          <CountriesList />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
