var expect = require('chai').expect;

const {
    generateEmptyMatrix,
} = require('../../src/utils');
const {
    diveShip,
} = require('../../src/utils/dive');

const {
    vectors,
} = require('../../src/constants');

let matrix = generateEmptyMatrix({
    width: 5,
    height: 5,
});

describe('dive main', function () {
    it('case #1', () => {
        matrix = diveShip({
            shipSize: 4,
            vector: vectors.HORIZONTAL,
            matrix,
            inputIndex: 0,
        });
        expect(matrix).to.be.deep.equal([
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [2, 2, 2, 2, 2],
            [1, 1, 1, 1, 2],
        ]);
    });
    it('case #2', () => {
        matrix = diveShip({
            shipSize: 3,
            vector: vectors.VERTICAL,
            matrix,
            inputIndex: 0,
        });
        expect(matrix).to.be.deep.equal([
            [1, 2, 0, 0, 0],
            [1, 2, 0, 0, 0],
            [1, 2, 0, 0, 0],
            [2, 2, 2, 2, 2],
            [1, 1, 1, 1, 2],
        ]);
    });
    it('case #3', () => {
        matrix = diveShip({
            shipSize: 2,
            vector: vectors.HORIZONTAL,
            matrix,
            inputIndex: 2,
        });
        expect(matrix).to.be.deep.equal([
            [1, 2, 0, 0, 0],
            [1, 2, 2, 2, 2],
            [1, 2, 1, 1, 2],
            [2, 2, 2, 2, 2],
            [1, 1, 1, 1, 2],
        ]);
    });
    it('case #4', () => {
        matrix = diveShip({
            shipSize: 1,
            vector: vectors.VERTICAL,
            matrix,
            inputIndex: 2,
        });
        expect(matrix).to.be.deep.equal([
            [1, 2, 1, 2, 0],
            [1, 2, 2, 2, 2],
            [1, 2, 1, 1, 2],
            [2, 2, 2, 2, 2],
            [1, 1, 1, 1, 2],
        ]);
    });
    it('case #5', () => {
        matrix = diveShip({
            shipSize: 1,
            vector: vectors.HORIZONTAL,
            matrix,
            inputIndex: 4,
        });
        expect(matrix).to.be.deep.equal([
            [1, 2, 1, 2, 1],
            [1, 2, 2, 2, 2],
            [1, 2, 1, 1, 2],
            [2, 2, 2, 2, 2],
            [1, 1, 1, 1, 2],
        ]);
    });
    it('case #6', () => {
        const newMatrix = diveShip({
            shipSize: 1,
            vector: vectors.HORIZONTAL,
            matrix,
            inputIndex: 4,
        });
        expect(newMatrix).to.be.deep.equal(-1);
    });
    describe('Case #1', () => {
        let matrix = generateEmptyMatrix({
            width: 10,
            height: 10,
        });

        it('step #1', () => {
            matrix = diveShip({
                shipSize: 3,
                inputIndex: 4,
                vector: vectors.VERTICAL,
                matrix,
            });
            expect(matrix).to.be.deep.equal([
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 2, 2, 2, 0, 0, 0, 0],
                [0, 0, 0, 2, 1, 2, 0, 0, 0, 0],
                [0, 0, 0, 2, 1, 2, 0, 0, 0, 0],
                [0, 0, 0, 2, 1, 2, 0, 0, 0, 0],
            ]);
        });
        it('step #2', () => {
            matrix = diveShip({
                shipSize: 2,
                inputIndex: 6,
                vector: vectors.HORIZONTAL,
                matrix,
            });
            expect(matrix).to.be.deep.equal([
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 2, 2, 2, 0, 0, 0, 0],
                [0, 0, 0, 2, 1, 2, 0, 0, 0, 0],
                [0, 0, 0, 2, 1, 2, 2, 2, 2, 0],
                [0, 0, 0, 2, 1, 2, 1, 1, 2, 0],
            ]);
        });
        it('step #3', () => {
            matrix = diveShip({
                shipSize: 2,
                inputIndex: 5,
                vector: vectors.VERTICAL,
                matrix,
            });
            expect(matrix).to.be.deep.equal([
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 2, 2, 2, 0, 0, 0],
                [0, 0, 0, 0, 2, 1, 2, 0, 0, 0],
                [0, 0, 0, 0, 2, 1, 2, 0, 0, 0],
                [0, 0, 0, 2, 2, 2, 2, 0, 0, 0],
                [0, 0, 0, 2, 1, 2, 0, 0, 0, 0],
                [0, 0, 0, 2, 1, 2, 2, 2, 2, 0],
                [0, 0, 0, 2, 1, 2, 1, 1, 2, 0],
            ]);
        });
        it('step #4', () => {
            matrix = diveShip({
                shipSize: 1,
                inputIndex: 7,
                vector: vectors.HORIZONTAL,
                matrix,
            });
            expect(matrix).to.be.deep.equal([
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 2, 2, 2, 0, 0, 0],
                [0, 0, 0, 0, 2, 1, 2, 0, 0, 0],
                [0, 0, 0, 0, 2, 1, 2, 0, 0, 0],
                [0, 0, 0, 2, 2, 2, 2, 2, 2, 0],
                [0, 0, 0, 2, 1, 2, 2, 1, 2, 0],
                [0, 0, 0, 2, 1, 2, 2, 2, 2, 0],
                [0, 0, 0, 2, 1, 2, 1, 1, 2, 0],
            ]);
        });
        it('step #5', () => {
            matrix = diveShip({
                shipSize: 4,
                inputIndex: 9,
                vector: vectors.VERTICAL,
                matrix,
            });
            expect(matrix).to.be.deep.equal([
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 2, 2, 2, 0, 0, 0],
                [0, 0, 0, 0, 2, 1, 2, 0, 0, 0],
                [0, 0, 0, 0, 2, 1, 2, 0, 2, 2],
                [0, 0, 0, 2, 2, 2, 2, 2, 2, 1],
                [0, 0, 0, 2, 1, 2, 2, 1, 2, 1],
                [0, 0, 0, 2, 1, 2, 2, 2, 2, 1],
                [0, 0, 0, 2, 1, 2, 1, 1, 2, 1],
            ]);
        });
        it('step #6', () => {
            matrix = diveShip({
                shipSize: 1,
                inputIndex: 7,
                vector: vectors.HORIZONTAL,
                matrix,
            });
            expect(matrix).to.be.deep.equal([
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 2, 2, 2, 0, 0, 0],
                [0, 0, 0, 0, 2, 1, 2, 2, 2, 0],
                [0, 0, 0, 0, 2, 1, 2, 1, 2, 2],
                [0, 0, 0, 2, 2, 2, 2, 2, 2, 1],
                [0, 0, 0, 2, 1, 2, 2, 1, 2, 1],
                [0, 0, 0, 2, 1, 2, 2, 2, 2, 1],
                [0, 0, 0, 2, 1, 2, 1, 1, 2, 1],
            ]);
        });
        it('step #7', () => {
            matrix = diveShip({
                shipSize: 3,
                inputIndex: 2,
                vector: vectors.HORIZONTAL,
                matrix,
            });
            // console.table(matrix);
            expect(matrix).to.be.deep.equal([
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 2, 2, 2, 2, 2, 0, 0, 0, 0],
                [0, 2, 1, 1, 1, 2, 0, 0, 0, 0],
                [0, 2, 2, 2, 2, 2, 2, 0, 0, 0],
                [0, 0, 0, 0, 2, 1, 2, 2, 2, 0],
                [0, 0, 0, 0, 2, 1, 2, 1, 2, 2],
                [0, 0, 0, 2, 2, 2, 2, 2, 2, 1],
                [0, 0, 0, 2, 1, 2, 2, 1, 2, 1],
                [0, 0, 0, 2, 1, 2, 2, 2, 2, 1],
                [0, 0, 0, 2, 1, 2, 1, 1, 2, 1],
            ]);
        });
        it('step #8', () => {
            matrix = diveShip({
                shipSize: 2,
                inputIndex: 7,
                vector: vectors.VERTICAL,
                matrix,
            });
            expect(matrix).to.be.deep.equal([
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
                [0, 2, 1, 1, 1, 2, 2, 1, 2, 0],
                [0, 2, 2, 2, 2, 2, 2, 1, 2, 0],
                [0, 0, 0, 0, 2, 1, 2, 2, 2, 0],
                [0, 0, 0, 0, 2, 1, 2, 1, 2, 2],
                [0, 0, 0, 2, 2, 2, 2, 2, 2, 1],
                [0, 0, 0, 2, 1, 2, 2, 1, 2, 1],
                [0, 0, 0, 2, 1, 2, 2, 2, 2, 1],
                [0, 0, 0, 2, 1, 2, 1, 1, 2, 1],
            ]);
        });
        it('step #9', () => {
            matrix = diveShip({
                shipSize: 1,
                inputIndex: 7,
                vector: vectors.VERTICAL,
                matrix,
            });
            expect(matrix).to.be.deep.equal([
                [0, 0, 0, 0, 0, 0, 2, 1, 2, 0],
                [0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
                [0, 2, 1, 1, 1, 2, 2, 1, 2, 0],
                [0, 2, 2, 2, 2, 2, 2, 1, 2, 0],
                [0, 0, 0, 0, 2, 1, 2, 2, 2, 0],
                [0, 0, 0, 0, 2, 1, 2, 1, 2, 2],
                [0, 0, 0, 2, 2, 2, 2, 2, 2, 1],
                [0, 0, 0, 2, 1, 2, 2, 1, 2, 1],
                [0, 0, 0, 2, 1, 2, 2, 2, 2, 1],
                [0, 0, 0, 2, 1, 2, 1, 1, 2, 1],
            ]);
        });
        it('step #10', () => {
            matrix = diveShip({
                shipSize: 1,
                inputIndex: 2,
                vector: vectors.HORIZONTAL,
                matrix,
            });
            expect(matrix).to.be.deep.equal([
                [0, 2, 1, 2, 0, 0, 2, 1, 2, 0],
                [0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
                [0, 2, 1, 1, 1, 2, 2, 1, 2, 0],
                [0, 2, 2, 2, 2, 2, 2, 1, 2, 0],
                [0, 0, 0, 0, 2, 1, 2, 2, 2, 0],
                [0, 0, 0, 0, 2, 1, 2, 1, 2, 2],
                [0, 0, 0, 2, 2, 2, 2, 2, 2, 1],
                [0, 0, 0, 2, 1, 2, 2, 1, 2, 1],
                [0, 0, 0, 2, 1, 2, 2, 2, 2, 1],
                [0, 0, 0, 2, 1, 2, 1, 1, 2, 1],
            ]);
        });

    });
});