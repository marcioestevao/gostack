import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

// //Quando dentro de uma função, já possui o return diretamente
// const Routes: React.FC = () => {
//   return (...);
// }

// //pode-se colocar diretamente:
// const Routes: React.FC = () => ( ... )

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/repository" component={Repository} />
  </Switch>
);

export default Routes;
