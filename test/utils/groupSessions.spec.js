import chai, { expect } from 'chai';
// File to test
import { Utils } from '../../src/global/globalIncludes';

describe('GroupSessions', () => {
    it('should correctly group sessions', () => {
        const sessions = [
            {
                name: 'session 1',
                id: '1',
                startTime: '2016-04-11T00:00:00',
                tags: [
                    '04-11'
                ]
            },
            {
                name: 'session 2',
                id: '2',
                startTime: '2016-04-11T00:00:00',
                tags: [
                    '04-12'
                ]
            },
            {
                name: 'session 3',
                id: '3',
                startTime: '2016-04-11T01:00:00',
                tags: [
                    '04-13'
                ]
            }
        ];
        const grouped = Utils.groupSessions(sessions);
        expect(grouped).to.have.property('12:00 AM');
        expect(grouped).to.have.property('1:00 AM');
        expect(grouped['12:00 AM']).to.have.property('1');
        expect(grouped['12:00 AM']).to.have.property('2');
        expect(grouped['1:00 AM']).to.have.property('3');
    });
});
