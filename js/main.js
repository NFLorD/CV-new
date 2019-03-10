const header = new Header(document.querySelector("header"));
const lis = new ElemCollection(document.querySelectorAll("#pres>ul>li"));
const cache = document.querySelector("#cache");
const portfolio = new Elem(document.querySelector("#portfolio"));
const dropdowns = document.querySelectorAll("#pres>ul>li div:last-child");
const firstLi = document.querySelector(
  "#pres>ul>li:first-child div:first-child"
);
const lastLi = document.querySelector(
  "#pres>ul>li:last-child"
);
const small = new Elem(document.querySelector("header small"));

//
//
function showPortfolio() {
  window.scrollTo(0, 0);
  dropdowns.forEach(div => div.style.display = "none");
  lis.hide();
  header.hide();
  small.hide();
  requestAnimationFrame(function(){
    cache.style.top = "0";
    cache.style.opacity = "1";
  });
  setTimeout(portfolio.show, 3300);
  clock();

  header.element.addEventListener("click", removePortfolio);
}

//
//
function removePortfolio() {
  requestAnimationFrame(() => portfolio.hide());
  requestAnimationFrame(() => cache.style.top = "-200vw");
  
  requestAnimationFrame(() => cache.style.opacity = "0");
  small.show();
  header.show();
  lis.showQuick();

  header.element.removeEventListener("click", removePortfolio);
}

//
// PROGRAM STARTING SETUPS
//
header.show();
lis.show();
lastLi.addEventListener("transitionend", () => firstLi.click(), {once: true});

document.querySelector("#makeItRain").addEventListener("click", showPortfolio);

// PRINT BUTTON
document.querySelector("#print").addEventListener("click", () => window.print());
//

//
// MATERIALIZE
//

// DROPDOWNS
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".collapsible");
  M.Collapsible.init(elems, { accordion: false });
});

// TOOLTIPS TECHNOS
document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".tooltipped");
  M.Tooltip.init(elems);
});
