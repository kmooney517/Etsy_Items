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



//----------------------Answer Two----------------------


// Create an empty array to push to (forEach has to push to something)
var titleWithPrice = []

//forEach item, if in price range, push title to new array
var splitByPrice = items.forEach(function(x){
  if (x.price > 14 && x.price < 18) {
    titleWithPrice.push(x.title);
  };
});
console.log(titleWithPrice);

//Split elements of array into separate strings
var firstItem = titleWithPrice[0];
var secondItem = titleWithPrice[1];
var thirdItem = titleWithPrice[2];

console.log(firstItem);
console.log(secondItem);
console.log(thirdItem);

//Make it show up on page
var answer2a = document.querySelector('#answer2a');
var textNode = document.createTextNode(firstItem);
answer2a.appendChild(textNode);

var answer2b = document.querySelector('#answer2b');
var textNode = document.createTextNode(secondItem);
answer2b.appendChild(textNode);

var answer2c = document.querySelector('#answer2c');
var textNode = document.createTextNode(thirdItem);
answer2c.appendChild(textNode);


//--------------------------Answer Three ----------------------

//Create an empty array to push to (forEach has to push to something)
var currencyCode = [];

//forEach item, if currency code = GBP, push to currencyCode;
var splitByCurrencyCode = items.forEach(function(x){
  if (x.currency_code === 'GBP'){
    currencyCode.push(x.title + ' costs ' + '£' + x.price);
  }
})
console.log(currencyCode);

//Make the array go to a string
var gbpPhrase = currencyCode[0];
console.log(gbpPhrase);

//Make it show up on the page
var answer3 = document.querySelector('#answer3');
var textNode = document.createTextNode(gbpPhrase);
answer3.appendChild(textNode);

































}());