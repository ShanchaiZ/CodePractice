// Training JS #12: loop statement --for..in and for..of
// ========================================================================================================

// In lesson #11, we learned that the for loop can be used to traverse an array. If we want to traverse an object, we can use a variant of the for: for..in. This can traverse all the keys of the object. An example:

// function showObjectKeys(obj){
//   for (var key in obj){
//     console.log(key);
//   }
// }
// function showObjectValues(obj){
//   for (var key in obj){
//     console.log(obj[key]);
//   }
// }
// var ob={item1:"This",item2:"is",item3:"an",item4:"example"};
// console.log("keys of ob:")
// showObjectKeys(ob);
// console.log("values of ob:")
// showObjectValues(ob);
// Code results:

// keys of ob:
// item1
// item2
// item3
// item4
// values of ob:
// This
// is
// an
// example
// for..in can also be used with arrays. Modifying the code above:

// function showObjectKeys(obj){
//   for (var key in obj){
//     console.log(key);
//   }
// }
// function showObjectValues(obj){
//   for (var key in obj){
//     console.log(obj[key]);
//   }
// }
// var arr=["one","two","three"];
// console.log("keys of arr:")
// showObjectKeys(arr);
// console.log("values of arr:")
// showObjectValues(arr);
// Code results:

// keys of arr:
// 0
// 1
// 2
// values of arr:
// one
// two
// three
// As you can see, the keys are the indices of the array elements. Important: When using for..in with an array, the key (index) is always a string, not a number. In the example above, the keys are "0", "1", and "2". We can't see the quotes because console.log() doesn't show them.

// Although for..in can be used to traverse the array, this is discouraged because in some cases the order may be unexpected. So it's recommended that you use another variant for this: for..of (new in ES6). for..of can traverse all the values of the array (without accessing them through their index). Function showObjectValues() from above can be modified like this:

// function showArrayValues(arr){
//   for (var value of arr){
//     console.log(value);
//   }
// }
// Ok, lesson is over, let's do a task with for..in.

// Task
// The function giveMeFive accepts 1 parameter, obj, which is an object.

// Create an array (which you will eventually return). Then, traverse obj, checking each key and value. If the length of the key is equal to 5, then push the key to your array. Separately, if the length of the value is equal to 5, then push the value to your array.

// At the end, return your array.

// You should use for..in in your code, otherwise your solution may not pass this kata.

// ===============================================================================================================
// Exercise:

// PseudoCode:
// 1. create an array:
const phrase = [
    {
        "This": "apple",
        "taste": "like",
        "seven": "bad",
        "sour": "plums"
    }
]
// 2. traverse the object, checking each key and value => using for..in
for (let phrase in obj) {
}
// 3. if length of key === 5 then PUSH the KEY to your array.
if (key[i] === 5) {
    phrase.push(obj[i])
}

// 4. if length of value === 5 then PUSH the value to the Array.
if (value === 5) {
    phrase.push(obj[i])
}
// 5. return the Array
return phrase;

// first attempt:
for (let phrase in obj) {
    if (key[i] === 5) {
        phrase.push(obj[i]);
    };
    if (value === 5) {
        phrase.push(obj[i]);
    };
    return phrase;
}