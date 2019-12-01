import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './route';

import Login from '../pages/login';
import Home from '../pages/home';
import LoadPlayers from '../pages/load-players';
import MyTeam from '../pages/my-team';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/my-team" component={MyTeam} />
      <Route path="/load-players" component={LoadPlayers} />
    </Switch>
  )
}