// 01) Greet function

function welcomeMsg(name) {
  return `Welcome ${name}!`;
}

console.log(welcomeMsg("Jane"));
console.log(welcomeMsg("Marc"));

// -----------------------------

// 02) Gross Price Function

function calcGrossPrice(netPrice, taxRate) {
  return netPrice * (1 + taxRate);
}

console.log(calcGrossPrice(20, 0.19));
// result should be 23.8    = 23.799999

console.log(calcGrossPrice(40, 0.16));
// result should be 46.4   ✔

// ----------------------------------

// 03) Add Postive Function
// https://devdocs.io/javascript/global_objects/math/abs | math.abs liefett den absoluten Wert einer Zahl
function addPositive(number1, number2) {
  return Math.abs(number1) + Math.abs(number2);
}

console.log(addPositive(2, 3)); // Ergebnis sollte 5 sein
console.log(addPositive(3, -5)); // Ergebnis sollte 8 sein
console.log(addPositive(-1, -8)); // Ergebnis sollte 9 sein
