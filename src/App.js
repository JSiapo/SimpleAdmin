import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/about'>
          <p>About</p>
        </Route>
        <Route path='/users'>
          <p>Users</p>
        </Route>
        <Route path='/'>
          <p>Home</p>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
