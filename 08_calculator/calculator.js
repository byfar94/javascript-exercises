const add = function(a, b) {
    let ans = (a + b);
    return ans;
};

const subtract = function(a, b) {
	let ans = (a - b);
    return ans;
};

const sum = function(num) {
  let summed = 0;
  for (let i = 0; i < num.length; i++){
    summed += num[i]; 
  }
  return summed;
	
};

console.log(sum([1,3,5,7,9]))

const multiply = function(num) {
  let multi = 1;
  for (let i = 0; i < num.length; i++){
    multi = multi * num[i];
  }
return multi;
};

const power = function(a, b) {
  let ans = a ** b;
  return ans;
	
};


const factorial = function(num) {
  let ans = 1;
  for (i = 1; i <= num; i++){
   ans = ans * i;
  }
  return ans;
};

console.log(factorial(5));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
