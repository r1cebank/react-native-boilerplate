/*
 *  This file includes the all actions in the application
 */

/* eslint-disable global-require */

const defaults = {
    get Data() { return require('../../state/actions/data'); },
    get Utils() { return require('../../state/actions/utils'); },
    get Filter() { return require('../../state/actions/filter'); },
    get Navigation() { return require('../../state/actions/navigation'); }
};

module.exports = defaults;
