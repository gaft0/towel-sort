module.exports = function towelSort(matrix) {
  const array = [];
  if (!Array.isArray(matrix)) {
    return [];
  }

  for (let i = 0; i < matrix.length; i += 1) {
    const currentRow = matrix[i];
    if (i % 2 === 0) {
      for (let j = 0; j < currentRow.length; j += 1) {
        array.push(currentRow[j]);
      }
    } else {
      for (let j = currentRow.length - 1; j >= 0; j -= 1) {
        array.push(currentRow[j]);
      }
    }
  }
  return array;
};
