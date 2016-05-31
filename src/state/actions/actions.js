/*
* This file include all the actions
*/

import * as ActionType from './actionTypes';

export function fetchNavigation() {
    return {
        type: ActionType.FETCH_NAVIGATION
    };
}

export function updateNavigation() {
    return {
        type: ActionType.UPDATE_NAVIGATION
    };
}

export function navigationFetched(data) {
    return {
        type: ActionType.NAVIGATION_FETCHED,
        data
    };
}
