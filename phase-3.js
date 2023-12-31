const [addNums, addManyNums] = require('./phase-1');

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code
  let start = Date.now();
  let values = [];
  for (let i = increment; i <= 10 * increment; i += increment) {
    console.time('addNums10Timing');
    values.push(addNums(i));
    console.timeLog('addNums10Timing');
    console.timeEnd('addNums10Timing');
  }
  let end = Date.now();
  console.log(end - start);
  return values;
  // Your code here
}

function addManyNums10Timing(increment) {
  // Copy your `addManyNums10` code here
  // Then, add timing code

  // Your code here
  let start = Date.now();
  let arr = [];
  for (let i = increment; i <= 10 * increment; i += increment) {
    console.time('addManyNums10Timing');
    arr.push(addManyNums(i));
    console.timeLog('addManyNums10Timing');
    console.timeEnd('addManyNums10Timing');
  }
  let end = Date.now();
  console.log(end - start);
  return arr;
}

n = 1000000;
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log('\n***********\n');

n = 1000;
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
