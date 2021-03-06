/**
 * 判断一个 9x9 的数独是否有效。只需要根据以下规则，验证已经填入的数字是否有效即可。
 * 数字 1-9 在每一行只能出现一次。
 * 数字 1-9 在每一列只能出现一次。
 * 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。
 * 
 * 说明:
 * 一个有效的数独（部分已被填充）不一定是可解的
 * 只需要根据以上规则，验证已经填入的数字是否有效即可。
 * 给定数独序列只包含数字 1-9 和字符 '.' 。
 * 给定数独永远是 9x9 形式的。
 */

/**
 * 思路:建立hash表
 * 时间复杂度o(1)
 * 空间复杂度o(1)
 */

const rows = [];
const cols = [];
const child = [];

for (let i = 0; i < 9; i++) {
  rows[i] = new Map();
  cols[i] = new Map();
  child[i] = new Map();
}

/**
* @param {character[][]} board
* @return {boolean}
*/
function isValidSudoku(board) {
  for (let r = 0; r < 9; ++r) {
    for (let c = 0; c < 9; ++c) {
      if (board[r][c] === '.') {
        continue;
      }
      const childIdx = Math.floor(r / 3) * 3 + Math.floor(c / 3);
      if(rows[r].has(board[r][c]) || cols[c].has(board[r][c]) || child[childIdx].has(board[r][c])) {
        return false;
      }
      rows[r].set(board[r][c], 1);
      cols[c].set(board[r][c], 1);
      child[childIdx].set(board[r][c], 1);
    }
  }
  return true;
}

const valid = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

const inValid = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"]
];

console.log(isValidSudoku(valid) === true);
console.log(isValidSudoku(inValid) === false);
