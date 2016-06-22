import chai, { expect } from 'chai';
// File to test
import { Utils } from '../../src/global/globalIncludes';

describe('FormatTime', () => {
    it('should format am correctly', () => {
        const time = '2016-04-11T00:00:00';
        expect(Utils.formatTime(time)).to.equal('12:00 AM');
    });
    it('should format pm correctly', () => {
        const time = '2016-04-11T17:00:00';
        expect(Utils.formatTime(time)).to.equal('5:00 PM');
    });
});
