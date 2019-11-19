function makeCode () {
var realnumber1 =["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50];
var number1 = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twentyOne", "twentyTwo", "twentyThree", "twentyFour", "twentyFive", "twentySix", "twentySeven", "twentyEight", "twentyNine", "thirty", "thirtyOne", "thirtyTwo", "thirtyThree", "thrityFour", "thirtyFive", "thirtySix", "thirtySeven", "thirtyEight", "thirtyNine", "fourty", "fourtyOne", "fourtyTwo", "fourtyThree", "fourtyFour", "fourtyFive", "fourtySix", "fourtySeven", "fourtyEight", "fourtyNine", "fifty"];
var number2 = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twentyOne", "twentyTwo", "twentyThree", "twentyFour", "twentyFive", "twentySix", "twentySeven", "twentyEight", "twentyNine", "thirty", "thirtyOne", "thirtyTwo", "thirtyThree", "thrityFour", "thirtyFive", "thirtySix", "thirtySeven", "thirtyEight", "thirtyNine", "fourty", "fourtyOne", "fourtyTwo", "fourtyThree", "fourtyFour", "fourtyFive", "fourtySix", "fourtySeven", "fourtyEight", "fourtyNine", "fifty"];;
var realNumber2 = 0;
  var sign =;
var i;
var x;
// is this neccesary? I don't really know what I'm doing. Do I need 2 variables?
var code ="";
var answer = realNumber1 + realNumber2;
var text1 ="else if(number1 ==";
var text2 ="&& sign =";
var text3 ="&& number2 =";
var text4 =") {answer =";
var text5="}";
for (x = 0, x <) {
  realNumber2 + 1;
for (i = 0, i < number1.length, i++, realNumber1 ) {
code += text1 + number1[i] + text2 + sign + text3 + number2 + text4 + answer + text5 +"<br>";
}

}
console.log(code)
//else if(number1 ==  && number2 == && sign =) {}
}
              }
