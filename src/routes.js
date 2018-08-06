import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Posts from './containers/Posts';
import Users from './containers/Users';
import NotFound from './pages/NotFound';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/users" component={Users} />
        <Route component={NotFound} />
    </Switch>
);

export default Routes;
