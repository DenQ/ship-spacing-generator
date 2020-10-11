var expect = require('chai').expect;

const {
    generateEmptyMatrix,
} = require('../../src/utils');
const {
    diveShip,
    getVertical,
    getVerticalAvailableIndex,
    getHorizontalAvailableIndex,
    canMountShip,
    getShipInfo,
} = require('../../src/utils/dive');

const {
    vectors,
} = require('../../src/constants');

describe('Utils', function () {

    describe('diveShip', function () {
        describe('vertical', function () {
            it('case #1', () => {
                const matrix = generateEmptyMatrix({
                    width: 5,
                    height: 5,
                });
                const newMatrix = diveShip({
                    shipSize: 4,
                    vector: vectors.HORIZONTAL,
                    matrix,
                    inputIndex: 0,
                });
                expect(newMatrix).to.be.deep.equal([
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [2, 2, 2, 2, 2],
                    [1, 1, 1, 1, 2],
                ]);
            });
            it('case #2', () => {
                const matrix = generateEmptyMatrix({
                    width: 5,
                    height: 5,
                });
                const newMatrix = diveShip({
                    shipSize: 3,
                    vector: vectors.HORIZONTAL,
                    matrix,
                    inputIndex: 1,
                });
                expect(newMatrix).to.be.deep.equal([
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [2, 2, 2, 2, 2],
                    [2, 1, 1, 1, 2],
                ]);
            });
            it('case #3', () => {
                const matrix = [
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [2, 2, 2, 2, 2],
                    [2, 1, 1, 1, 2],
                ];
                const newMatrix = diveShip({
                    shipSize: 3,
                    vector: vectors.HORIZONTAL,
                    matrix,
                    inputIndex: 1,
                });
                expect(newMatrix).to.be.deep.equal([
                    [0, 0, 0, 0, 0],
                    [2, 2, 2, 2, 2],
                    [2, 1, 1, 1, 2],
                    [2, 2, 2, 2, 2],
                    [2, 1, 1, 1, 2],
                ]);
            });
            it('case #4', () => {
                const matrix = [
                    [0, 0, 0, 0, 0],
                    [2, 2, 2, 2, 2],
                    [2, 1, 1, 1, 2],
                    [2, 2, 2, 2, 2],
                    [2, 1, 1, 1, 2],
                ];
                const newMatrix = diveShip({
                    shipSize: 1,
                    vector: vectors.HORIZONTAL,
                    matrix,
                    inputIndex: 0,
                });
                expect(newMatrix).to.be.deep.equal([
                    [1, 2, 0, 0, 0],
                    [2, 2, 2, 2, 2],
                    [2, 1, 1, 1, 2],
                    [2, 2, 2, 2, 2],
                    [2, 1, 1, 1, 2],
                ]);
            });
            it('case #5', () => {
                const matrix = [
                    [1, 2, 0, 0, 0],
                    [2, 2, 2, 2, 2],
                    [2, 1, 1, 1, 2],
                    [2, 2, 2, 2, 2],
                    [2, 1, 1, 1, 2],
                ];
                const newMatrix = diveShip({
                    shipSize: 3,
                    vector: vectors.HORIZONTAL,
                    matrix,
                    inputIndex: 2,
                });
                expect(newMatrix).to.be.deep.equal([
                    [1, 2, 1, 1, 1],
                    [2, 2, 2, 2, 2],
                    [2, 1, 1, 1, 2],
                    [2, 2, 2, 2, 2],
                    [2, 1, 1, 1, 2],
                ]);
            });
            it('case #6', () => {
                const matrix = [
                    [1, 2, 0, 0, 0],
                    [2, 2, 2, 2, 2],
                    [2, 1, 1, 1, 2],
                    [2, 2, 2, 2, 2],
                    [2, 1, 1, 1, 2],
                ];
                const newMatrix = diveShip({
                    shipSize: 4,
                    vector: vectors.HORIZONTAL,
                    matrix,
                    inputIndex: 2,
                });
                expect(newMatrix).to.be.equal(-1);
            });
        });

        describe('vertical', function () {
            it('case #1', () => {
                const matrix = generateEmptyMatrix({
                    width: 5,
                    height: 5,
                });
                const newMatrix = diveShip({
                    shipSize: 4,
                    vector: vectors.VERTICAL,
                    matrix,
                    inputIndex: 0,
                });
                expect(newMatrix).to.be.deep.equal([
                    [2, 2, 0, 0, 0],
                    [1, 2, 0, 0, 0],
                    [1, 2, 0, 0, 0],
                    [1, 2, 0, 0, 0],
                    [1, 2, 0, 0, 0],
                ]);
            });
            it('case #2', () => {
                const matrix = generateEmptyMatrix({
                    width: 5,
                    height: 5,
                });
                const newMatrix = diveShip({
                    shipSize: 1,
                    vector: vectors.VERTICAL,
                    matrix,
                    inputIndex: 2,
                });
                expect(newMatrix).to.be.deep.equal([
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 2, 2, 2, 0],
                    [0, 2, 1, 2, 0],
                ]);
            });
            it('case #3', () => {
                const matrix = generateEmptyMatrix({
                    width: 5,
                    height: 5,
                });
                const newMatrix = diveShip({
                    shipSize: 4,
                    vector: vectors.VERTICAL,
                    matrix,
                    inputIndex: 4,
                });
                expect(newMatrix).to.be.deep.equal([
                    [0, 0, 0, 2, 2],
                    [0, 0, 0, 2, 1],
                    [0, 0, 0, 2, 1],
                    [0, 0, 0, 2, 1],
                    [0, 0, 0, 2, 1],
                ]);
            });
            it('case #4', () => {
                const matrix = [
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [2, 2, 2, 2, 2],
                    [2, 1, 1, 1, 2],
                ];
                const newMatrix = diveShip({
                    shipSize: 1,
                    vector: vectors.VERTICAL,
                    matrix,
                    inputIndex: 2,
                });
                expect(newMatrix).to.be.deep.equal([
                    [0, 0, 0, 0, 0],
                    [0, 2, 2, 2, 0],
                    [0, 2, 1, 2, 0],
                    [2, 2, 2, 2, 2],
                    [2, 1, 1, 1, 2],
                ]);
            });
            it('case #5', () => {
                const matrix = [
                    [0, 0, 0, 0, 0],
                    [0, 2, 2, 2, 0],
                    [0, 2, 1, 2, 0],
                    [2, 2, 2, 2, 2],
                    [2, 1, 1, 1, 2],
                ];
                const newMatrix = diveShip({
                    shipSize: 4,
                    vector: vectors.VERTICAL,
                    matrix,
                    inputIndex: 0,
                });
                expect(newMatrix).to.be.equal(-1);
            });
        });
    });

    describe('getVertical', () => {
        it('case #1', () => {
            const matrix = generateEmptyMatrix({
                width: 5,
                height: 5,
            });
            const result = getVertical({
                matrix,
                inputIndex: 0,
            });
            expect(result).to.be.deep.equal([0, 0, 0, 0, 0]);
        });
        it('case #2', () => {
            const matrix = [
                [0, 0, 0, 0, 0],
                [2, 0, 0, 0, 0],
                [1, 0, 0, 0, 0],
                [2, 2, 0, 0, 0],
                [1, 2, 0, 0, 0],
            ];
            const result = getVertical({
                matrix,
                inputIndex: 0,
            });
            expect(result).to.be.deep.equal([0, 2, 1, 2, 1]);
        });
        it('case #2', () => {
            const matrix = [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 1],
                [0, 0, 0, 0, 2],
                [0, 0, 0, 0, 1],
            ];
            const result = getVertical({
                matrix,
                inputIndex: 4,
            });
            expect(result).to.be.deep.equal([0, 0, 1, 2, 1]);
        });
    });


    describe('getVerticalAvailableIndex', function () {
        it('case #1', () => {
            const matrix = generateEmptyMatrix({
                width: 5,
                height: 5,
            });
            const result = getVerticalAvailableIndex({
                matrix,
                inputIndex: 0,
            });
            expect(result).to.be.deep.equal(4);
        });

        it('case #2', () => {
            const matrix = [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [2, 2, 0, 0, 0],
                [1, 2, 0, 0, 0],
            ];
            const result = getVerticalAvailableIndex({
                matrix,
                inputIndex: 0,
            });
            expect(result).to.be.deep.equal(2);
        });

        it('case #3', () => {
            const matrix = [
                [0, 0, 0, 0, 0],
                [2, 0, 0, 0, 0],
                [1, 0, 0, 0, 0],
                [2, 2, 0, 0, 0],
                [1, 2, 0, 0, 0],
            ];
            const result = getVerticalAvailableIndex({
                matrix,
                inputIndex: 0,
            });
            expect(result).to.be.deep.equal(0);
        });

        it('case #4', () => {
            const matrix = [
                [1, 2, 0, 0, 0],
                [2, 2, 0, 0, 0],
                [2, 0, 0, 0, 0],
                [2, 2, 0, 0, 0],
                [1, 2, 0, 0, 0],
            ];
            const result = getVerticalAvailableIndex({
                matrix,
                inputIndex: 0,
            });
            expect(result).to.be.deep.equal(-1);
        });

        it('case #5', () => {
            const matrix = [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 2, 2],
                [0, 0, 0, 2, 1],
                [0, 0, 0, 2, 2],
                [0, 0, 0, 0, 0],
            ];
            const result = getVerticalAvailableIndex({
                matrix,
                inputIndex: 4,
            });
            expect(result).to.be.deep.equal(0);
        });
    });

    describe('canMountShip Vertical vector ship', function () {
        it('case #1', () => {
            const matrix = generateEmptyMatrix({
                width: 5,
                height: 5,
            });
            const result = canMountShip({
                matrix,
                inputIndex: 0,
                shipSize: 1,
                vector: vectors.VERTICAL,
            });
            expect(result).to.be.equal(true);
        });
        it('case #2', () => {
            const matrix = generateEmptyMatrix({
                width: 5,
                height: 5,
            });
            const result = canMountShip({
                matrix,
                inputIndex: 0,
                shipSize: 4,
                vector: vectors.VERTICAL,
            });
            expect(result).to.be.equal(true);
        });
        it('case #3', () => {
            const matrix = generateEmptyMatrix({
                width: 5,
                height: 5,
            });
            const result = canMountShip({
                matrix,
                inputIndex: 0,
                shipSize: 10,
                vector: vectors.VERTICAL,
            });
            expect(result).to.be.equal(false);
        });
        it('case #4', () => {
            const matrix = [
                [0, 0, 0, 0, 0],
                [2, 2, 2, 0, 0],
                [2, 1, 2, 0, 0],
                [2, 1, 2, 0, 0],
                [2, 1, 2, 0, 0],
            ];
            const result = canMountShip({
                matrix,
                inputIndex: 3,
                shipSize: 3,
                vector: vectors.VERTICAL,
            });
            expect(result).to.be.equal(true);
        });
        it('case #5', () => {
            const matrix = [
                [0, 0, 0, 0, 0],
                [2, 2, 2, 0, 0],
                [2, 1, 2, 0, 0],
                [2, 1, 2, 0, 0],
                [2, 1, 2, 0, 0],
            ];
            const result = canMountShip({
                matrix,
                inputIndex: 2,
                shipSize: 2,
                vector: vectors.VERTICAL,
            });
            expect(result).to.be.equal(false);
        });
        it('case #6', () => {
            const matrix = [
                [2, 2, 2, 0, 0],
                [2, 1, 2, 0, 0],
                [2, 1, 2, 0, 0],
                [2, 2, 2, 0, 0],
                [0, 0, 0, 0, 0],
            ];
            const result = canMountShip({
                matrix,
                inputIndex: 1,
                shipSize: 1,
                vector: vectors.VERTICAL,
            });
            expect(result).to.be.equal(false);
        });
    });

    describe('getHorizontalAvailableIndex', () => {
        it('case #1', () => {
            const matrix = generateEmptyMatrix({
                width: 5,
                height: 5,
            });
            const result = getHorizontalAvailableIndex({
                matrix,
                inputIndex: 0,
                shipSize: 1,
            });
            expect(result).to.be.deep.equal(4);
        });
        it('case #2', () => {
            const matrix = [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
            ];
            const result = getHorizontalAvailableIndex({
                matrix,
                inputIndex: 0,
                shipSize: 4
            });
            expect(result).to.be.deep.equal(4);
        });
        it('case #3', () => {
            const matrix = [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [2, 2, 2, 2, 2],
                [2, 1, 1, 1, 2],
            ];
            const result = getHorizontalAvailableIndex({
                matrix,
                inputIndex: 1,
                shipSize: 4
            });
            expect(result).to.be.deep.equal(2);
        });
        it('case #4', () => {
            const matrix = [
                [0, 0, 0, 0, 0],
                [0, 2, 2, 2, 0],
                [0, 2, 1, 2, 0],
                [2, 2, 2, 2, 2],
                [2, 1, 1, 1, 2],
            ];
            const result = getHorizontalAvailableIndex({
                matrix,
                inputIndex: 1,
                shipSize: 4
            });
            expect(result).to.be.deep.equal(0);
        });
        it('case #5', () => {
            const matrix = [
                [0, 0, 0, 0, 0],
                [0, 2, 2, 2, 0],
                [0, 2, 1, 2, 0],
                [2, 2, 2, 2, 2],
                [2, 1, 1, 1, 2],
            ];
            const result = getHorizontalAvailableIndex({
                matrix,
                inputIndex: 0,
                shipSize: 1
            });
            expect(result).to.be.deep.equal(2);
        });
        it('case #6', () => {
            const matrix = [
                [0, 0, 0, 0, 0],
                [2, 2, 2, 2, 2],
                [2, 1, 1, 1, 1],
                [2, 2, 2, 2, 2],
                [1, 2, 0, 0, 0],
            ];
            const result = getHorizontalAvailableIndex({
                matrix,
                inputIndex: 4,
                shipSize: 1
            });
            expect(result).to.be.deep.equal(0);
        });
        it('case #7', () => {
            const matrix = [
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
            ];
            const result = getHorizontalAvailableIndex({
                shipSize: 3,
                inputIndex: 2,
                matrix,
            });
            expect(result).to.be.deep.equal(2);
        });
    });

    describe('canMountShip Horizontal vector ship', function () {
        it('case #1', () => {
            const matrix = generateEmptyMatrix({
                width: 5,
                height: 5,
            });
            const result = canMountShip({
                matrix,
                inputIndex: 0,
                shipSize: 1,
                vector: vectors.HORIZONTAL,
            });
            expect(result).to.be.equal(true);
        });
        it('case #2', () => {
            const matrix = generateEmptyMatrix({
                width: 5,
                height: 5,
            });
            const result = canMountShip({
                matrix,
                inputIndex: 0,
                shipSize: 4,
                vector: vectors.HORIZONTAL,
            });
            expect(result).to.be.equal(true);
        });
        it('case #3', () => {
            const matrix = [
                [0, 0, 0, 0, 0],
                [2, 2, 2, 0, 0],
                [2, 1, 2, 0, 0],
                [2, 1, 2, 0, 0],
                [2, 1, 2, 0, 0],
            ];
            const result = canMountShip({
                matrix,
                inputIndex: 2,
                shipSize: 3,
                vector: vectors.HORIZONTAL,
            });
            expect(result).to.be.equal(true);
        });
        it('case #4', () => {
            const matrix = [
                [0, 0, 0, 0, 0],
                [2, 2, 2, 0, 0],
                [2, 1, 2, 0, 0],
                [2, 1, 2, 0, 0],
                [2, 1, 2, 0, 0],
            ];
            const result = canMountShip({
                matrix,
                inputIndex: 4,
                shipSize: 1,
                vector: vectors.HORIZONTAL,
            });
            expect(result).to.be.equal(true);
        });
        it('case #5', () => {
            const matrix = [
                [0, 0, 0, 2, 1],
                [2, 2, 2, 2, 2],
                [2, 1, 2, 0, 0],
                [2, 1, 2, 0, 0],
                [2, 1, 2, 0, 0],
            ];
            const result = canMountShip({
                matrix,
                inputIndex: 2,
                shipSize: 2,
                vector: vectors.HORIZONTAL,
            });
            expect(result).to.be.equal(false);
        });
        it('case #6', () => {
            const matrix = [
                [0, 0, 0, 2, 1],
                [2, 2, 2, 2, 2],
                [2, 1, 2, 0, 0],
                [2, 1, 2, 0, 0],
                [2, 1, 2, 0, 0],
            ];
            const result = canMountShip({
                matrix,
                inputIndex: 3,
                shipSize: 2,
                vector: vectors.HORIZONTAL,
            });
            expect(result).to.be.equal(false);
        });
    });

    describe('getShipInfo', function () {
        describe('horizontal', function () {
            it('case #1', () => {
                const matrix = generateEmptyMatrix({
                    width: 5,
                    height: 5,
                });
                const info = getShipInfo({
                    matrix,
                    inputIndex: 3,
                    shipSize: 2,
                    vector: vectors.HORIZONTAL,
                });
                expect(info).to.be.deep.equal([
                    [3, 4], [4, 4],
                ]);
            });
            it('case #2', () => {
                const matrix = generateEmptyMatrix({
                    width: 5,
                    height: 5,
                });
                const info = getShipInfo({
                    matrix,
                    inputIndex: 4,
                    shipSize: 1,
                    vector: vectors.HORIZONTAL,
                });
                expect(info).to.be.deep.equal([
                    [4, 4],
                ]);
            });
            it('case #3', () => {
                const matrix = [
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [2, 2, 2, 2, 2],
                    [2, 1, 1, 1, 2],
                ];
                const info = getShipInfo({
                    matrix,
                    inputIndex: 1,
                    shipSize: 3,
                    vector: vectors.HORIZONTAL,
                });
                expect(info).to.be.deep.equal([
                    [1, 2], [2, 2], [3, 2],
                ]);
            });
            it('case #4', () => {
                const matrix = [
                    [0, 0, 0, 0, 0],
                    [0, 2, 2, 2, 0],
                    [0, 2, 1, 2, 0],
                    [2, 2, 2, 2, 2],
                    [2, 1, 1, 1, 2],
                ];
                const info = getShipInfo({
                    matrix,
                    inputIndex: 1,
                    shipSize: 4,
                    vector: vectors.HORIZONTAL,
                });
                expect(info).to.be.deep.equal([
                    [1, 0], [2, 0], [3, 0], [4, 0]
                ]);
            });
            it('case #5', () => {
                const matrix = [
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
                ];
                const info = getShipInfo({
                    shipSize: 3,
                    inputIndex: 2,
                    vector: vectors.HORIZONTAL,
                    matrix,
                });
                expect(info).to.be.deep.equal([
                    [2, 2], [3, 2], [4, 2],
                ]);
            });
        });
        describe('vertical', function () {
            it('case #1', () => {
                const matrix = generateEmptyMatrix({
                    width: 5,
                    height: 5,
                });
                const info = getShipInfo({
                    matrix,
                    inputIndex: 3,
                    shipSize: 2,
                    vector: vectors.VERTICAL,
                });
                expect(info).to.be.deep.equal([
                    [3, 3], [3, 4],
                ]);
            });
            it('case #2', () => {
                const matrix = generateEmptyMatrix({
                    width: 5,
                    height: 5,
                });
                const info = getShipInfo({
                    matrix,
                    inputIndex: 0,
                    shipSize: 4,
                    vector: vectors.VERTICAL,
                });
                expect(info).to.be.deep.equal([
                    [0, 1], [0, 2], [0, 3], [0, 4],
                ]);
            });
            it('case #3', () => {
                const matrix = generateEmptyMatrix({
                    width: 5,
                    height: 5,
                });
                const info = getShipInfo({
                    matrix,
                    inputIndex: 0,
                    shipSize: 1,
                    vector: vectors.VERTICAL,
                });
                expect(info).to.be.deep.equal([
                    [0, 4],
                ]);
            });
            it('case #4', () => {
                const matrix = [
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [2, 2, 0, 0, 0],
                    [1, 2, 0, 2, 2],
                    [1, 2, 2, 2, 1],
                ];
                const info = getShipInfo({
                    matrix,
                    inputIndex: 2,
                    shipSize: 4,
                    vector: vectors.VERTICAL,
                });
                expect(info).to.be.deep.equal([
                    [2, 0], [2, 1], [2, 2], [2, 3],
                ]);
            });
            it('case #5', () => {
                const matrix = [
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [2, 2, 2, 0, 0],
                    [1, 2, 0, 2, 2],
                    [1, 2, 2, 2, 1],
                ];
                const info = getShipInfo({
                    matrix,
                    inputIndex: 2,
                    shipSize: 1,
                    vector: vectors.VERTICAL,
                });
                expect(info).to.be.deep.equal([
                    [2, 1],
                ]);
            });
        });
    });

});