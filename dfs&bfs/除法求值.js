/**
给出方程式 A / B = k, 其中 A 和 B 均为代表字符串的变量， k 是一个浮点型数字。根据已知方程式求解问题，并返回计算结果。如果结果不存在，则返回 -1.0。

示例 :
给定 a / b = 2.0, b / c = 3.0
问题: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? 
返回 [6.0, 0.5, -1.0, 1.0, -1.0 ]

输入为: vector<pair<string, string>> equations, vector<double>& values, vector<pair<string, string>> queries(方程式，方程式结果，问题方程式)， 其中 equations.size() == values.size()，即方程式的长度与方程式结果长度相等（程式与结果一一对应），并且结果值均为正数。以上为方程式的描述。 返回vector<double>类型。

基于上述例子，输入如下：

equations(方程式) = [ ["a", "b"], ["b", "c"] ],
values(方程式结果) = [2.0, 3.0],
queries(问题方程式) = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ]. 
输入总是有效的。你可以假设除法运算中不会出现除数为0的情况，且不存在任何矛盾的结果。
 */

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
  const graph = {};
  equations.forEach(([a, b], idx) => {
    const value = values[idx];
    if (graph[a]) {
      graph[a].push([b, value]);
    } else {
      graph[a] = [[b, value]];
    }
    if (graph[b]) {
      graph[b].push([a, 1 / value]);
    } else {
      graph[b] = [[a, 1 / value]];
    }
  });
  const ans = [];
  const visited = {};
  let found = false;

  queries.forEach(([a, b]) => {
    if (!graph[a] || !graph[b]) {
      ans.push(-1);
    } else if (a === b) {
      ans.push(1);
    } else {
      found = false;
      dfs(a, b, 1);
      if (!found) {
        ans.push(-1);
      }
    }
  });

  return ans;

  function dfs(a, b, value) {
    if (visited[a]) {
      return;
    }
    if (a === b) {
      found = true;
      return ans.push(value);
    }
    visited[a] = true;
    const arr = graph[a];
    for (let i = 0; i < arr.length; ++i) {
      dfs(arr[i][0], b, value * arr[i][1]);
    }
    visited[a] = false;
  }
};
