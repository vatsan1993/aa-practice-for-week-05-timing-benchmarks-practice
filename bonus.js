const [addNums, addManyNums] = require('./phase-1');

function addNums100Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code
  let start = Date.now();
  let values = [];
  for (let i = increment; i <= 100 * increment; i += increment) {
    console.time('addNums100Timing');
    values.push(addNums(i));
    console.timeLog('addNums100Timing');
    console.timeEnd('addNums100Timing');
  }
  let end = Date.now();
  console.log(end - start);
  return values;
  // Your code here
}

function addManyNums100Timing(increment) {
  // Copy your `addManyNums10` code here
  // Then, add timing code

  // Your code here
  let start = Date.now();
  let arr = [];
  for (let i = increment; i <= 100 * increment; i += increment) {
    console.time('addManyNums100Timing');
    arr.push(addManyNums(i));
    console.timeLog('addManyNums100Timing');
    console.timeEnd('addManyNums100Timing');
  }
  let end = Date.now();
  console.log(end - start);
  return arr;
}

n = 1000000;
console.log(`addNums(${n}): `);
addNums100Timing(1000000);

console.log('\n***********\n');

n = 1000;
console.log(`addManyNums(${n}): `);
addManyNums100Timing(5000);
