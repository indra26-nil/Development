let hr = 11;
let min = 36;
let sec = 20;
let m = "PM";
setInterval(() => {
  sec++;
  if (sec == 60) {
    min++;
    sec = 0;
  }
  if (min == 60) {
    hr++;
    min = 0;
  }
  if (hr > 12) {
    hr = 1;
  }
  if (hr == 11 && min == 59 && sec == 59 && m == "AM") {
    m = "PM";
  }
  if (hr == 11 && min == 59 && sec == 59 && m == "PM") {
    m = "AM";
  }
  console.log(`Time : ${hr}.${min}.${sec} ${m}`);
}, 1000);
