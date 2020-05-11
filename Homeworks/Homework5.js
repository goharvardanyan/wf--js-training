// Problem 1. Given a sorted array and an element from that array. Find the index of that
// element using binary search.



function binarySearch(array, el) {
    let startInd = 0;
    let endInd = array.length;
    while(endInd - startInd !== 0) {
        if(el === array[Math.floor((endInd + startInd) / 2)]){
            return Math.floor((endInd + startInd) / 2);
        } else if (el < array[Math.floor((startInd + endInd)/ 2)]) {
                 endInd = Math.floor((startInd + endInd) / 2);
        } else if (el > array[Math.floor((startInd + endInd)/ 2)]) {
            startInd = Math.floor((startInd + endInd) / 2) + 1;
        }  
    } 
    return -1;
}

console.log(binarySearch([1,3,5,7,9,11,13,15,17],11))





// Problem 2.

function createTree(array, resObj = {}, curId = findRoot(array,'root')) {
    let tempArr = Object.values(curId)[1];
    let tempObj = Object.values(curId)[0];
    let newObj = {};
    if (tempArr.length !== 0){
        for (let i = 0; i < tempArr.length; i++) {
            let currentId = tempArr[i];
            newObj[tempArr[i]] = {};
            createTree(array, newObj, curId = findRoot(array,currentId));
            resObj[tempObj] = newObj;
        }
        return resObj;
    } else {
        newObj[Object.values(curId)[0]] = {};
        return newObj;
    }
}

function findRoot(array, id) {
    for (let i = 0; i < array.length; i++){
        if(Object.values(array[i])[0] == id){
            return array[i];
        }
    }
}


let array = [
    {id : "root", children : [1,2]},
    {id : 1, children : [3,4]},
    {id : 2, children : [5]},
    {id : 3, children : []}, 
    {id : 4, children : [6]},
    {id : 5, children : []},
    {id : 6, children : []},
]

console.log(createTree(array));
