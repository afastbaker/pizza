//Business Logic

function Pizza(topping, size) {
  this.topping = topping;
  this.size = size;
}
Pizza.prototype.pizzaCost = function() {
  var cost = 0;
