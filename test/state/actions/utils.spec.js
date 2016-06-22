import chai, { expect } from 'chai';
// File to test
import { Actions } from '../../../src/global/globalIncludes';

describe('Utils', () => {
    it('App error should return correct action', () => {
        const action = Actions.Utils.appError({ error: true });
        expect(action).to.have.property('type', 'APP_ERROR');
        expect(action).to.have.deep.property('error.error', true);
    });
});
