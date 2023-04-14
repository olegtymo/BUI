//#############################################################################################   TASK1   ##############################################################################

// const fill = (arraySize, value) => {
//   let arr = new Array(arraySize).fill(value);
//   return arr;
// };

//#############################################################################################   TASK2   ##############################################################################

// const reverseArray = (array) => {
//   const reversedArr = new Array();
//   for (let i = array.length - 1; i >= 0; i--) {
//     reversedArr.push(array[i]);
//   }
//   return reversedArr;
// };

//#############################################################################################   TASK3   ##############################################################################
let arr = [1, 3, 5, 7, 9, 11, 12];
let arr2 = [1, 2, 3, 4, 5, 10, 12];

const sortArr = (firstArray, secondArray) => {
  let mergedArrays = [].concat(firstArray, secondArray);
  // const filteredArr = mergedArrays.filter((el, i, arr) => {});
  return mergedArrays;
};

console.log(sortArr(arr, arr2));
