// function simpleArraySum(n, ar) {
//     n = String(n);
//     var ar = n.split(',');
//     var arr = [];
//     var sum = 0;

//     for(var i=0; i<ar.length; i++){
//         arr.push(parseInt(ar[i]));
//     }

//      for(var j=0; j<arr.length; j++){
//         sum+=arr[j];
//     }
//     return sum;

// }
// var n = 6;
// var arr = [1, 2, 3, 4, 10, 11];


function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);

  console.log('The original string is: "' + stringToSplit + '"');
  console.log('The separator is: "' + separator + '"');
  console.log('The array has ' + arrayOfStrings.length + ' elements: ' + arrayOfStrings.join(' / '));
}

var tempestString = 'Oh brave new world that has such people in it.';
var monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec';

var space = ' ';
var comma = ',';

splitString(tempestString, space);
splitString(tempestString);
splitString(monthString, comma);