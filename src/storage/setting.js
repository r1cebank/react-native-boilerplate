/*
*  This file handles the storage of settings
*/
/* eslint-disable quote-props */

import SimpleStore from 'react-native-simple-store';

// Global Actions
import * as Actions from '../state/actions/actions';

// Global Includes
import { Store } from '../global/global-includes';

const Settings = {
    get: (key) => {
        SimpleStore.get('setting').then((navData) => {
        }).catch((e) => { /* Dispatch error */ });
    },
    set: (key) => {
        SimpleStore.get('setting').then((navData) => {
        }).catch((e) => { /* Dispatch error */ });
    },

};

module.exports = Settings;
