const app = require('../src/index');

const matrix = app();

// console.table(matrix);

const newMatrix = matrix.map((item) => {
    return item.map((cell) => {
        if (cell === 2 || cell === 0) return '';
        return cell;
    });
});
console.table(newMatrix);