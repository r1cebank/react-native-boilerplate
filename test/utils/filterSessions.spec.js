import chai, { expect } from 'chai';
// File to test
import { Utils } from '../../src/global/globalIncludes';

describe('FilterSessions', () => {
    it('should correctly filter sessions', () => {
        const sessions = [
            {
                name: 'session 1',
                tags: [
                    '04-11'
                ]
            },
            {
                name: 'session 2',
                tags: [
                    '04-12'
                ]
            },
            {
                name: 'session 3',
                tags: [
                    '04-13'
                ]
            }
        ];
        const filtered = Utils.filterSessions(sessions, '[tags=04-11]');
        expect(filtered).to.eql({ name: 'session 1', tags: [ '04-11' ] });
    });
});
