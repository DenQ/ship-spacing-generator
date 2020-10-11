const _ = require('lodash');

// TODO: размерность матрицы может быть больше, а значит и можно расширить пропорционально. Или опционально из настроек
const generatePullShips = () => {
    const pull = [4, 3, 3, 2, 2, 2, 1, 1 ,1, 1];
    return _.shuffle(pull);
};

module.exports = {
    generatePullShips,
};