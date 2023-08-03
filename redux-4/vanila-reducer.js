const array = [1, 2, 3, 4, 5];

// each time the currentValue is 1,2,3,4,5. But the previousResult is empty when the currentValue is 1. So, here the initial result of the previousResult is the second parameter of the reduce method i.e 0.
const accumulatedResult = array.reduce((previousResult, currentValue) => {
  return previousResult + currentValue;
}, 0);

console.log(accumulatedResult);
