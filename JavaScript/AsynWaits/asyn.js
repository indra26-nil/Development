//Asyn wait
function display(n) {
  m = Math.floor(Math.random() * 10) * 1000;
  setTimeout(() => {
    console.log(n);
  }, m);
  console.log(`Time taken --${m / 1000}`);
}

display(19);

// Callbacks

function dis(fun) {
  m = Math.floor(Math.random() * 10) * 1000;
  setTimeout(fun, m);
  console.log(`Time taken --${m / 1000}`);
}

dis(() => {
  console.log(124);
});
