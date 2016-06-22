/*
 * This file includes all the basic app state reducers
 */

import { Storage } from '../../global/globalIncludes';
import * as ActionType from '../actions/actionTypes';
import { InitialAppState } from '../initialState';

function reducer(state = InitialAppState, action, skipLogic) {
    switch (action.type) {
        case ActionType.FETCH_DATA: {
            if (!skipLogic) {
                Storage.Generic().fetch(action.config);
            }
            return {
                ...state
            };
        }
        case ActionType.UPDATE_DATA: {
            if (!skipLogic) {
                Storage.Generic().update(action.config);
            }
            return {
                ...state
            };
        }
        case ActionType.DATA_FETCHED: {
            const newState = {
                ...state,
                loading: false
            };
            newState[action.config.storageKey] = action.data;
            return newState;
        }
        default:
            return state;
    }
}

export default reducer;
