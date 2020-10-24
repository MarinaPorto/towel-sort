
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let result = [];

  if (matrix === undefined) {
    return [];
  };

  for (var i = 0; i < matrix.length; i++) {
    if (i % 2 == 0) {
      for (var j = 0; j < matrix[i].length; j++) {
        result.push(matrix[i][j]);

      };

    } else {
      for (var k = matrix[i].length - 1; k >= 0; k--) {
        result.push(matrix[i][k]);
      };


    };

  };
  return result;
}
