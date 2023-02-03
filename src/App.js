import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Wallet from './pages/Wallet';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/carteira" component={ Wallet } />
        <Route exact path="/" component={ Login } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
