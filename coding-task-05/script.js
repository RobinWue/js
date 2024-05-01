// 01) Spot the errors and fix them

const size = 25;
let result;

if (size > 20) {
  result = "Greater than 20";
} else if (size > 10) {
  result = "Greater than 10";
} else {
  result = "Lower than 10";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20

// Werte getauscht da sonst greater than 20 nie erreicht wird und somit greater than 10 ausgegeben wird.
/*    Zweite lösungsvorschlag ergibt auch Greater than 20.
    if (size < 10) {
  result = "Greater than 10";
} else if (size > 20) {
  result = "Greater than 20";
*/
// ---------------------------------------------------------

// 02) oddEven function

// TODO: Implement the oddEven function

function oddEven(number) {
  if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even

// 03) oldYoung function

// TODO: Implement the oldYoung function

function oldYoung(number) {
  if (typeof number !== "number" || number < 0) {
    //  typeof number !== 'number' || number < 0 überprüft pb der wert eine zahl ist und nicht negativ ist.
    return "invalid parameter"; // ungültgi oder gültig
  } else if (number < 16) {
    return "children"; // children wenn kleiner als 16
  } else if (number < 50) {
    return "young person"; // young person bei kleiner als 50
  } else {
    return "elder person"; //  Otherwise return "elder person"
  }
}
console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person
