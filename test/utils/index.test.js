var expect = require('chai').expect;

const {
    generateEmptyMatrix,
} = require('../../src/utils');
const {
    errorMessages,
} = require('../../src/constants');

describe('Utils', function () {

    describe('generateEmptyMatrix', function () {

        it('case #1', function () {
            const  result = generateEmptyMatrix()
            expect(result).to.be.deep.equal([
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ]);
        });

        it('case #2', function () {
            const  result = generateEmptyMatrix({
                height: 5,
                width: 5,
            })
            expect(result).to.be.deep.equal([
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
            ]);
        });

        it('case #3', function () {
            const  result = generateEmptyMatrix({
                height: 5,
                width: 7,
            })
            expect(result).to.be.deep.equal([
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0],
            ]);
        });

        it('case #4', function () {
            expect(() => {
                generateEmptyMatrix({
                    height: 0,
                    width: 0,
                })
            }).to.throw(errorMessages.PARAMS_SHOULD_BE_MORE_THEN_5);
        });

    });

});