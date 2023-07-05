import React from 'react';
import './assetss/sass/app.sass';

import { BrowserRouter as Router , Switch, Route } from 'react-router-dom'

import Login from './components/login';
import Dashboard from './components/dashboard';

function App() {
  return (
   <React.Fragment>
      <Router>
        <Switch>
            <Login />
          <Route path='/' exact render= { props => ( <Login {...props} />) }> </Route>
          <Route path='/menu' exact render= { props => ( <Dashboard {...props} />) }> </Route>
        </Switch>
      </Router>
   </React.Fragment>
  );
}

export default App;
