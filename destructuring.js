let a, b, rest;
[a, b] = [100, 20];

console.log(a);

console.log(b);

[a, b, ...rest] = [1011, 20, 3011, 40, 50];
var c = {...rest}
console.log(rest);

console.log(c)

