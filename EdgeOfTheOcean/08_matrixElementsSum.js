// Given matrix, a rectangular matrix of integers, where each value represents the cost of the room,
// your task is to return the total sum of all rooms that are suitable for the CodeBots
//(ie: add up all the values that don't appear below a 0).
//
//matrix = [[0, 1, 1, 2],
//          [0, 5, 0, 0],
//          [2, 0, 3, 3]]
//

// ** Original Submission - it works

function matrixElementsSum1(matrix) {
  let ghostMap = {};
  let totalCost = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        ghostMap[j] = true;
      }
      if (!ghostMap[j]) {
        totalCost += matrix[i][j];
      }
    }
  }
  return totalCost;
}

// Should try going column by column instead!

function matrixElementsSum2(matrix) {
  let totalCost = 0;
  // i represents the rows
  for (let i = 0; i < matrix[0].length; i++) {
    // j represents the columns
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === 0) break;
      totalCost += matrix[j][i];
    }
  }
  return totalCost;
}
