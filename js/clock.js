const date = new Date();
const sec = document.querySelector(".second-hand");
const min = document.querySelector(".min-hand");
const hour = document.querySelector(".hour-hand");
const numericClock = document.querySelector("#clock-numeric");

let secCount = date.getSeconds();
let minCount = date.getMinutes();
let hourCount = date.getHours();

let secOffset = secCount * 6 + 90;
let minOffset = minCount * 6 + 90;
let hourOffset = hourCount * 15 + 90;

sec.style.transform = "rotate(" + secOffset + "deg)";
min.style.transform = "rotate(" + minOffset + "deg)";
hour.style.transform = "rotate(" + hourOffset + "deg)";

let secCountString;
let minCountString;
let hourCountString;

function clock() {
  setTimeout(function() {
    secCount++;
    secOffset += 6;
    sec.style.transform = "rotate(" + secOffset + "deg)";
    if (secCount == 60) {
      secCount = 0;
      minCount++;
      minOffset += 6;
      min.style.transform = "rotate(" + minOffset + "deg)";
    }
    if (minCount == 60) {
      minCount = 0;
      hourCount++;
      hourOffset += 15;
      hour.style.transform = "rotate(" + hourOffset + "deg)";
    }
    if (hourCount == 24) {
      hourCount = 0;
    }

    hourCountString = hourCount;
    minCountString = minCount;
    secCountString = secCount;
    if (hourCount < 10) hourCountString = "0" + hourCount;
    if (minCount < 10) minCountString = "0" + minCount;
    if (secCount < 10) secCountString = "0" + secCount;
    numericClock.innerHTML =
      hourCountString + ":" + minCountString + ":" + secCountString;

    // numericClock.innerHTML =
    //   "<span>" +
    //   hourCountString.toString().slice(0, 1) +
    //   "</span><span>" +
    //   hourCountString.toString().slice(1, 2) +
    //   "</span>:<span>" +
    //   minCountString.toString().slice(0, 1) +
    //   "</span><span>" +
    //   minCountString.toString().slice(1, 2) +
    //   "</span>:<span>" +
    //   secCountString.toString().slice(0, 1) +
    //   "</span><span>" +
    //   secCountString.toString().slice(1, 2) +
    //   "</span>";

    clock();
  }, 1000);
}

clock();
