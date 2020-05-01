//   Problem 1. Given an array. Write a recursive function that removes the first 
//  element and returns the given array. (without using arr.unshift(),
//  assign second element to first, third element to second...)


function shiftArrayEl(array, index = 0) {
    if (array.length - 1 === index || array.length === 0){
        array.length = index;
        return array;
    }
    array[index] = array[index + 1];
    return shiftArrayEl(array, ++index)
}



//   Problem 2. Given an object. Invert it (keys become values and values become keys). 
//    If there is more than key for that given value create an array.


function invertKeysValues(object) {
    let values = Object.values(object);
    let keys = Object.keys(object);
    let res = {};
    values.forEach((element,index) => {
        if(res.hasOwnProperty(element)){
            let arr = [];
            arr.push(res[element]);
            arr.push(keys[index]);
            res[element] = arr;
        }else {
            res[element] = keys[index];
        } 
    });
    return res;
}

console.log(invertKeysValues({ a: '1', b: '2', c: '2' }))



// Problem 3. 


function sort(array) {
    return array.filter((elemObj) => 
      elemObj.readStatus === true).sort((elem1,elem2) => 
      elem1.percent > elem2.percent ? -1: 1);
}
    console.log(sort([
        { book: "Cather in the Rye", readStatus: true, percent: 40},
        { book: "Animal farm", readStatus: true, percent: 20},
        { book: "Solaris", readStatus: false, percent: 90 },
        { book: "The Fall", readStatus: true, percent: 50 },
        { book: "White nights", readStatus: false, percent: 60 } ,
        
        { book:"After dark", readStatus: true, percent: 70 }
        ]))


// Problem 4. Given an array and a number N.  Write a recursive function that rotates an array N
//  places to the left. (Hint: to add element to the beginning use arr.unshift())

function shiftElements(array, n) {
    if (n === 0 || n === array.length) {
        return array;
    } 
    let el = array.pop();
    array.unshift(el); 
    n++;    
    return shiftElements(array,n);
}

console.log(shiftElements(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'], 3))




// Problem 7. Create constructor function which instances would be objects with already
//  implemented method &quot;map&quot; (like Array.map) .



function ObjectImplMap() {
    this.map = function(func){
        if(typeof func !== 'function'){
            throw new TypeError(func + " is not a function");
        }
        let newObj = {};
        for (let key in this){     
            if(typeof this[key] !== "function") {
                newObj[key] = func(this[key],key, this);
            }
        } return newObj;
    }
}

let newObj = new ObjectImplMap();
newObj.name = "John";
newObj.surname = "Bonhem";
let result = newObj.map((value,key) => {
    return value + key;
});
console.log(result);



