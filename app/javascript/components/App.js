import React from 'react';
import { Route, Switch } from 'react-router-dom';
const App = () => {
  return (
    <Switch>
      <Route exact path='/' Component={Airlines} />
      <Route exact path='/:slug' Component={Airlines} />
    </Switch>
  );
}
export default App