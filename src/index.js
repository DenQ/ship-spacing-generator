const {
    initialInputParams,
    vectors,
} = require('./constants');
const {
    generateEmptyMatrix,
} = require('./utils');
const {
    diveShip,
} = require('./utils/dive');
const {
    generatePullShips,
} = require('./utils/generate-pull-ships');

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

module.exports = (params = initialInputParams) => {
    for (let i = 0; i < 10; i++) { // 10 попыток для заполнения матрицы
        const newMatrix = placement(params);
        if (newMatrix !== -1) {
            console.log('Generate: ', i + 1);
            return newMatrix;
        }
    }

    return [];
};

const placement = (params) => {
    const pull = generatePullShips();
    let matrix = generateEmptyMatrix(params);
    let isValid = true;
    const MAX_ATTEMPTS = 10;
    pull.forEach((shipSize, index) => {
        for(let i=0; i<MAX_ATTEMPTS; i++) { // пытаемся разместить конкретный корбаль с разных позиций и векторов
            const payload= {
                shipSize,
                inputIndex: getRandomInt(params.width),
                vector: getRandomInt(10) > 5 ? vectors.VERTICAL : vectors.HORIZONTAL,
            };
            const newMatrix = diveShip({
                matrix,
                ...payload,
            });

            if (newMatrix !== -1) {
                matrix = newMatrix;
                return;
            }
            if (i === MAX_ATTEMPTS - 1) {
                isValid = false;
            }
        }

    });

    if (!isValid) return -1;
    return matrix;
}