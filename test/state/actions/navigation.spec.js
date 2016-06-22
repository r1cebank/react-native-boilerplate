import chai, { expect } from 'chai';
// File to test
import { Actions } from '../../../src/global/globalIncludes';

describe('Navigation', () => {
    it('Switch navigation should return correct action', () => {
        const action = Actions.Navigation.switchNavigation('notification');
        expect(action).to.have.property('type', 'SWITCH_NAVIGATION');
        expect(action).to.have.property('tab', 'notification');
    });
    it('Switch day should return correct action', () => {
        const action = Actions.Navigation.switchDay('April 11');
        expect(action).to.have.property('type', 'SWITCH_DAY');
        expect(action).to.have.property('day', 'April 11');
    });
});
