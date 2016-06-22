import chai, { expect } from 'chai';
// File to test
import { Utils } from '../../src/global/globalIncludes';

describe('GetMapURL', () => {
    it('should get map correctly based on ratio', () => {
        const map = {
            x1: {
                url: 'x1'
            },
            x2: {
                url: 'x2'
            },
            x3: {
                url: 'x3'
            }
        };

        expect(Utils.getMapURL(map, 1)).to.equal('x1');
        expect(Utils.getMapURL(map, 2)).to.equal('x2');
        expect(Utils.getMapURL(map, 3)).to.equal('x3');
    });
    it('should return largest map for invalid input', () => {
        const map = {
            x1: {
                url: 'x1'
            },
            x2: {
                url: 'x1'
            },
            x3: {
                url: 'x3'
            }
        };

        expect(Utils.getMapURL(map, '')).to.equal('x3');
        expect(Utils.getMapURL(map, 4)).to.equal('x3');
    });
    it('should return empty string if map doesnt exist', () => {
        expect(Utils.getMapURL(null, 1)).to.equal('');
        expect(Utils.getMapURL(undefined, 1)).to.equal('');
    });
});
