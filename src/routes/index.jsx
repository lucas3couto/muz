import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';

export default function Routes() {
  return (
    <Switch>
      <Route path="/entrar" exact component={SignIn} />
      <Route path="/" exact component={Dashboard} isPrivate />
    </Switch>
  );
}
