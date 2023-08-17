// Training JS #4: Basic data types--Array
// ==========================================================================================================
// In javascript, Array is one of basic data types. To define an empty array, you can use var arr=new Array() or var arr=[]

// Array has an attribute: length, if there is an array named arr, using arr.length to know how many elements are contained in the array.

// Each element in the array has an index, use arr[index] to get the value of element.

// index always start from 0, so the first element of array is arr[0], the last element of array is arr[arr.length-1].

// If we want to add new elements to the array, you can use the array method: push(). It can add an element to the end of the array. Instead, if we want to remove the last element of the array, you can use the array method: pop(). for example:

// var arr=[1,2,3];     //define an array arr contains elements 1 2 3
// arr.push(4);         //add element 4 to arr
// console.log(arr)     //[1,2,3,4]
// arr.pop();           //remove the last element from arr
// console.log(arr)     //[1,2,3]


// Task
// I've written five functions. Each function receives a parameter arr which is an array. Complete the functions using arr inside the function bodies.

// 1. getLength(arr)    //should return length of arr
// 2. getFirst(arr)     //should return the first element of arr
// 3. getLast(arr)      //should return the last element of arr
// 4. pushElement(arr)  //should push an element to arr, and then return arr
// 5. popElement(arr)   //should pop an element from arr, and then return arr
// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

// =========================================================================================================================
// Exercise:
var arr = [1, 2, 3];

function getLength(arr) {
    //return length of arr
    console.log (arr.length)
}
getLength(arr);

function getFirst(arr) {
    //return the first element of arr
    console.log (arr[0]);
}
getFirst(arr); 

function getLast(arr) {
    //return the last element of arr
    console.log (arr[arr.length - 1])
}
getLast(arr);

function pushElement(arr) {
    var el = "a";
    //push el to arr
    arr.push(el);
    console.log (arr);
}
pushElement(arr);

function popElement(arr) {
    //pop an element from arr
    arr.pop();
    console.log (arr)
}
popElement(arr);

// Note: change console.log to return to make the solutions work!

// Extra:
// Refactored the code above to an arrow notation:
const getLengthRefactor = array => array.length;

const getFirstRefactor = array => array[0];

const getLastRefactor = array => array[array.length - 1];

const pushElementRefactor = array => array.concat(0);

const popElementRefactor = array => array.splice(0, array.length - 1);