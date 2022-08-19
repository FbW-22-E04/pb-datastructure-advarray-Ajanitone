// # Map, Filter, Reduce

// #### 1. Get total orders
// * Return the total amount of orders.

const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
];

const totalOrders = orders.reduce((total, item) => (total += item.amount), 0);

console.log("Q1:The total is:", totalOrders);

console.log("--------------------------------------------------------");

// #### 2. Increment by 1
// ```javascript
// const arrayOfNumbers = [3, 45, 6, 56, 7, 9];
// ```
// * Create a function that increments each element in th e `arrayOfNumbers` by 1. Return the a new array of modified elements.

const arrayOfNumbers = [3, 45, 6, 56, 7, 9];

const incrementNum = arrayOfNumbers.map((item) => item + 1);

console.log("Q2:", incrementNum);

console.log("----------------------------------------------------");

// #### 3. Filter Evens
// * Create a function called filterEvens that filters an array and only return even numbers. The function should take an array of numbers as an argument, and should not use a loop.

// * Examples:
// ```javascript
// filterEvens([1,2,3,11,12,13]); //returns [2,12]
// filterEvens([22,2,31,110,6,13]); //returns [22,2,110,6]

const filterEvens = (array) => array.filter((item) => item % 2 === 0);

console.log("Q3:The even numbers are:", filterEvens([1, 2, 3, 11, 12, 13]));

console.log("Q3:The even numbers are:", filterEvens([22, 2, 31, 110, 6, 13]));

console.log("-----------------------------------------------------");

// #### 4. Filter Friends
// * Given an array, create a function which filters array based on a search query.

// * Examples

// ```javascript
// const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];
// console.log(filterItems(friends, 'ka')); // ["Rika"];
// console.log(filterItems(friends, 'e')); // ["Jenna", "Bleda", "Oliver"];

const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

const filterItems = (array, string) =>
  array.filter((item) => item.includes(string));

console.log("Q4:", filterItems(friends, "ka")); // ["Rika"];
console.log("Q4:", filterItems(friends, "e"));

console.log(
  "---------------------------------------------------------------------"
);

// #### 5. Sum Up
// * Write a function called sum that uses the reduce method to sum up an array of numbers.

// * Examples:
// ```javascript
// sum([1,2,3,4,5]); //returns 15
// sum([6,7,7]); //returns 20

const sum = (array) => array.reduce((total, number) => (total += number), 0);
console.log("Q5:", sum([1, 2, 3, 4, 5]));
console.log("Q5:", sum([6, 7, 7]));

console.log(
  "---------------------------------------------------------------------"
);

// #### 6. Square Root
// * Given an array of numbers, find the square root of each element in the array.

const square = (array) => array.map((number) => Math.pow(number, 2));

console.log("Q6:", square([5, 4, 3, 9]));

console.log(
  "-----------------------------------BONUS-------------------------------------------------------------"
);

/**
 * 01
 * Create a function that accepts 2 arrays and returns an array with
 * the different items between those 2 arrays
 * example
 * diffArray(["grass", "dirt", "pink wool", "dead shrub"],  ["grass", "dirt", "dead shrub"]) should return ["pink wool"]
 *
 * diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return [4]
 */

const diffArray = (arr1, arr2) => {
  const merged = [...arr1, ...arr2];
  return merged.filter((el) => merged.indexOf(el) === merged.lastIndexOf(el));
};
console.log(
  "Bonus Q1a:",
  diffArray(
    ["grass", "dirt", "pink wool", "dead shrub"],
    ["grass", "dirt", "dead shrub"]
  )
);

console.log("Bonus Q1b", diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

console.log("------------------------------------------------------------");

/**
 * 02
 * Write a function that accepts a letter and returns wether this letter
 * is upperCase or not. if It's uppercase should return 'YES'
 * else should return 'NO'
 */

const upperCase = (a) => (a.toUpperCase() === a ? "yes" : "no");
console.log("Bonus Q2:", upperCase("A"));

console.log("------------------------------------------------------------");

/**
 * 03
 * Write a function that counts the number of the odd digits in number.
 *
 */
const numbers = [1, 5, 9, 6, 7, 8, 10];

const removeOdd = (array) => {
  return array.reduce((acc, item) => {
    if (item % 2 === 0) {
      acc++;
    }

    return acc;
  }, 0);
};

console.log("Bonus Q3: The number of odd numbers are:", removeOdd(numbers));

/**
 * 04
 * Telephone conversation price calculator
 * Write a program that calculates the price in euros of a
 * telephone conversation.
 * The Price table is:
 * numbers starting from: 0180-1 = 0.039 €/minute
 * numbers starting from: 0180-2 = 0.06 €/call plus 0.42 €/minute
 * numbers starting from: 0180-7 = first 30 seconds free, then 0.14 €/minute
 * numbers starting from 0800 = free of charge.
 * Please note that prices must be format with 2 digits precision
 */

/**
 * 05
 * Write a function that accepts an array with items followed by one or more
 * arguments. The function should return another array that doesn't include
 * any of the elements that have the same values as in the arguments that
 * come after the array
 * Examples:
 * clearArray([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1]
 * clearArray([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1]
 * clearArray([3, 5, 1, 2, 2], 2, 3, 5) should return [1]
 * clearArray([2, 3, 2, 3], 2, 3) should return []
 */
