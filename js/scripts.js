//Business Logic

function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
}
Pizza.prototype.pizzaCost = function() {
  var cost = 0;
  
  if (this.topping === "topping1"){
    cost += 1;
  } else if (this.topping === "topping2") {
    cost += 2;
  } else if (this.topping === "topping3") {
    cost += 3;
  }
  if (this.size === "small") {
    cost += 5;
  } else if (this.size === "medium") {
    cost += 10;
  } else if (this.size === "large") {
    cost += 15;
  }
  return cost;
}
