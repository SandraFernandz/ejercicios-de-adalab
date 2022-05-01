'use strict';
console.log('>> Ready :)');

//problem: rotate this array in 90 degrees

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// matrix[0].map((val, index) => matrix.map((row) => row[index]).reverse());

// const arr = [1, 2, 3, 4, 5];

// const k = 4;

// const rotateArray = (arr, k) => arr.slice(k).concat(arr.slice(0, k));

// rotateArray();

// const k = 4;

// const rotateArray1 = function (nums, k) {
//   for (let i = 0; i < k; i++) {
//     nums.unshift(nums.pop());
//   }
//   return nums;
// };

let matrix = [
  [1, 2],
  [3, 4],
];

var rotate = function (matrix) {
  matrix = matrix.reverse();
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < i; j++) {
      var temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
};
rotate(matrix);
console.log(matrix);
