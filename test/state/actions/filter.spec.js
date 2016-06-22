import chai, { expect } from 'chai';
// File to test
import { Actions } from '../../../src/global/globalIncludes';

describe('Filter', () => {
    it('Apply filter should return correct action', () => {
        const action = Actions.Filter.applyFilters({ filter1: true });
        expect(action).to.have.property('type', 'APPLY_FILTERS');
        expect(action).to.have.deep.property('selectedFilters.filter1', true);
    });
    it('Clear filter should return correct action', () => {
        const action = Actions.Filter.clearFilters();
        expect(action).to.have.property('type', 'CLEAR_FILTERS');
        expect(action).not.to.have.property('selectedFilters');
    });
});
