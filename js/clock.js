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
let hourOffset = hourCount * 30 + 90;

let secCountString;
let minCountString;
let hourCountString;

sec.style.transform = "rotate(" + secOffset + "deg)";
min.style.transform = "rotate(" + minOffset + "deg)";
hour.style.transform = "rotate(" + hourOffset + "deg)";

function clock() {
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

  setTimeout(function(){
    clock();
  }, 1000);
}