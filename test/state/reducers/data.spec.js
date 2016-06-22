import chai, { expect } from 'chai';
// File to test
import { Actions } from '../../../src/global/globalIncludes';
import Reducer from '../../../src/state/reducers/data';
import shortId from 'shortid'

describe('Data', () => {
    it('Fetch data should not alter state', () => {
        const action = Actions.Data.fetchData({ config: true });
        const initialState = {
            id: shortId.generate()
        };
        const state = Reducer(initialState, action, true);
        expect(state).to.eql(initialState);
    });
});
