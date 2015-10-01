(function () {


//--------------------Answer One------------------------

//Map prices from item list into a new array
var prices = items.map(function(item) {
  return item.price;
});
console.log(prices)

//Reduce array into one number by addition
var sum = prices.reduce (function(prev, next) {
  return prev + next;
})
console.log(sum);

//Find average by dividing sum by number of items in list
var average = sum / items.length;
console.log(average);

//Convert to 2 decimal places
var converted = average.toFixed(2);
console.log(converted);

//Make into a string
var str = 'The average price is $' + converted;
console.log(str);

//Make it show up on page
var answer1 = document.querySelector('#answer1');
var textNode = document.createTextNode(str);
answer1.appendChild(textNode);







}());