//#############################################################################################   TASK1   ##############################################################################

const fill = (arraySize, value) => {
  let arr = new Array(arraySize).fill(value);
  return arr;
};

//#############################################################################################   TASK2   ##############################################################################

const reverseArray = (array) => {
  const reversedArr = new Array();
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArr.push(array[i]);
  }
  return reversedArr;
};

//#############################################################################################   TASK3   ##############################################################################
let arr = [1, 3, 5, 7, 9, 11, 12];
let arr2 = [1, 2, 3, 4, 5, 10, 12];

const sortArr = (firstArray, secondArray) => {
  const mergedArrays = [].concat(firstArray, secondArray).sort((a, b) => a - b);
  const uniqArray = mergedArrays.reduce((uniq, item) => {
    return uniq.includes(item) ? uniq : [...uniq, item]
  }, []);
  return uniqArray;
};

console.log(sortArr(arr, arr2));