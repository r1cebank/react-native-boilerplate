/* @flow */

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { routerReducer } from 'react-native-redux-router';
import devTools from 'remote-redux-devtools';

import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

import appStateReducer from './reducers/appstate';

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
)(createStore);

const rootReducer = combineReducers({
    // every modules reducer should be define here
    routerReducer,
    appstate: appStateReducer
});

const configureStore = function (initialState: Object = {}): Function {
    return createStoreWithMiddleware(rootReducer, initialState, devTools());
};

export default configureStore;
