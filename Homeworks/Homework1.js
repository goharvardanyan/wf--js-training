//Problem 1. Print “odd” if the number is odd and “even” if it’s even. 

function oddEven(number) {
    if (number % 2 === 0) {
        console.log("Even");
    }
    else {
        console.log("Odd");
    }
}


// Problem 2. Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.

function IsDivisibleBy(a, b) {
    if (a % b === 0 || b % a === 0) {
    console.log(1);
    } else {
    console.log(0);
    }
 }


 // Problem 3. Find the third angle of the triangle.

 function triangleAnglesSum(a, b) {
    let c = 180 - (a + b);
    console.log(c);
}


// Problem 4. Print the value of n + nn + nnn(not multiplication).

function sum(n) {
    let count = 1;
    let temp = n;
    while (Math.floor(temp / 10) !== 0) {
        count++;
        temp = temp / 10;    
    }
    n = n + (n * Math.pow(10, count) + n) +(n * Math.pow(10, count * 2) + (n * Math.pow(10, count) + n));
    console.log(n); 
}


// Problem 5. Bring the last digit of the number to the beginning.

function sum(a) {
    if (a % 10 === 0) {
      console.log(a);
    } else {
     let count = 1;
     let num = a % 10;
     let rest = Math.floor(a / 10);  
        while (Math.floor(a / 10) !== 0 ) {
        a = Math.floor(a / 10);
            count = count * 10;
        } console.log((num * count) + rest);
      }
}


// Problem 6. Calculate and print the average of 5 numbers.

    function average(a, b, c, d, e) {
        let aver = (a + b + c + d + e) / 5;
        console.log(aver);
        }

        

// Problem 7. Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.

function isDivisible(a) {
    let firstVar = 3;
    let secVar = 5;
    let thirdVar = 7;
    if (a % firstVar === 0  && a % secVar === 0  && a % thirdVar === 0) {
       console.log(`${a} is a multiple of ${firstVar}, ${secVar}, ${thirdVar}.`);

    } else if (a % firstVar === 0 && a % secVar === 0) {
        console.log(`${a} is a multiple of ${firstVar}, ${secVar}.`);

    } else if (a % firstVar === 0 && a % thirdVar === 0) {
        console.log(`${a} is a multiple of ${firstVar}, ${thirdVar}.`);

    } else if (a % secVar === 0 && a % thirdVar === 0) {
        console.log(`${a} is a multiple of ${secVar}, ${thirdVar}.`);

    } else if (a % firstVar === 0) {
        console.log(`${a} is a multiple of ${firstVar}`);

    } else if (a % secVar === 0) {
        console.log(`${a} is a multiple of ${secVar}`); 

    } else if ( a % thirdVar === 0) {
        console.log(`${a} is a multiple of ${thirdVar}`); 

    } else  {
        console.log(`${a} is not a multiple of ${firstVar}, ${secVar}, ${thirdVar}.`);
    }
 } 


 // Problem 8. Given an age, figure out whether someone is a baby, toddler, child, teenager or adult.

 function age(a, b) {
    if (b === "months") {
        if (a >= 1  && a <= 12) {
            console.log("baby");
        }
    } else if (b === "years") {
         if (a === 1 || a === 2) {
          console.log("toddler"); 
    } else if (a >= 3 && a <= 12) {
           console.log("child");
    } else if (a >= 13 && a <= 17) {
           console.log("teenager");  
    } else if (a >= 18) {
           console.log("adult");
       }
     }
  }


  // Problem 9. Given three numbers. Sort them by the ascending order.
  
  function sortByAscending(a, b, c) {
    if (a >= b && b >= c) {
      console.log(c, b, a);
    } else if (a >= b && c >= a) {
        console.log(b, a, c);
    } else if (b >= a && a >= c) {
        console.log(c, a, b);
    } else if (b >= a && c >= a) {
        console.log(a, b, c);
    } else if (c >= a && a >= b) {
        console.log(b, a, c);
    } else if (c >= a && b >= c) {
        console.log(a, c, b);
    }
}


// Problem 10. 

function examPass(a, b, c) {
    if (a >= 40 && b >= 40 && c >= 40){
        console.log("Passed");
        return;
    }
    if (a >= 40 && b >= 40 && c >= 0 || a >= 40 && b >= 0 && c >= 40 || a >= 0 && b >= 40 && c >= 40){
        if ((a + b + c) / 3 >= 50){
            console.log("Passed");
            return;
        }
    } console.log("Not passed");
 }


 // Problem 11. Find the sign of product of three numbers without multiplication operator.

 function checkSign(a, b, c) {
    let count = 0;
      if (a === 0 || b === 0 || c === 0 ) {
          console.log("unsigned");
      } else { 
          if (a < 0){
            count++;
          } 
          if (b < 0){
           count++;
          } 
          if (c < 0) {
           count++;
          } 
          if (count % 2 === 0) {
            console.log("+");
          } else {
             console.log("-");
            } 
       }
  }

// Problem 12. Input three numbers a, b, c respectively, where a is a non zero number and write a
// program to solve quadratic equations.

function solveQuadEquation(a,b,c) {
    let discriminant;
    let x1;
    let x2;
    if (a === 0){
        console.log("Enter valid constans");
    } else {
        discriminant = Math.pow(b, 2) - 4 * a * c;
        if(discriminant > 0) {
            x1 = -b - Math.sqrt(discriminant) / 2 * a;
            x2 = -b + Math.sqrt(discriminant) / 2 * a; 
            console.log("Solutions are " + x1 + " and " + x2);
        } else if(discriminant === 0) {
            x1 = -b / 2 * a;
            console.log("Solution is " + x1 );
        } else if(discriminant < 0) {
            console.log("Solution does not exist");
        }
    }
}


// Problem 13. Given the following code rewrite it using only two if operators.

var n = +prompt();
var i = 0;
var j = 0;
if (n % 2 === 0 && !Math.floor(n / 10)){
    i += 1;
}
if (n % 3 === 0 && n % 10 === 1) {
    j += 1;
}


// Problem 14. Check whether the digits contains in the number or not.

function findDigit(a, b) {
    while (Math.floor(b / 10) !== 0) {
        if (b % 10 === a) {
            console.log("Yes");
            return;
        } 
        b = Math.floor(b / 10);
    }
    if (b === a) {
        console.log("Yes"); 
    } else console.log("No");
}


//Problem 15. Enter a number. Reverse its first and last digits. Print the new number.


function swapFirstLastDigits(a) {
    let firstDig;
    let lastDig = a % 10;
    let count = 1;
    let temp = a;
    if (Math.floor(a / 10) === 0) {
       console.log(a);
       return;
    }
    while (Math.floor(temp / 10) !== 0) {
        count *= 10;
        temp = Math.floor(temp / 10);
    }
    firstDig = temp;
    a = lastDig * count + ((a % count) - lastDig + firstDig);
    console.log(a);
}


// Problem 17.

function areaOfTriangleRectangle(a, b) {
    if (a <= 0 || b <= 0){
        console.log("Please enter only positives");
        return;
    }
    let figure = prompt("What figure do you choose: Triangle or Rectangle");
    if (figure === "Triangle") {
        area = a * b / 2;
        console.log(`Square of the triangle is ${area}`);
    } else if (figure === "Rectangle") {
        area = a * b;
        console.log(`Square of the rectangle is ${area}`);
    } 
}


// Problem 18. Enter a number. Find the difference between its biggest and smallest digits.

function diffBetweenDigits(n) {
    let min = n % 10;
    let max = 0;
    let dig;
    if(Math.floor(n / 10) === 0) {
      return 0; 
    } 
     while(Math.floor(n / 10) !== 0) {
         dig = n % 10;
         if(max <= dig) {
           max = dig;
         } if(min < dig) {
             min = dig;
           }
            n = Math.floor(n / 10);
     } if(n > max) {
          max = n;    
       } if(n < min) {
           min = n;    
         } return max - min;
  }



