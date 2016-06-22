/*
* This file include all the util actions
*/

import * as ActionType from './actionTypes';

export function appError(error) {
    return {
        type: ActionType.APP_ERROR,
        error
    };
}
