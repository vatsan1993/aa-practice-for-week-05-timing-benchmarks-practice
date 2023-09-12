const [addNums, addManyNums] = require('./phase-1');

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  // Fill this in
  let values = [];
  for (let i = increment; i <= 10 * increment; i += increment) {
    values.push(addNums(i));
  }
  return values;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  // Fill this in
  let arr = [];
  for (let i = increment; i <= 10 * increment; i += increment) {
    arr.push(addManyNums(i));
  }
  return arr;
}

module.exports = [addNums10, addManyNums10];
