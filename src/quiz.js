//  .___________. __    __   __       _______.    __       _______.        ___           ______      __    __   __   ________
//  |           ||  |  |  | |  |     /       |   |  |     /       |       /   \         /  __  \    |  |  |  | |  | |       /
//  `---|  |----`|  |__|  | |  |    |   (----`   |  |    |   (----`      /  ^  \       |  |  |  |   |  |  |  | |  | `---/  /
//      |  |     |   __   | |  |     \   \       |  |     \   \         /  /_\  \      |  |  |  |   |  |  |  | |  |    /  /
//      |  |     |  |  |  | |  | .----)   |      |  | .----)   |       /  _____  \     |  `--'  '--.|  `--'  | |  |   /  /----.__
//      |__|     |__|  |__| |__| |_______/       |__| |_______/       /__/     \__\     \_____\_____\\______/  |__|  /________(__)

var QUIZ_TOPICS = ['javascript', 'jasmine', 'testing'];

// Find the largest number and second largest number
// Then subtract the difference.
// bigDiff(array)
//  [3, 6, 9, 12] => 3
//  [9, 20, 11, 12] => 8

var bigDiff = function(array) {
  var firstNum,
      secondNum,
      i,
      j,
      length = array.length;

  Array.max = function(array){
    return Math.max.apply(Math, array);
  };

  firstNum = Array.max(array);

  array.splice(array.indexOf(firstNum), 1);

  secondNum = Array.max(array);

  return Math.abs(firstNum - secondNum);

};

// return the average of the 2 or 3 numbers in the middle of the array
// (2 if the array has an even number of elements)
// (3 if the array has an odd number of elements).
// averageMedian(array)
//  [2, 6, 9, 11] => 7.5
//  [9, 8, 2, 4, 7] => 4.67

var averageMedian = function(array) {
  var length = array.length,
      index = (length / 2),
      median;

  if ((length % 2) === 0) {
    median = ((array[index] + array [index - 1]) / 2);
    return median;
  } else {
    index = parseInt(index);
    median = ((array[index - 1] + array[index] + array[index + 1]) / 3);
    return Math.round(median * 100) / 100;
  }
};

// return true if you can split the array into parts
// where the sum of one portion equals the sum of the other portion.
// canBalance(array)
//  [1, 2, 1, 1, 1] => true
//  [2, 1, 1, 2, 1] => false
//  [3, 4, 1, 2, 3, 1] => true

var canBalance = function(array) {
  var giantArray = [],
      i,
      length = array.length;
  for (i = 0; i < length; i++) {
      var subArray = array.splice(0, i);
      giantArray.push(subArray);
  }
  console.log(giantArray);
};

// Returns the number of times 2 or more of the same number appear sequentially.
// countClumps(array)
//  [2, 1, 1, 1, 1, 3, 3, 3, 1] => 2
//  [9, 3, 3, 4, 4, 4, 6, 7, 7, 7] => 3

var countClumps = function(array) {
  var counter = 0,
      i,
      length = array.length;

  for (i = 0; i < length; i++) {
    if (array[i] === array[i + 1]) {
      counter += 1;
    }
  }
  return counter;
};