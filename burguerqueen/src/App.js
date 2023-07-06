import React from 'react';
import './assetss/sass/app.sass';

import { BrowserRouter as Router , Switch, Route } from 'react-router-dom'

import Login from './components/login';
import Dashboard from './components/dashboard.jsx';

function App() {
  return (
   <React.Fragment>
      <Router>
        <Switch>
          <Route exact path='/' component= {Login} />
          <Route exact path='/dashboard'component= {Dashboard} />
        </Switch>
      </Router>
   </React.Fragment>
  );
}

export default App;
