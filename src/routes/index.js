import React from 'react';
import { Switch } from 'react-router-dom';

import Recover from '~/pages/RecoverPassword';
import Register from '~/pages/Register';
import Reset from '~/pages/ResetPassword';
import Login from '~/pages/SignIn';
import history from '~/services/history';

import Route from './Route';

function ButtonExit() {
  return (
    <button
      type="button"
      onClick={() => {
        localStorage.clear();
        history.push('/');
      }}
    >
      Sair
    </button>
  );
}

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/recover-password" component={Recover} />
      <Route exact path="/reset-password" component={Reset} />
      <Route path="*" component={ButtonExit} isPrivate />
    </Switch>
  );
}
