// 01) oddNumbers function

// TODO: Implement the oddNumbers function
function oddNumbers(num1, num2) {
  if (num1 < 0 || num2 < 0) {
    return "postive";
  }

  let result = "";
  for (let i = num1; i <= num2; i++) {
    if (i % 2 !== 0) {
      if (result !== "") {
        result += ",";
      }
      result += i;
    }
  }
  return result;
}

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11

// ----------------------------------------------------------

// 02) charCount function

function charCount(word, char) {
  if (char.length !== 1) {
    return "";
  }

  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === char) {
      count++;
    }
  }

  return count;
}

console.log(charCount("hello", "l")); // result should be: 2
console.log(charCount("mama", "m")); // result should be: 2
console.log(charCount("Resümee", "e")); // result should be: 3
