/**
 * 给定一个 n × n 的二维矩阵表示一个图像。
 * 将图像顺时针旋转 90 度。
 * 
 * 说明：
 * 你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。
 * 
 * 示例 1:
 * 给定 matrix = 
 *  [
 * [1,2,3],
 * [4,5,6],
 * [7,8,9]
 * ]
 * 
 * 原地旋转输入矩阵，使其变为:
 * [
 * [7,4,1],
 * [8,5,2],
 * [9,6,3]
 * ]
 */

 /**
  * 空间复杂度O(1)
  * 时间复杂度O()
  * /

/**
* @param {number[][]} matrix
* @return {void} Do not return anything, modify matrix in-place instead.
*/
function rotate(matrix) {
  const n = matrix.length;
  let level = 0;

  while (level < n / 2) {
    for (let i = level; i < n - level - 1; ++i) {
      const temp = matrix[n - 1 - i][level];
      matrix[n - 1 - i][level] = matrix[n - 1 - level][n - 1 - i];
      matrix[n - 1 - level][n - 1 - i] = matrix[i][n - 1 - level];
      matrix[i][n - 1 - level] = matrix[level][i];
      matrix[level][i] = temp;
    }
    ++level;
  }
}

rotate(
  [
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16]
  ]
);

// [
//   [15, 13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7, 10, 11]
// ]