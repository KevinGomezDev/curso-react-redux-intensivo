import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './store/configureStore.dev';
import initialState from './reducers/initialState';
import Routes from './routes';
import AppLayout from './components/AppLayout';

const store = configureStore(initialState);

ReactDOM.render((
    <Provider store={store}>
        <Router>
            <AppLayout>
                <Routes />
            </AppLayout>
        </Router>
    </Provider>
), document.getElementById('root'));
