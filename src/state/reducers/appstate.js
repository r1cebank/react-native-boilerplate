/*
 * This file includes all the basic app stage reducers
 */

import { Storage } from '../../global/global-includes';
import * as ActionType from '../actions/actionTypes';
import initialState from '../initial-state';

function appState(state = initialState, action) {
    switch (action.type) {
        case ActionType.FETCH_NAVIGATION: {
            // TODO: Adding real configs
            Storage.Navigation.fetch();
            return {
                ...state
            };
        }
        case ActionType.NAVIGATION_FETCHED: {
            return {
                ...state,
                loading: false,
                navigation: action.data
            };
        }
        case ActionType.UPDATE_NAVIGATION: {
            Storage.Navigation.update();
            return {
                ...state
            };
        }
        default:
            return state;
    }
}

export default appState;
