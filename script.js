// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = n1 + n2 + n3 + n4 == 50;
console.log(isSum50);
// true

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;
console.log(isTwoOdd);
// true (that means we have 2 or more odd numbers)
const is1Odd = n1 % 2;
console.log(is1Odd);
// 0 (so this is not odd because it returned a value of 0)
const is2Odd = n2 % 2;
console.log(is2Odd);
// 1 (this is an odd number because it returned a value of 1)
const is3Odd = n3 % 2;
console.log(is3Odd);
// 0 (so this is not odd because it returned a value of 0)
const is4Odd = n4 % 2;
console.log(is4Odd);
// 1 (this is an odd number because it returned a value of 1)
// Another way of doing it:
let firstVariable = n1 % 2;
if (n1 % 2 === 0) {
  console.log("It is even");
} else {
  console.log("It is odd");
}
// It is even!

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;
console.log(isOver25);
// false (all of them are less than 25)

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique =
  n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;
console.log(isUnique);
// true (this means that each number is different)

// Here, we put the results into a single variable
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);
// true

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis =
  n1 + n2 + n3 + n4 == 50 &&
  (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2 &&
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) &&
  n1 != n2 &&
  n1 != n3 &&
  n1 != n4 &&
  n2 != n3 &&
  n2 != n4 &&
  n3 != n4;

// Part 1

// Math Problems:

// Check if all numbers are divisible by 5

const divBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) === 0;
console.log(divBy5);
// true (because they did not return any remainder it means 5 goes into each of the numbers evenly)

// Check if the first number larger than the last
const largerNum = n1 >= n4;
console.log(largerNum);
// true (because 10 is larger than 5)

// Accomplish the following arithmetic chain
// Subtract the first number from the second number
const newNum = n2 - n1;
console.log(newNum);
// 5 (15-10=5)
// Multiply the result by the third number
const newerNum = newNum * n3;
console.log(newerNum);
// 100 (5*20=100)
//Find the remainder of dividing the result by the fourth number.
const newestNum = newerNum % n4;
console.log(newestNum);
// 0 (100%5=0 because 5 goes into 100 20 times with no remainder)
const num1 = ((n2 - n1) * n3) % n4;
console.log(num1);
// ALSO 0!!!!

//Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
const isUnder25 = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;
console.log(isUnder25);
//returns true and you can do the same with const isOver25
//const isOver25 = n1 > 25 && n2 > 25 && n3 > 25 && n4 > 25;
// console.log(isOver25);
// would return false because they are all less than 25

// Part 2

const milesTotal = 1500;
const miles1 = 55;
const miles2 = 60;
const miles3 = 75;
const milesPerGall1 = 30;
const milesPerGall2 = 28;
const milesPerGall3 = 23;
const budget = 175;
const fuelPerGall = 3;

// How many gallons of fuel will you need for the entire trip?
const numOfGallons1 = milesTotal / milesPerGall1;
console.log(numOfGallons1);
// It will take 50 gallons

const numOfGallons2 = milesTotal / milesPerGall2;
console.log(numOfGallons2);
// It will take 53.57142857142857 gallons

const numOfGallons3 = milesTotal / milesPerGall3;
console.log(numOfGallons3);
// It will take 65.21739130434783 gallons

// Will your budget be enough to cover the fuel expense?
const budget1 = numOfGallons1 * fuelPerGall <= budget;
console.log(budget1);
// true

const budget2 = numOfGallons2 * fuelPerGall <= budget;
console.log(budget2);
// true

const budget3 = numOfGallons3 * fuelPerGall <= budget;
console.log(budget3);
// false (this trip would not be within budget)

// How long will the trip take, in hours?
const tripHours1 = milesTotal / miles1;
console.log(tripHours1);
// 27.272727272727273 hours

const tripHours2 = milesTotal / miles2;
console.log(tripHours2);
// 25 hours

const tripHours3 = milesTotal / miles3;
console.log(tripHours3);
// 20 hours

// Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
console.log(
  `When traveling ${miles1} mph, driving ${milesTotal} miles will take ${tripHours1} hours, require ${numOfGallons1} gallons, and be within your $${budget} budget.`
);
// When traveling 55 mph, driving 1500 miles will take 27.272727272727273 hours, require 50 gallons, and be within your $175 budget.
console.log(
  `When traveling ${miles2} mph, driving ${milesTotal} miles will take ${tripHours2} hours, require ${numOfGallons2} gallons, and be within your $${budget} budget.`
);
// When traveling 60 mph, driving 1500 miles will take 25 hours, require 53.57142857142857 gallons, and be within your $175 budget.
console.log(
  `When traveling ${miles3} mph, driving ${milesTotal} miles will take ${tripHours3} hours, require ${numOfGallons3} gallons, and cost more than your $${budget} budget.`
);
// When traveling 75 mph, driving 1500 miles will take 20 hours, require 65.21739130434783 gallons, and cost more than your $175 budget.
