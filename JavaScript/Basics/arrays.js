let arr = [1, 2, 3, 5, 6, 7, 8, 9];
arr.forEach((element) => {
  console.log(element + 100);
});

// Map use case in array to create new array for same elements size

let brr = arr.map(function (val) {
  val *= 5;
  return val;
});

console.log(brr);

// Filter use case

let n = arr.filter(function (val) {
  if (val < 8 && val > 3) {
    return true;
  }
});

console.log(n);
