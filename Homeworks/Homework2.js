//Problem 1. Insert a number. Print ‘yes’ if the number is prime, ‘no’ otherwise.

function isPrime(n) {
    let Prime = "Yes";
    if (n === 1) {
        Prime = "No";
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if(n % i === 0) {
            Prime = "No";
            break;
        }
    } 
    return Prime;
}


/* Problem 2. Given a number n ( n>= 0 ). Print nth Fibonacci number.  
(Fibonacci series: 0, 1, 1, 2, 3, 5, 8 …, ak = ak-1 + ak-2). */

function fibonacci(n) {
    let arr = [];
    arr[0] = 0;
    arr[1] = 1;
    for(let i = 0; i < n - 2; i++) {
        arr[i + 2] = arr[i] + arr[i + 1];
    }
       return arr[n - 1];
  }


//Problem 3. Given a number n( n> 0 ). Print Fibonacci series up to n.
// If n is included.

function fibonacciSeries(n) {
    let arr = [];
    arr[0] = 0;
    arr[1] = 1;
    for (let i = 0; i < n; i++) {
        if (arr[i] + arr[i + 1] > n ) {
           break;
        }
        arr[i + 2] = arr[i] + arr[i + 1];
    } return arr;  
}

  // If n isn't included.

function fibonacciSeries(n) {
    let arr = [];
    arr[0] = 0;
    if (n === 1) {
       return arr;
    }
    arr[1] = 1;  
    for (let i = 0; i <= n; i++) {
        if (arr[i] + arr[i + 1] >= n ) {
           break;
        }
        arr[i + 2] = arr[i] + arr[i + 1];
    } return arr;  
}


/* Problem 4.  Insert a number. Calculate product and sum of the digits of the number.
If product is divisible by the sum, print the quotient, otherwise print the remainder. */

function sumProduct(n) {
    if (n === 0) {
        return "Cannot calculate."
    }
    let sum = 0;
    let product = 1;
    let quotient= 0;
    let remainder = 0;
    while (n > 0) {
        sum = sum + n % 10;
        product = product * (n % 10);
        n = Math.floor(n / 10);
    }
    quotient = product / sum;
    remainder = product % sum;
    if (remainder === 0) {
        return `Quotient is ${quotient}.`;
    } else {
        return `Remainder is ${remainder}.`;
    }  
}


/* Problem 9. Given three numbers a, b (a ≤ b) and num. 
 Create an array of evenly spaced numbers by the given num 
 length over the specified interval (from a to b). */


 function createArray(a,b,c) {
     let resultArray = [];
     resultArray[0] = a;
     let d = (b - a) / (c - 1);
     for (let i = 0; i < c - 1; i++) {
         resultArray[i + 1] = resultArray[i] + d;
     }
     return resultArray;
 }



// Problem 10. Given an array of numbers. Find the index of the second maximum element.

function secondMax(arr) {
    let max = 0;
    let secMax = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[max]) {
            secMax = max;
            max = i;
        }
        if (arr[i] < arr[max] && arr[i] > arr[secMax]) {
            secMax = i;
        }
    } return secMax;
}


// Problem 11. Fisrt version.


function pad1(array, padAmount, repeat) {
    if (padAmount > array.length) {
        return "“Invalid padding amount”";
    }
    let fromTheBeginning = array.slice(0, padAmount);
    let fromTheEnd = array.slice(array.length - padAmount, array.length);
    
    for (let i = 0; i < repeat; i++) {
        array = fromTheBeginning.concat(array);
        array = array.concat(fromTheEnd);
    }
     return array;
}

   // Second version.

function pad2(array, padAmount, repeat) {
    if (padAmount > array.length) {
        return "'Invalid padding amount'";
    }
    let resultArray = [];
    for(let i = 0; i < repeat; i++){
        for (let j = 0; j < padAmount; j++) {
            resultArray.push(array[j]);
        }
    }
    for (let i = 0; i < array.length; i++) {
        resultArray.push(array[i]);
    }
    for(let i = 0; i < repeat; i++) {
        for(let j = array.length - padAmount; j < array.length; j++) {
            resultArray.push(array[j]);
        }
    }
    return resultArray; 
}