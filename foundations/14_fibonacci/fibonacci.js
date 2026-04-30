const fibonacci = function(n) {
  let arr = [0, 1];

  if (n < 0) {
    return "OOPS"
  }
  else {
    for (i = 0; i < n - 1; i++) {
      arr = [...arr, arr[arr.length - 1] + arr[arr.length - 2]]
    };

  return arr[n]
  }
};

console.log("fibonacci(0))", fibonacci(0));
console.log("fibonacci(1))", fibonacci(1));
console.log("fibonacci(2))", fibonacci(2));
console.log("fibonacci(3))", fibonacci(3));
console.log("fibonacci(4))", fibonacci(4));
console.log("fibonacci(5))", fibonacci(5));
console.log("fibonacci(19)", fibonacci(19));

const fibonacci2 = function(n) {
  let a = 0
  let b = 1
  let c = a + b

  if (n === 0) {
    return 0
  } else {
  for (i = 0; i < n - 2; i++) {
    a = b
    b = c
    c = a + b
  }
  return c
  }
};

console.log("fibonacci2(0))", fibonacci2(0));
console.log("fibonacci2(1))", fibonacci2(1));
console.log("fibonacci2(2))", fibonacci2(2));
console.log("fibonacci2(3))", fibonacci2(3));
console.log("fibonacci2(4))", fibonacci2(4));
console.log("fibonacci2(5))", fibonacci2(5));
console.log("fibonacci2(19)", fibonacci2(19));

function count(n) {
  let start = 1

  for (i = 0; i < n - 1; i++) {
    start = start + 1
  }

  return start
}

// let arr = [0, 1, 1];
// arr = [...arr, arr[arr.length - 1] + arr[arr.length - 2]];
// console.log(arr);
// arr = [...arr, arr[arr.length - 1] + arr[arr.length - 2]];
// console.log(arr);

// Do not edit below this line
module.exports = fibonacci;
