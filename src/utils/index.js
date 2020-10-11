const {
    initialInputParams,
    errorMessages,
    settings,
} = require('../constants');


const generateEmptyMatrix = (params = initialInputParams) => {
    const { height, width } = params;
    if (
        height < settings.MIN_SIZE_MATRIX ||
        width < settings.MIN_SIZE_MATRIX
    ) {
        throw new Error(errorMessages.PARAMS_SHOULD_BE_MORE_THEN_5);
    }

    return Array.from(Array(height), () => {
        return Array.from(Array(width), () => {
            return settings.MATRIX_CELL_EMPTY;
        });
    })
};

module.exports = {
    generateEmptyMatrix,
};