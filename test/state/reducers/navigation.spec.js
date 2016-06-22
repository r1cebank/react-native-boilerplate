import chai, { expect } from 'chai';
// File to test
import { Actions } from '../../../src/global/globalIncludes';
import Reducer from '../../../src/state/reducers/navigation';

describe('Navigation', () => {
    it('Switch navigation should alter state correctly', () => {
        const action = Actions.Navigation.switchNavigation('notification');
        const state = Reducer({}, action);
        expect(state).to.have.property('tab', 'notification');
    });
    it('Switch day should alter state correctly', () => {
        const action = Actions.Navigation.switchDay('April 11');
        const state = Reducer({}, action);
        expect(state).to.have.property('day', 'April 11');
    });
});
