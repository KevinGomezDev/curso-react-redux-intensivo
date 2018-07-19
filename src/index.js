import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './routes';
import AppLayout from './components/AppLayout';

ReactDOM.render((
    <Router>
        <AppLayout>
            <Routes />
        </AppLayout>
    </Router>
), document.getElementById('root'));
