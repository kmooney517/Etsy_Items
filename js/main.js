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


//---------------------------Answer Four ----------------------


//Empty array for use of push after forEach
var containsWood =[]


//Make array of arrays of materials. Push those that contain wood
var splitByMaterial = items.filter(function(x){
  var allWithWood = x.materials;
  if (allWithWood.indexOf('wood') !== -1) {
    containsWood.push(x.title);
  }
})
console.log(containsWood);

//Make elements of array show up on page

var answer4 = document.querySelector('#answer4');
  containsWood.forEach(function(x){
    var textNode = document.createTextNode(x);
    answer4.appendChild(textNode);
  })





//----------------------------Question Five---------------------


//Empty array for use after filter
var eightOrMore = [];

//Make array of arrays of materials. Push the title, the number (more than 8), and the materials that make up the eight.
var splitByAmt = items.filter(function(x){
  var correctAmt = x.materials;
  if (correctAmt.length >= 8) {
    eightOrMore.push(x.title, correctAmt.length, x.materials);
  }
})

console.log(eightOrMore);

//Split the array of materials into strings

//Make show up on page



//----------------------------Question Six---------------------------

//Empty array to be pushed to
var madeBySeller = [];

//Filter items by 'who_made' = 'i_did' and push to empty array
var splitByMaker = items.filter(function(x){
  var maker = x.who_made; 
  if (maker.indexOf('i_did') !== -1) {
    madeBySeller.push(x.title);
  }
})

//Shows title of all made by seller
console.log(madeBySeller);

//Find number of made by seller
console.log(madeBySeller.length);

//Create String
var howManyMade = madeBySeller.length + ' were made by their sellers';
// console.log(howManyMade);

//Make it show up on page
var answer6 = document.querySelector('#answer6');
var textNode = document.createTextNode(howManyMade);
answer6.appendChild(textNode);































}());