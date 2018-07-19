import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Posts from './pages/Posts';
import NotFound from './pages/NotFound';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route component={NotFound} />
    </Switch>
);

export default Routes;
