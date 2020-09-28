/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
    if (n === 1) {
        return 1;
    }
    if ( n===0 ) {
        return 1;
    }
    if ( n<0 ) {
        return null;
    }

    return n * factorial(n-1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {

    if (array.length === 0)
    {
        return 0;
    } 

    return array[array.length -1] + sum(array.slice(0, array.length-1));
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {

    var sumOfElement;

    if (array.length === 0) {
        return 0;
    }

    if (Array.isArray(array[0]) === true) {
      //if array[0] add it tot he summ 
      sumOfElement = arraySum(array[0]);
    } else {
      //if array[0] is an array call arraySum and store it in a variable
      sumOfElement = array[0];
    }
    //then add this variable to the sum and return the sliced array
    return sumOfElement + arraySum(array.slice(1,array.length));

};

// 4. Check if a number is even.
var isEven = function(n) {

    n = Math.abs(n);

    if ( n === 0 ) {
        return true;
    }
    if ( n === 1 ) {
        return false;
    }

    return isEven(n-2);
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {

    if (n === 0){
        return 0;
    }

    var absNum = Math.abs(n);
    var multiplier;

    if (n < 0) {
        multiplier = -1;
    } else {
        multiplier = 1;
    }

    return multiplier * (absNum -1 + sumBelow(absNum-1));

};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
var range = function(x, y) {
    var arr =[];
    if ( x <= y) {

        if (y-x === 2) {
            return x+1;
        } else if (x === y | y-x === 1) {

            return [];
        } else {
            return arr.concat(x+1, range(x+1,y));
        }

    } else
    {
        if (x-y === 2) {
            return x-1;
        } else if (x === y | x-y === 1) {

            return [];
        } else {
            return arr.concat(x-1, range(x-1,y));
        }
    }

};
// 3,8

// 3 -> 3=7 -> 4 -> 4,8
// 4 -> 4=7 -> 5 -> 5,8
// 5 -> 5=7 -> 6 -> 6,8
// 6 -> 6=7 -> 7 -> 7,8
// 7 -> 7=7 -> 7

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  
    if (exp === 0) {
        return 1;
    } else if (exp < 0) {

        return Math.ceil(1/(base) * exponent(base,  exp + 1), 4);

    } else {

        return base * exponent(base, exp -1);
    }


};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {

    if ( n >= 0 && n < 1) {
        return false;
    } else if (  n ===1 ) {
        return true;
    } else {
        return powerOfTwo(n/2);
    }

};

// 9. Write a function that reverses a string.
var reverse = function(string) {

    if( string.length === 1 )
    {
        return string;
    }

    return string[string.length-1] + reverse(string.slice(0,string.length-1));
};

// 10. Write a function that determines if a string is a palindrome.
/*
wellew


*/
var palindrome = function(string) {

    string = string.replace(/ /g,'');
    string = string.toUpperCase();
    if (string.length === 1) {
        return true;
    }
    if(string.length === 2) {
        if (string[0] === string[1]) {
            return true;
        } else {
            return false;
        }
     
    }
    if(string[0] !== string[string.length-1]) {

        return false;

    }
    
    if (string[0] === string[string.length-1]) {
        return palindrome(string.slice(1,string.length-1));
    }

};


// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {

    if (x === 0 && y === 0) {
        return NaN;
    } else if ( x < y && x >= 0) {

       // console.log(x);

        return x;

    } else {
        if ( (x > 0 && y > 0) || (x < 0 && y < 0)) {
          return modulo(x-y ,y);
        } else if ((x < 0 && y > 0) || (x > 0 || y < 0)) {
            return modulo(x+y, y);
        }
    }

};

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {

    // var x_sign;
    // var y_sign;
    // var t;

    // if (x<0) {
    //   t = x.toString();
    //   x_sign = t.slice(0,1);
    //   x = parseInt(t);
    // }
    // if (y<0) {
    //     t = y.toString();
    //     y_sign = t.slice(0,1);
    //     y = parseInt(t);
    //   }  

    // if ( y === 1 ) {
    //     return x;
    // }
    
    // if ( (x_sign === undefined && y_sign === undefined) || (x_sign === '-' && y_sign === '-')) {
    //     return x + (multiply(x,y-1))
    // } else {
    //     t = (x + (multiply(x,y-1))).toString();
    //     t = '-'+t;
    //     return parseInt(t);
    // }

    
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {

    if(str1.length === 0 && str2.length === 0) {
        return true;
    } else if(str1[0] !== str2[0]) {
        return false;
    } else if(str1[0] === str2[0])  {
        return compareStr(str1.slice(1,str1.length),str2.slice(1,str2.length));
    }

    
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
    var arr = [];

    arr[0] =str[0];

    if (str.length === 1) {
        return arr;
    } 

    return arr.concat(createArray(str.slice(1,str.length)));

};

// 17. Reverse the order of an array
var reverseArr = function(array) {

    var arr = [];    

    if(array === undefined) {
        return [];
    }
    if(array.length === 0) {
        return [];
    }

    arr.push(array[array.length-1]);
    return arr.concat(reverseArr(array.slice(0,array.length-1)));
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
    var arr=[];

    if(length === undefined) {
        return [];
    }
    if(length === 0) {
        return [];
    }

    arr.push(value);
    return arr.concat(buildList(value,length-1));
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {

    var arr=[];

    var calcFizzBuzz;

    if (n%3 === 0 && n%5 === 0) {
        calcFizzBuzz ='FizzBuzz';
    } else  if (n%3 === 0) {
        calcFizzBuzz = 'Fizz';
    } else if (n%5 === 0) {
        calcFizzBuzz = 'Buzz';
    } else {
        calcFizzBuzz = n.toString();
    }
    
    arr.push(calcFizzBuzz);

    if(n===0) {
        return [];
    }

    return fizzBuzz(n-1).concat(arr);
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {

    var val;

    if(array.length === 0) {

        return 0;
    }

    if (array[0] === value) {
        val = 1;
    } else {
        val = 0;
    }

    return val + countOccurrence(array.slice(1,array.length),value);    
};

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {

    var arr = [];
    var val;

    if(array.length === 0) {
        return [];
    }
   
    val = callback(array[0]);
    arr.push(val);
   // console.log(arr);
    return arr.concat(rMap(array.slice(1,array.length), callback));
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {

    var val = 0;

    for (k in obj)  {
        if (k === key) {
            val++;
        }

        if (typeof obj[k] === 'object') {

            val = val + countKeysInObj(obj[k],key);
        }
    }

    return val;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {

    var val = 0;

    for (k in obj)  {
        if (obj[k] === value) {
            val++;
        }

        if (typeof obj[k] === 'object') {

            val = val + countValuesInObj(obj[k],value);
        }
    }

    return val;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {

    for (k in obj)  {
        if (k === oldKey) {
            obj[newKey]=obj[oldKey];
            delete obj[oldKey];
        }

        if (typeof obj[k] === 'object') {

            obj[k]=replaceKeysInObj(obj[k], oldKey, newKey);
        }
    }

    return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
/*
0 1
0 1 1
0 1 1 2
0 1 1 2 3
*/
var fibonacci = function(n) {

    var arr = [];
    if (n === 0 || n < 0) {
        return null;
    } else if (n===1) {
        return [0,1];
    }

    var preArr = fibonacci(n-1);

    arr.push(preArr[preArr.length - 1] + preArr[preArr.length - 2]);

    return preArr.concat(arr);    
  
};

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {

    if (n<0) {
        return null;
    } else if (n === 0) {
        return 0;
    } else if (n===1) {
        return 1;
    }

    return nthFibo(n-1) + nthFibo(n-2);
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {

    var arr=[];

    if (array.length === 0) {
        return [];
    }

    arr.push(array[0].toUpperCase());

   return  arr.concat(capitalizeWords(array.slice(1,array.length)));
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {

    var arr=[];

    if (array.length === 0) {
        return [];
    }

    arr.push(array[0][0].toUpperCase() + array[0].slice(1,array[0].length));

   return  arr.concat(capitalizeFirst(array.slice(1,array.length)));

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
    var val = 0;

    for (k in obj)  {
        if (obj[k]%2 === 0) {
            val = val + obj[k]
        }

        if (typeof obj[k] === 'object') {

            val = val + nestedEvenSum(obj[k]);
        }
    }

    return val;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {

    //var val = [];

    var arr = [];
    var arr1 =[];

    if(array.length === 0) {
        console.log('I am here');
        return [];
    }

    console.log('I am trying to be deflatted: ' + array);
    console.log(array);

    if (Array.isArray(array[0]) === true) {
        // console.log('I am a nested array: ');
        // console.log(array[0]);
        console.log('before callin nested array: ' + array +' -> '+ array[0] + ' -> ' +  arr) ;
        console.log(array[0]);
        arr = arr.concat(flatten(array[0]));
        arr1.push(flatten(array[0]));
                console.log('after calling nested array: ' + array +' -> '+ array[0] + ' -> ' +  arr + ' flatten(array[0]) ' + flatten(array[0])) ;
        console.log(arr);
        console.log(arr1);
    } else {
        arr.push(array[0]);
        // console.log('I am not an array so I am pushed to arr: ');
        // console.log(arr);

    }

    console.log('I have been before  array: ' + array + ' -> ' + arr);
    // console.log(array);
    // console.log(arr);
    arr = arr.concat(flatten(array.slice(1,array.length)));
    
    console.log('I have been after  array: ' + array + ' -> ' + arr);

    console.log('I am returning arr: ' + arr);
    // console.log(array);
    console.log(arr);
    


    // console.log('I have been deflatten from array: ');
    // console.log(array);
    // console.log(' to arr: ');
    // console.log(arr);
    return  arr;

};

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {

    //console.log(str);

    if (obj === undefined) {
        obj = {};
    }
      
    if (str.length === 0) {
        return obj;
    }
      if ( obj[str[0]] === undefined) {
          obj[str[0]] = 1;
      } else {
          obj[str[0]]++;
      }
      
      letterTally(str.slice(1,str.length), obj);

      return obj;
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {

    var arr = [];

    if (list.length === 0) {
        return [];
    }

    //arr.push(list.shift());
    if( list[1] === list[0] )
    {
        arr = arr.concat(compress(list.slice(1,list.length)));
    } else {
        arr.push(list[0]);
        arr = arr.concat(compress(list.slice(1,list.length)));
    }

    return arr;


};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {

    var arr = [];

    if(array.length === 0) {
        return [];
    }

    array[0].push(aug);

    arr.push(array[0]);

    return arr.concat(augmentElements(array.slice(1,array.length),aug));
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
    var arr = [];

    if (array.length === 0) {
        return [];
    }

    //arr.push(list.shift());
    if( array[1] === array[0] && array[1] ===0 )
    {
        arr = arr.concat(minimizeZeroes(array.slice(1,array.length)));
    } else {
        arr.push(array[0]);
        arr = arr.concat(minimizeZeroes(array.slice(1,array.length)));
    }

    return arr;
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
   
    var arr = [];
    
    if (array.length === 0) {
        return [];
    }

    if(array[0] !== undefined) {
        if(array[0] < 0) {
            
            array[0] = -1 * array[0];

        }
        arr.push(array[0]);
    }

    if (array[1] !== undefined) {
        if (array[1] > 0) {
            array[1] = -1 * array[1];
        }
        
        arr.push(array[1]);
    }
    
    return arr.concat(alternateSign(array.slice(2,array.length)));
    

};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
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
