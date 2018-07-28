import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default (initialState) => {
    const middleWares = [thunk];

    const store = createStore(rootReducer, initialState, compose(
        applyMiddleware(...middleWares),
        window.devToolsExtension ? window.devToolsExtension() : f => f,
    ));

    return store;
};
