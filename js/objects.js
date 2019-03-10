function Elem(element) {
  this.element = element;
  this.show = () => this.element.classList.add("reveal");
  this.hide = () => this.element.classList.remove("reveal");
}

function Header(element) {
  Elem.call(this, element);
  this.show = function() {
    this.element.classList.remove("translateY");
    this.element.classList.add("reveal");
  };
  this.hide = function() {
    this.element.classList.remove("reveal");
    this.translateY();
  };
  this.translateY = function() {
    setTimeout(function() {
      Header.call(this, element);
      this.element.classList.add("translateY");
    }, 1200);
  };
}

function ElemCollection(elements) {
  this.elements = elements;
  this.show = function() {
    let i = 800;
    this.elements.forEach(function(element) {
      setTimeout(function() {
        element.classList.add("reveal");
      }, i);
      i += 450;
    });
  };
  this.showQuick = function() {
    this.elements.forEach(function(element) {
        element.classList.add("reveal");
    });
  };
  this.hide = function() {
    let i = 500;
    Array.from(this.elements)
      .reverse()
      .forEach(function(element) {
        setTimeout(function() {
          element.classList.remove("reveal");
        }, i);
        i += 450;
      });
  };
}
