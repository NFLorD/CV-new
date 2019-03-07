// ACCORDEON
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".collapsible");
  var instances = M.Collapsible.init(elems, { accordion: false });
});

// TOOLTIPS TECHNOS
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".tooltipped");
  var instances = M.Tooltip.init(elems);
});

// PRINT BUTTON
document.querySelector("#print").addEventListener("click", function() {
  window.print();
});

// PORTFOLIO BUTTON
document.querySelector("#makeItRain").addEventListener("click", function() {
  window.scrollTo(0, 0);

  document
    .querySelectorAll("#pres>ul>li div:last-child")
    .forEach(function(div) {
      div.style.display = "none";
    });

  i = 500;
  Array.from(document.querySelectorAll("#pres>ul>li"))
    .reverse()
    .forEach(function(li) {
      setTimeout(function() {
        li.classList.remove("reveal");
      }, i);
      i += 450;
    });

  document.querySelector("#cache").classList.add("reveal");

  document.querySelector("header").classList.remove("reveal");
  document.querySelector("header").classList.add("translateY");

  setTimeout(togglePortfolio, 3300);
});

document.querySelector("#photo").addEventListener("click", toggleHeader);

function toggleHeader() {
  document.querySelector("header").classList.toggle("reveal");
  document.querySelector("header").classList.remove("translateY");
}

function togglePortfolio() {
  document.querySelector("#portfolio").classList.toggle("reveal");
}

function toggleLis() {
  document
    .querySelectorAll("#pres>ul>li")
    .forEach(li => li.classList.toggle("reveal"));
}

//
// PROGRAM STARTING SETUPS
//
toggleHeader();

let i = 800;
document.querySelectorAll("#pres>ul>li").forEach(function(li) {
  setTimeout(function() {
    li.classList.add("reveal");
  }, i);
  i += 450;
});

setTimeout(function() {
  document.querySelector("#pres>ul>li:first-child div:first-child").click();
}, 2500);
// }
