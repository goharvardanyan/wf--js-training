// Problem 1. Write a recursive function to determine whether 
// all digits of the number are odd or not.


function isOdd(n) {
    if(n < 0) {
        n = -n;
    }
    if ((n % 10) % 2 === 0) {
        return false;
    }
    n = Math.floor(n / 10);  
    if (n === 0){
     return true;
    }
     return isOdd(n);
}


// Problem.2 Given an array of numbers. Write a recursive function to find 
//   its minimal positive element. (if such element does not exist, return -1)․


function minPositive(array, min = Infinity, count = 0) {
    if (array.length === count) {
        if(min  === Infinity){
            return -1;
        } 
            return min;
    }
    if (array[count] < 0 || array[count] > min ){
        count++;
    } else {
        min = array[count];
        count++;
    }
        return minPositive(array, min,count);
}


// Problem 3. Write a recursive function which receives a number as 
// arguments and returns the fibonacci sequence as array.


function fibArr(n, res = [1, 1]) {
    if(n === 0) {
        return [];
    } if (n === 1){
        return [1];
    } if (n === 2) {
        return res;
    } 
     fibArr(n - 1, res);
     res.push((res[res.length - 1]) + (res[res.length - 2]));
    return res;
}



// Problem 4. Given an array of nested arrays. Write a recursive function 
// that flattens it. (Hint create function that concats arrays).


function concatNestedArrays(array, res = []) {
    if (array.length === 0) {
        return res;
    }
    let current = array[0];
    array.shift();
    let rest = array;

    if (current instanceof Array) {
        return concatNestedArrays(current.concat(rest), res);
    } 
        res.push(current);
        return concatNestedArrays(rest, res);
}


// Problem 5. Given a number. Write a function that calculates its sum of the digits
//  and if that sum has more than 1 digit find the sum of digits of that number.
//  Repeat that process if needed and return the result.


function digitsSum(n) {
    if (!Math.floor(n / 10)) {
        return n;
    }
    let sum = 0;
    while (n !== 0) {
        sum = sum + n % 10;
        n = Math.floor(n / 10);
    } 
        return digitsSum(sum);
}