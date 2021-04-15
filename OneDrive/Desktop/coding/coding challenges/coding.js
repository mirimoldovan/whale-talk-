// 1 - display 1 to 10          for loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 1; i <= 10; i++) console.log(i); //


// 2 - display odd numbers less then 100
for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0)
    console.log(i);  // loop every odd number with for
}


// 3 - multiplication table with 7
for (let x = 0; x <= 10; x++) {
    const y = 7;
    const count = x * y;
    console.log(`${x} * ${y} = ${count}`);
}


// 4 - all the multiplication tables with numbers from 1 to 10
for (let x = 0; x <= 10; x++) {
    for (let y = 0; y <= 10; y++) {
        const productNum = x * y;
        console.log(`${x} * ${y} = ${productNum}`);
    }
}


// 5 - sum of numbers from 1 to 10
let sum = 0;
let i = 1;
do {
    sum = sum + i;
    i++;
} while (i <= 10);
console.log(sum);     // do sum while i<=10


// 6 - 10!
let count = 1;
let x = 1;
do {
    count = count * x;
    x++;
} while (x <= 10);
console.log(count);  // do multiply while x<=10


// 7 -  the sum of odd numbers greater than 10 and less than 30
let sumOdd = 0;
for (let i = 11; i < 30; i+=2) {
    sumOdd += i;
}
console.log(sumOdd);    // for loop

/*for (let i = 10; i < 30; i++) {
    if (i % 2 !== 0) {
       let sumOddNum = 0;
        sumOddNum += i;
    }
    console.log(sumOddNum);
}*/                           // am incercat asa, dar ceva nu scriu corect


// 8 -  the sum of numbers in an array of numbers
const array = [1, 2, 3, 4, 5, 6, 7, 8];
let sumArray = 0;
for (let i = 0; i < array.length; i++) {
    sumArray += array[i];
}
console.log(sumArray);  // for loop to sum the numbers in an array


// 9 - the average of the numbers in an array of numbers
let averageNum = 1;
for (let i = 0; i < array.length; i++) {
    averageNum *= array[i];
}
console.log(averageNum);  //for loop to multiply the numbers in an array


// 10 - a function that receives an array of numbers and returns an array containing only the positive numbers
const arrays = [25, 1, 2, -3, 4, 20, 5, -6, 7, 8, -9, 10];
const positiveNum = arrays.filter(array => {
    return array >= 0;
})
console.log(positiveNum);  // filter only the numbers that are greater and equal to 0


// 11 - the maximum number in an array of numbers
let maxim = arrays[0];
for (let i = 0; i < arrays.length; i++) {
    if (arrays[i] > maxim) {
        maxim = arrays[i];
    }
}
console.log(maxim);   // for loop to print maxinum number


// 12 - function that will return a Boolean specifying if a number is prime
const isPrime = num => {
    if (num <= 1) { 
        return false;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false; 
            }
        }
        return true;
    }  
}
console.log(isPrime(13));

// 13 - the sum of digits of a positive integer number
function sumDigits(n) {
    let sum = 0;
    while (n) {
        digit = n % 10;
        sum += digit;
        n = (n - digit) / 10;
    }
    return sum;
  }
  console.log(sumDigits(556));

// 14 - Print the first 100 prime numbers
for (let primeNum = 0; primeNum <= 100; primeNum++) {
    let notPrime = false;
    for (let i = 2; i <= primeNum; i++) {
        if (primeNum % i === 0 && i !== primeNum) {
            notPrime = true;
        } 
    } 
    if (notPrime === false) {
        console.log(primeNum);
    }
}


// 15 - Rotate an array to the left 1 position
const rotateLeft = array => {
    let first = array.shift();
    array.push(first);
    return array;
}
console.log(rotateLeft(array)); //shift first number, then push it to the end


// 16 - reverse an array 
const reverseArray = arrays.reverse();
console.log(reverseArray);    // reverse methode


// 17 - Create a function that will merge two arrays and return the result as a new array
const arrays1 = [1, 5, 8, 20, 7, -5, 87];
const arrays2 = [ 123, 87, 20, 34, 4, 7, 65];
const mergeTwoArrays = arrays1.concat(arrays2);
console.log(mergeTwoArrays);  //concatenate methode

console.log(Array.from(new Set(arrays1.concat(arrays2)))); //not repeating the numbers


// 18 - Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both
const newArray = (arr1, arr2) => {
    const newNum = [];
    for (let x = 0; x < arr1.length; x++){
        if (!arr2.includes(arr1[x]))
            newNum.push(arr1[x])
        }
    return newNum
}
console.log(newArray([ 9, 2, 5, 8], [4, 2, 6, 8, 3]));  //includes methode for loopind the number only in one array ans push methode to create a new array.


// 19 - Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
const distinct = (number, index, self) => {
    return self.indexOf(number) === index;
}
const numbersToDistinct = [56, 98, 65, 98, 45, 45, 7, 7];
const distinctNumbers = numbersToDistinct.filter(distinct);
console.log(distinctNumbers);


// 20 - Create a function that will return the number of words in a text
function numOfWords(text) { 
    return text.split(" ").length;
  }
console.log(numOfWords("O zi minunatate de primavara cu fulgi pufosi!")); //function that split and count the number of words in a string.