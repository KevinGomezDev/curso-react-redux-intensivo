import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

export default (initialState) => {
    const middleWares = [];

    const store = createStore(rootReducer, initialState, compose(
        applyMiddleware(...middleWares),
        window.devToolsExtension ? window.devToolsExtension() : f => f,
    ));

    return store;
};
