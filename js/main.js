const header = new Header(document.querySelector("header"));
const lis = new ElemCollection(document.querySelectorAll("#pres>ul>li"));
const cache = new Elem(document.querySelector("#cache"));
const portfolio = new Elem(document.querySelector("#portfolio"));
const dropdowns = document.querySelectorAll("#pres>ul>li div:last-child");
const firstLi = document.querySelector(
  "#pres>ul>li:first-child div:first-child"
);

//
//
function showPortfolio() {
  window.scrollTo(0, 0);
  dropdowns.forEach(function(div) {
    div.style.display = "none";
  });
  lis.hide();
  header.hide();
  cache.show();
  setTimeout(portfolio.show, 3300);

  header.element.addEventListener("click", removePortfolio);
}

//
//
function removePortfolio() {
  portfolio.hide();
  cache.hide();
  header.show();
  lis.show();
  setTimeout(function() {
    firstLi.click();
  }, 2900);

  header.element.removeEventListener("click", removePortfolio);
}

//
// PROGRAM STARTING SETUPS
//
header.show();
lis.show();
setTimeout(function() {
  firstLi.click();
}, 2900);
document.querySelector("#makeItRain").addEventListener("click", showPortfolio);
document.querySelector("#print").addEventListener("click", function() {
  window.print();
});
//
//
//

//
// MATERIALIZE
//

// DROPDOWNS
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".collapsible");
  var instances = M.Collapsible.init(elems, { accordion: false });
});

// TOOLTIPS TECHNOS
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".tooltipped");
  var instances = M.Tooltip.init(elems);
});
