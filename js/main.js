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

//Display on Screen
var answer2 = document.querySelector('#answer2');
  titleWithPrice.forEach(function(x){
    var textNode2 = document.createTextNode(x);
    var linebreak = document.createElement('br');
    answer2.appendChild(textNode2);
    answer2.appendChild(linebreak);
  })

//--------------------------Answer Three ----------------------

//Create an empty array to push to (forEach has to push to something)
var currencyCode = [];

//forEach item, if currency code = GBP, push to currencyCode;
var splitByCurrencyCode = items.forEach(function(x){
  if (x.currency_code === 'GBP'){
    currencyCode.push(x.title + ' costs ' + '\u00A3' + x.price);
  }
})
console.log(currencyCode);


//Make it show up on the page
var answer3 = document.querySelector('#answer3');
  currencyCode.forEach(function(x){
    var textNode3 = document.createTextNode(x);
    var linebreak = document.createElement('br');
    answer3.appendChild(textNode3);
    answer3.appendChild(linebreak);
  })

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
    var textNode4 = document.createTextNode(x);
    var linebreak = document.createElement('br');
    answer4.appendChild(textNode4);
    answer4.appendChild(linebreak);
  })


//----------------------------Question Five---------------------


//Empty array for use after filter
var eightOrMore = [];

//Make array of arrays of materials. Push the title, the number (more than 8), and the materials that make up the eight.
var splitByAmt = items.filter(function(x){
  var correctAmt = x.materials;
  if (correctAmt.length >= 8) {
    eightOrMore.push(x);
  };
});
console.log(eightOrMore);

//Now take each thing that has more than 8 materials and create a text node.
eightOrMore.forEach(function(x){
  var answer5 = document.querySelector('#answer5');
  var textNode5 = document.createTextNode(x.title + ' has ' + x.materials.length +' materials:');
  var linebreak = document.createElement('br');
  answer5.appendChild(textNode5);
  answer5.appendChild(linebreak);

  x.materials.forEach(function(y){
    var answer5 = document.querySelector('#answer5');
    var textNode5 = document.createTextNode(y);
    var linebreak = document.createElement('br');
    answer5.appendChild(textNode5);
    answer5.appendChild(linebreak);
  })
})


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