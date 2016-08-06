import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './pages/App';
import Nav from './components/Nav';
import Profile from './pages/Profile';
import List from './pages/List';
import Detail from './pages/Detail';
import User from './pages/User';

const routes = (
    <Route path="/" component={ Nav }>
        <IndexRoute component={ Profile } />
        <Route path="detail/:repo" component={ Detail } />
        <Route path="user/:user" component={ User } />
    </Route>
);

export default routes;
