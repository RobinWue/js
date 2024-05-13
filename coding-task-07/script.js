// 01) removeItem function

// TODO: Implement the removeItem function
function removeItem(array, index) {
  if (index < 1 || index > array.length) {
    return [...array];
  }
  const newArray = [...array];
  newArray.splice(index - 1, 1);
  return newArray;
}

const ainmals = ["Dog", "Cat", "Lion"];
console.log(removeItem(ainmals, 1));
// result should be: ["Cat", "Lion"]

console.log(ainmals);
// result should be still: ["Dog", "Cat", "Lion"]

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

// 03) sumOfCharacters function

function sumOfCharacters(array) {
  let totalCharacters = 0;
  array.forEach((item) => {
    if (typeof item === "string") {
      totalCharacters += item.length;
    }
  });
  return totalCharacters;
}
// TODO: Implement the sumOfCharacters function

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
// result should be: 17

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
// result should be: 55

// objects test

const userData = {
  firstname: "Robin",
  surname: "Wübbenhorst",
  adress: {
    street: "Test",
    postalcode: "123456",
    country: "Germany",
  },
};

console.log(userData);
