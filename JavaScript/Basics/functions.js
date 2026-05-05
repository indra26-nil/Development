//Normal function declaration

function abc(n, m) {
  return m + n;
}

console.log(abc(13, 2));

// Variable function declaration

let bcd = function (a, b) {
  return a - b;
};

console.log(bcd(12, 3));

//Arrow or fat arrow funtion

let mul = (a, b) => {
  return a * b;
};
console.log(mul(12, 45));

function display(num = 12, num2 = 12) {
  console.log(num + num2);
}
display(23);

//Spread operator

function op(a, b, ...c) {
  a[0] = 12;
  console.log(a, b, c);
}
op(1, 2, 3, 4, 5);
