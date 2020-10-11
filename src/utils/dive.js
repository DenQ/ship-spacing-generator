const _ = require('lodash');

const {
    vectors,
    settings,
} = require('../constants');


const diveShip = ({
    shipSize,
    vector,
    matrix,
    inputIndex,
}) => {
    let availableIndex = null;
    if (vector === vectors.VERTICAL) {
        availableIndex = getVerticalAvailableIndex({
            matrix,
            inputIndex,
        });
    } else {
        availableIndex = getHorizontalAvailableIndex({
            matrix,
            inputIndex,
            shipSize,
        });
    }
    // TODO: need to refactoring -> -1 set special name constant
    if (availableIndex === -1) return -1;
    if (!canMountShip({
        shipSize,
        vector,
        matrix,
        inputIndex,
    })) {
        return -1;
    }

    const ship = getShipInfo({
        matrix,
        inputIndex,
        vector,
        shipSize,
    });

    ship.forEach((item) => {
        const [x, y] = item;
        matrix[y][x] = settings.MATRIX_CELL_SHIP;
        procedureWrapCell({
            matrix,
            cell: item,
        });
    });
    return matrix;
};
// TODO: need to refactoring
const procedureWrapCell = ({
    matrix,
    cell,
}) => {
    const [x, y] = cell;

    if (x + 1 <= matrix.length - 1) {
        if (matrix[y][x+1] !== settings.MATRIX_CELL_SHIP) {
            matrix[y][x+1] = settings.MATRIX_CELL_RED;
        };
    }
    if (x - 1 >= 0) {
        if (matrix[y][x-1] !== settings.MATRIX_CELL_SHIP) {
            matrix[y][x-1] = settings.MATRIX_CELL_RED;
        }
    }
    if (y + 1 <= matrix.length - 1) {
        if (matrix[y + 1][x] !== settings.MATRIX_CELL_SHIP) {
            matrix[y + 1][x] = settings.MATRIX_CELL_RED;
        }
    }
    if (y - 1 >= 0) {
        if (matrix[y - 1][x] !== settings.MATRIX_CELL_SHIP) {
            matrix[y - 1][x] = settings.MATRIX_CELL_RED;
        }
    }
    // diagonals
    if (x + 1 <= matrix.length - 1 && y + 1 <= matrix.length - 1) {
        matrix[y+1][x+1] = settings.MATRIX_CELL_RED;
    }
    if (x + 1 <= matrix.length - 1 && y - 1 >= 0) {
        matrix[y-1][x+1] = settings.MATRIX_CELL_RED;
    }
    if (x - 1 >= 0 && y - 1 >= 0) {
        matrix[y-1][x-1] = settings.MATRIX_CELL_RED;
    }
    if (x - 1 >= 0 && y + 1 <= matrix.length - 1) {
        matrix[y+1][x-1] = settings.MATRIX_CELL_RED;
    }
};

const getVerticalAvailableIndex = ({
    matrix,
    inputIndex,
}) => {
    const vertical = getVertical({
        matrix,
        inputIndex,
    });
    const sum = _.sum(vertical);
    if (sum === 0) return vertical.length - 1;

    let targetIndex = 0;
    let done = false;
    vertical.forEach((cell, index) => {
        if (cell !== 0 && !done) {
            done = true;
            targetIndex = index;
        }
    });
    return targetIndex - 1;
};

// For horizontal vector ship. Search available height
const getHorizontalAvailableIndex = ({
    matrix,
    inputIndex,
    shipSize,
}) => {
    const pullIndexes = Array.from(Array(shipSize), (item, index) => {
        return getVerticalAvailableIndex({
            matrix,
            inputIndex: inputIndex + index,
        });
    });
    return _.min(pullIndexes);
};

const canMountShip = ({
    matrix,
    inputIndex,
    shipSize,
    vector,
}) => {
    if (vector === vectors.VERTICAL) {
        const availableIndex = getVerticalAvailableIndex({
            matrix,
            inputIndex,
        });
        if (availableIndex === -1) return false;
        return availableIndex + 1 >= shipSize;
    } else {
        if (matrix.length - inputIndex < shipSize) return false;
        const availableIndex = getHorizontalAvailableIndex({
            matrix,
            inputIndex,
            shipSize
        });
        return availableIndex > -1;
    }
};

const getShipInfo = ({
    vector,
    matrix,
    inputIndex,
    shipSize,
}) => {
    if (vector === vectors.HORIZONTAL) {
        const heightIndex = getHorizontalAvailableIndex({
            matrix,
            inputIndex,
            shipSize,
        });
        return Array.from(Array(shipSize), (item, index) => {
            return [inputIndex + index, heightIndex];
        });
    } else {
        const heightIndex = getVerticalAvailableIndex({
            matrix,
            inputIndex,
            shipSize
        });
        return Array.from(Array(shipSize), (item, index) => {
            return [inputIndex, heightIndex - index];
        }).reverse();
    }
};

const getVertical = ({
    matrix,
    inputIndex,
}) => {
    return matrix.map((row) => row[inputIndex]).map((item) => item);
};

module.exports = {
    diveShip,
    getVertical,
    getVerticalAvailableIndex,
    canMountShip,
    getHorizontalAvailableIndex,
    getShipInfo,
};
