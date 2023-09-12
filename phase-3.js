const [addNums, addManyNums] = require('./phase-1');

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code
  let start = Date.now();
  let values = [];
  for (let i = increment; i <= 10 * increment; i += increment) {
    values.push(addNums(i));
  }
  let end = Date.now();
  console.log(`addNums10Timing ; ${end - start}`);
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
    arr.push(addManyNums(i));
  }
  let end = Date.now();
  console.log(`addNums10Timing ; ${end - start}`);
  return arr;
}

n = 1000000;
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log('\n***********\n');

n = 1000;
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
