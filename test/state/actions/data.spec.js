import chai, { expect } from 'chai';
// File to test
import { Actions } from '../../../src/global/globalIncludes';

describe('Data', () => {
    it('Fetch should return correct action', () => {
        const action = Actions.Data.fetchData({ config: true });
        expect(action).to.have.property('type', 'FETCH_DATA');
        expect(action).to.have.deep.property('config.config', true);
    });
    it('Update should return correct action', () => {
        const action = Actions.Data.updateData({ config: true });
        expect(action).to.have.property('type', 'UPDATE_DATA');
        expect(action).to.have.deep.property('config.config', true);
    });
    it('Fetched should return correct action', () => {
        const action = Actions.Data.dataFetched({ config: true }, { data: true });
        expect(action).to.have.property('type', 'DATA_FETCHED');
        expect(action).to.have.deep.property('config.config', true);
        expect(action).to.have.deep.property('data.data', true);
    });
});
