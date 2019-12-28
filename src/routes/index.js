import React from 'react';
import { Switch, Route as Router } from 'react-router-dom';

import Devices from '~/pages/Devices';
import NotFound from '~/pages/NotFound';
import Recover from '~/pages/RecoverPassword';
import Register from '~/pages/Register';
import Reset from '~/pages/ResetPassword';
import Login from '~/pages/SignIn';

import Route from './Route';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/recover-password" component={Recover} />
      <Route exact path="/reset-password" component={Reset} />
      <Route exact path="/dispositivos" component={Devices} isPrivate />
      <Router path="*" component={NotFound} />
    </Switch>
  );
}
