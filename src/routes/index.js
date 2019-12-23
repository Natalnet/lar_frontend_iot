import React from 'react';
import { Switch } from 'react-router-dom';

import Login from '~/pages/SignIn';

import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
    </Switch>
  );
}
