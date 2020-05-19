// Problem 1. Given an array. Determine whether it consists only from unique elements or not.


function isUnique(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++){
            if(array[j] === array[i]){
                return false;
            }
        }
    } 
    return true;
}

console.log(isUnique([1,2,3,4,5,6,1]));


// Problem 2. Given an array of numbers. Find the sum of numbers’ quadratic which are even.


function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (Math.sqrt(array[i]) % 2 === 0) {
            sum += array[i];
        }
    }
    return sum;
}


console.log(sum([1,3,4,9,16,25,32,17,36]))


// Problem 3. Check whether string is palindrome, or not.

function isPalindrom(string) {
    for (let i = 0; i < Math.floor(string.length / 2); i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return false;
        }
    }
    return true;
}




// Added version(ignoring capital letters, punctuation, and word dividers).

function isLetterOrNumber(char) {
    if (char.toLowerCase() !== char.toUpperCase()) {
        return true;
    }
    if (char.charCodeAt() >= 48 && char.charCodeAt() <= 57) {
        return true;
    }
    else {
        return false;
    }
}

function isPalindrom2(string) {
    let i = 0;
    let j = string.length - 1;
    let str = string.toLowerCase();
    while(i < j) {
        if(!isLetterOrNumber(str[i]) || !isLetterOrNumber(str[j])) {
           if (!isLetterOrNumber(str[i])) i++;
           if (!isLetterOrNumber(str[j])) j--; 
        } else if (str[j] === str[i]) {
            i++;
            j--;
        } else {
            return false;
        }
    }
    return true;
}

console.log(isPalindrom2("A man, a plan, a canal, Panama!"))




// Problem 4. Given a word and a list of possible anagrams, select the correct sublist.

function findListOfAnagrams(array, string) {
    let resultArray = array.filter(element => {
     if (string.split("").sort().join("") === element.split("").sort().join("")) {
         return element;
     }
    }) 
    return resultArray;
}

console.log(findListOfAnagrams(["tenlis", "kjhsgd", "lisutn", "hjub","netsil","tslnie"],"listen"));