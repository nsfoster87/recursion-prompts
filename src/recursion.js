/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  // return null for negative integers:
  if (n < 0) {
    return null;
  }
  return n === 0 ? 1 : n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  // base case: array[array.length]
  return array.length === 0 ? 0 : array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  // base case: return 0 for empty array
  if (array.length === 0) {
    return 0;
  }

  var num1 = !Array.isArray(array[0]) ? array[0] : arraySum(array[0]);
  return num1 + arraySum(array.slice(1));

};

// 4. Check if a number is even.
var isEven = function(n) {
  // base case: n === 0
  if (n === 0) {
    return true;
  }
  return n < 0 ? !isEven(n + 1) : !isEven(n - 1);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  // base case n is between -1 and 1
  if (n >= -1 && n <= 1) {
    return 0;
  }
  return n < 0 ? n + 1 + sumBelow(n + 1) : n - 1 + sumBelow(n - 1);
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
  // base case: x and y are next to each other, return empty array
  if (y - x <= 1 && y - x >= -1) {
    return [];
  }
  if (y > x) {
    var array = range(x, y - 1);
    array.push(y - 1);
    return array;
  } else {
    var array = range(x, y + 1);
    array.push(y + 1);
    return array;
  }
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  // base case: exponent is 0
  if (exp === 0) {
    return 1;
  }
  return exp > 0 ? base * exponent(base, exp - 1) : exponent(base, exp + 1) / base;
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  // base case:
  if (n === 1) {
    return true;
  }
  if (n === 0 || n !== parseInt(n)) {
    return false;
  }
  return powerOfTwo(n / 2);
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  // base case string.length === 0, return ''
  if (string.length === 0) {
    return '';
  }
  return string[string.length - 1] + reverse(string.slice(0, string.length - 1));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  // base case string.length === 1 or string.length === 0
  if (string.length <= 1) {
    return true;
  }

  if (string[0].toLowerCase() !== string[string.length - 1].toLowerCase()) {
    return false;
  }

  return palindrome(string.slice(1, string.length - 1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (y === 0) {
    return NaN;
  }
  if (x >= 0 && y > x) {
    return x;
  } else if (x <= 0) {
    if ((y > 0 && y > -x) || (y < 0 && y < x)) {
      return x;
    }
  }
  return (x < 0 && y > 0) ? modulo(x + y, y) : modulo(x - y, y);
};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  }
  if (x < 0 && y < 0) {
    x = -x;
    y = -y;
  }
  if (y < 0 && x > 0) {
    x = -x;
    y = -y;
  }
  return x + multiply(x, y - 1);
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
  if (y === 0) {
    return NaN;
  }
  if (x === 0) {
    return 0;
  }
  if (x < 0 && y < 0) {
    x = -x;
    y = -y;
  }
  if (x > 0 && y > 0) {
    return x - y < 0 ? 0 : 1 + divide(x - y, y);
  }
  if (x < 0 && y > 0) {
    x = -x;
    y = -y;
    return x + y < 0 ? 0 : 1 + divide(x + y, y);
  }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
// Euclid's Algorithm:
// Divide the larger number by the smaller number, and take the GCD of
// the smaller number and the remainder until remainder is 0
// ex: GCD(12, 10) === GCD(10, 2) === GCD(2, 0) === 2
var gcd = function(x, y) {
  // return null for negative integers
  if (x < 0 || y < 0) {
    return null;
  }

  // base case, x or y is zero
  if (x === 0 || y === 0) {
    return x === 0 ? y : x;
  }

  return x > y ? gcd(y, x % y) : gcd(x, y % x);

};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  // base case, we have reached the end of either string,
  // return true if it's the end of both strings
  if (!str1.length) {
    return !str2.length;
  } else if (!str2.length) {
    return false;
  }

  return str1[0] === str2[0] && compareStr(str1.slice(1), str2.slice(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  // base case: we have reached the beginning of the string
  if (!str.length) {
    return [];
  }
  var result = createArray(str.slice(0, str.length - 1));
  result.push(str[str.length - 1]);
  return result;
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  // base case, we've reached the end of the array
  if (!array.length) {
    return [];
  }
  var result = reverseArr(array.slice(1));
  result.push(array[0]);
  return result;
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  // base case: length === 0
  if (!length) {
    return [];
  }
  var result = buildList(value, length - 1);
  result.push(value);
  return result;
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  // base case: n === 0
  if (n === 0) {
    return [];
  }
  var result = fizzBuzz(n - 1);
  if (n % 3 === 0) {
    n % 5 === 0 ? result.push('FizzBuzz') : result.push('Fizz');
  } else if (n % 5 === 0) {
    result.push('Buzz');
  } else {
    result.push(String(n));
  }
  return result;
};

// 20. Count the occurrence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  // base case, no values left
  if (!array.length) {
    return 0;
  }
  return array[0] === value ? countOccurrence(array.slice(1), value) + 1 : countOccurrence(array.slice(1), value);
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  // base case, empty array
  if (!array.length) {
    return [];
  }
  var result = rMap(array.slice(0, array.length - 1), callback);
  result.push(callback(array[array.length - 1]));
  return result;
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  // base case: value is not an object
  if (typeof obj === 'string') {
    return 0;
  }
  var keyCount = 0;
  for (itemKey in obj) {
    if (itemKey === key) {
      keyCount++;
    }
    keyCount += countKeysInObj(obj[itemKey], key);
  }
  return keyCount;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
  if (typeof obj === 'string') {
    return obj === value ? 1 : 0;
  }
  var valueCount = 0;
  for (key in obj) {
    valueCount += countValuesInObj(obj[key], value);
  }
  return valueCount;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  // base case: the obj is just a string value, return it
  if (typeof obj === 'string') {
    return obj;
  }

  // if obj is an obj, if it's key is the same as oldkey,
  // newObj[newKey] = obj[key]
  // else
  // newObj[key] = obj[key]
  for (key in obj) {
    if (key === oldKey) {
      obj[newKey] = replaceKeysInObj(obj[key], oldKey, newKey);
      delete obj[oldKey];
    } else {
      obj[key] = replaceKeysInObj(obj[key], oldKey, newKey);
    }
  }
  return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
  // return null for zero and negative integers
  if (n <= 0) {
    return null;
  }
  // base case n is 1
  if (n === 1) {
    return [0, 1];
  }
  var result = fibonacci(n - 1);
  var next = result[result.length - 2] + result[result.length - 1];
  result.push(next);
  return result;
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  // return null for negative integers
  if (n < 0) {
    return null;
  }

  // base case: n === 0
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  return nthFibo(n - 1) + nthFibo(n - 2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  // base case, no words in array
  if (!array.length) {
    return [];
  }

  var result = capitalizeWords(array.slice(0, array.length - 1));
  result.push(array[array.length - 1].toUpperCase());
  return result;
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  if (!array.length) {
    return [];
  }
  var result = capitalizeFirst(array.slice(0, array.length - 1));
  var capitalWord = array[array.length - 1][0].toUpperCase() + array[array.length - 1].slice(1);
  result.push(capitalWord);
  return result;
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  // base case, value is not an object
  if (typeof obj !== 'object') {
    return typeof obj === 'number' && obj % 2 === 0 ? obj : 0;
  }
  var sum = 0;
  for (key in obj) {
    sum += nestedEvenSum(obj[key]);
  }
  return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  // base case, array is not an array
  if (!Array.isArray(array)) {
    return array;
  }
  var result = [];
  array.forEach(function(element) {
    result = result.concat(flatten(element));
  });
  return result;
};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  // base case: string is empty
  if (!str.length) {
    return {};
  }
  var lastLetter = str[str.length - 1];
  if (!obj) {
    obj = letterTally(str.slice(0, str.length - 1));
  }
  obj[lastLetter] = obj.hasOwnProperty(lastLetter) ? obj[lastLetter] + 1 : 1;
  return obj;
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  // base case, list is empty
  if (!list.length) {
    return [];
  }
  var value = list[list.length - 1];
  list = list.slice(0, list.length - 1);
  while (list[list.length - 1] === value) {
    list = list.slice(0, list.length - 1);
  }
  var result = compress(list);
  result.push(value);
  return result;

};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  // base case, we've reached the end
  if (!array.length) {
    return [];
  }
  var element = array[array.length - 1];
  element.push(aug);
  var subArray = array.slice(0, array.length - 1);
  var result = augmentElements(subArray, aug);
  result.push(element);
  return result;

};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  // base case: end of array
  if (!array.length) {
    return [];
  }
  var value = array[array.length - 1];
  var newArray = array.slice(0, array.length - 1);
  while (value === 0 && newArray[newArray.length - 1] === 0) {
    newArray = newArray.slice(0, newArray.length - 1);
  }
  var result = minimizeZeroes(newArray);
  result.push(value);
  return result;

};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  if (!array.length) {
    return [];
  }
  var value = array[array.length - 1];
  value = value < 0 ? -value : value;
  var result = alternateSign(array.slice(0, array.length - 1));
  result.length % 2 === 0 ? result.push(value) : result.push(-value);
  return result;
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  var numbers = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine'
  };
  if (!str.length) {
    return '';
  }
  var words = str.split(' ');
  var lastWord = words.pop();
  if (!Number.isNaN(parseInt(lastWord))) {
    lastWord = numbers[lastWord];
  }
  return (numToText(words.join(' ')) + ' ' + lastWord).trim();
};


// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
