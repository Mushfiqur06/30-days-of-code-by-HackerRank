var mealCost = 12;
var tipPercent = 20;
var taxPercent = 8;

var tip = mealCost * ( tipPercent / 100);
var tax = mealCost * (taxPercent / 100);

var totalCost = mealCost + tip + tax;

console.log(parseInt(totalCost));