/*
 *  This file defines the utilities in the application
 */

/* eslint-disable global-require */

const utils = {
    get f8StyleSheet() { return require('../../utils/f8StyleSheet'); },
    get formatTime() { return require('../../utils/formatTime'); },
    get formatDuration() { return require('../../utils/formatDuration'); },
    get groupSessions() { return require('../../utils/groupSessions'); },
    get filterSessions() { return require('../../utils/filterSessions'); },
    get getMapURL() { return require('../../utils/getMapURL'); }
};

module.exports = utils;
