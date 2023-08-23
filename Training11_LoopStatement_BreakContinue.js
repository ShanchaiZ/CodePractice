// Training JS #11: loop statement --break,continue
// ============================================================================================================================

// We have seen break in the switch statement, it can jump out the switch statement. it can also be used in the loop statement. an example:

// function findFirstOddNumber(arr){
//   var result;
//   for (var i=0;i<arr.length;i++){
//     if (arr[i]%2==1){
//       result=arr[i];
//       break;
//     }
//   }
//   return result;
// }
// In this example, for loop traverse the array arr. when the first odd number found, break statement will jump out the for loop.

// In the loop statement, we can use continue skipping some code. for example, the following code ignores negative values:

// function dontDisplayNegative(arr){
//   for (var i=0;i<arr.length;i++){
//     if (arr[i]<0) continue;   
//     console.log(arr[i])
//   }
// }
// In this example, console.log(arr[i]) is never executed for negative element. thanks to continue.

// Through the use of break and continue, you can make the loop statement more flexible and convenient.

// Ok, lesson is over. let's us do some task with break and continue.

// Task
// Coding in function grabDoll. function accept 1 parameter:dolls. it's a string array, a list of some dolls.

// You need traverse dolls by using for loop. If element is "Hello Kitty" or "Barbie doll", you should push it to a bag(bag is an array, I've defined in the function); if it's other strings, we should use continue skip it.

// When the bag has three element, bag is full. You should use break jump out the loop; If bag is not full, you should traverse dolls until the last element.

// Return the bag after for loop finished.

// You should use for, break and continue in your code. otherwise, your solution may not pass this kata.

// If you forgot how to push an element to array, please refer to lesson 4.

// ===================================================================================================================================
// Exercise:


// // 1. create a for loop that traverses the dolls Array
for (let i = 0; i < dolls.length; i++) {

}
// // 2. in the for loop, if there is a Hello kitty OR a barbie doll => push to bag
// // 3. otherwise continue
if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
    bag.push(dolls[i]);
} else {
    continue;
}
// // 4. WHEN bag has 3 elements in it => bag is full => break out of code.
if (bag.length === 3) {break};
// // 5. otherwise, continue for loop until 3 elements in bag.
// for (let i = 0; i< dolls.length; i++)

// Actual Code:
function grabDoll(dolls) {
    var bag = [];

    for (var i = 0; i < dolls.length; i++) {

        if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll")
            bag.push(dolls[i]);
        else
            continue;

        if (bag.length === 3) break;

    }

    return bag;
}

//Refactored and other solutions:
// ===================================================================================================

// If we want to use filter and slice method:
// we want to FILTER stuff out the stuff from old dolls array to new dolls array
// we want to slice: slice start at 0 index and end at 3 index but will not include 3. this is to show that bag array is full

// Solution 1:
// const grabDoll = dolls => //for() break continue;
//     dolls.filter(element => element == "Hello Kitty" || element == "Barbie doll")
//         .slice(0, 3)
//

// Solution 2: the Not
// function grabDoll(dolls) {
//     var bag = [];
//     for (let i = 0; i < dolls.length; i++) {
//       if (dolls[i] !== "Hello Kitty" && dolls[i] !== "Barbie doll") continue;
//       bag.push(dolls[i]);
//       if (bag.length === 3) break;
//     }
//     return bag;
//   }