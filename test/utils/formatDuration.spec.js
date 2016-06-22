import chai, { expect } from 'chai';
// File to test
import { Utils } from '../../src/global/globalIncludes';

describe('FormatDuration', () => {
    it('should correctly format minutes', () => {
        const startTime = '2016-04-11T00:00:00';
        const endTime = '2016-04-11T00:10:00';
        expect(Utils.formatDuration(startTime, endTime)).to.equal('10 min');
    });
    it('should correctly format hours', () => {
        const startTime = '2016-04-11T00:00:00';
        const endTime = '2016-04-11T01:00:00';
        expect(Utils.formatDuration(startTime, endTime)).to.equal('1 hour');
    });
    it('should return empty if duration is 0', () => {
        const startTime = '2016-04-11T00:00:00';
        const endTime = '2016-04-11T00:00:00';
        expect(Utils.formatDuration(startTime, endTime)).to.equal('');
    });
    it('should return plural hours', () => {
        const startTime = '2016-04-11T00:00:00';
        const endTime = '2016-04-11T02:00:00';
        expect(Utils.formatDuration(startTime, endTime)).to.equal('2 hours');
    });
});
