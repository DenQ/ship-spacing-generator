const initialInputParams = {
    height: 10,
    width: 10,
};

const settings = {
    MIN_SIZE_MATRIX: 5,
    MATRIX_CELL_EMPTY: 0,
    MATRIX_CELL_SHIP: 1,
    MATRIX_CELL_RED: 2,
};

const errorMessages = {
    PARAMS_SHOULD_BE_MORE_THEN_5: 'Height and width params should be > 5',
};

const vectors = {
    VERTICAL: 'vertical',
    HORIZONTAL: 'horizontal',
};

module.exports = {
    initialInputParams,
    errorMessages,
    settings,
    vectors,
};