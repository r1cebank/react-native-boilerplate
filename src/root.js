/*
 * This is the root component, it is used to register with AppRegistry
 * Here the app will decide what root view type we will be using according to config
 */

/* @flow */

import React from 'react';
import { Provider } from 'react-redux';

// The root view is definatly the navigation component which define a default view
import Navigation from './global/navigation';
import App from './views/app';

import { Store } from './global/global-includes';

// Global Actions
import * as Actions from './state/actions/actions';

// Construct the root element
class Root extends React.Component {
    componentWillMount() {
        // Navigation startup code
        // 1) Populate settings
        // 2) Populate navigation
        Store.appStore.dispatch(Actions.fetchNavigation());
    }
    render() {
        return (
            <Provider store={Store.appStore}>
                <App>
                    <Navigation />
                </App>
            </Provider>
        );
    }
}

export default Root;
