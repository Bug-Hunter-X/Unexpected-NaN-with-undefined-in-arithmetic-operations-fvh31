function foo(a, b) {
  // Handle undefined values explicitly
  a = (typeof a === 'undefined') ? 0 : a; //or any other default value
  b = (typeof b === 'undefined') ? 0 : b;
  return a + b;
}

console.log(foo(undefined, 5)); //5
console.log(foo(null, 5)); //5
console.log(foo(1, null)); //1
console.log(foo(1, undefined)); //1