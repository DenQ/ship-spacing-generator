var expect = require('chai').expect;

const {
    generatePullShips,
} = require('../../src/utils/generate-pull-ships');

// const {
//     vectors,
// } = require('../../src/constants');


describe('generate pull ships', function () {
    it('case #1', () => {
        const pull = generatePullShips();
        for(let i = 0; i < 4; i++) {
            expect(pull).to.be.includes(i + 1);
        }
    });
});