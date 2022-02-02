//multiple parameters requires paranthesis. Multiline statements require body braces and return

//Default parameters
function multiply(a, b = 2) {
  // b=2 is default parameters
  return a * b;
}

console.log(multiply(2, 1)); // output will be 2
console.log(multiply(2));
console.log(multiply()); // Not a Number NaN will be printed

// Rest parameters
function show(a, ...b) {
  console.log("a =", a);
  console.log("b =", b);
  var c = { ...b, a };
  console.log("c =",c);
  var d= [...b,a];
  console.log("d =",d)
}

show("1", "2", 3, 4);
