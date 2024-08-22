module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) result.push(...matrix[i]);
        if (i % 2 === 1) result.push(...matrix[i].reverse());
    }

    return result;
};
