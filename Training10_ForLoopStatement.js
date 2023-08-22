// Training JS #10: loop statement --for
// ==================================================================================================================
// The for loop is a very frequently used loop in JS.

// Recall in lesson 9 we wrote a while loop:

// function sum1_100(){
//   var sum=0,num=1
//   while (num<=100){
//     sum+=num;
//     num++;
//   }
//   return sum;
// }
// We can rewrite it using a for loop, like this:

// function sum1_100(){
//   for (var sum=0,num=1;num<=100;num++){
//     sum+=num;
//   }
//   return sum;
// }
// As you see, there are three parts in the parentheses, separated by ";". The first part, var sum=0,num=1, is the initialization. This part will run before the loop starts. The second part, num<=100 is the conditional expression. The conditional expression is checked before the start of each time through the loop. When the value of the expression is false, the loop will be terminated. The third part, num++ will run after the code block, and is usually used for increasing and decreasing variables.

// For the example above, the running order of the code is:

//                               <--- back to part 2
//                   -------------------------------------------
//                   |                 true                    |
// var sum=0,num=1  --->  num<=100 ?  ------> code block---> num++
//                                 |  
//                            false|
//                        loop terminated
// When you need to traverse an array, you can use the for loop to access each element using its index. Here's an example:

// function displayElements(array){
//   for (var i=0;i<array.length;i++){
//     console.log(array[i]);
//   }
// }
// This function will display every element of the array on your screen.

// Ok, lesson is over, let's do a task with for.

// Task
// The function pickIt accepts 1 parameter, arr, which is an array of numbers. We need to traverse arr by using a for loop. If an element is an odd number, push it to the odd array, and if it's an even number, push it to the evenarray.

// I've defined two arrays odd and even in the function, and also wrote the return statement. Your work is to write a for loop.

// If you forgot how to push an element to an array, please refer to lesson 4.

//=========================================================================================================================================
// Exercise:

function pickIt(arr) {
    let odd = [],
        even = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2) { //if reminder is 2 then the number is odd initially
            odd.push(arr[i]);
            console.log(odd)
        } else {
            even.push(arr[i]);
            console.log(even);
        }
    }
    return ([odd, even]);
}

// Pseudocode:
// 1. we declare variables odd and even as arrays
// 2. make a for loop using the formula => iteration then conditional then increment/final statement?
// 3a. if the array element HAS A REMINDER OF 2 (meaning initial number is odd) => then push the i to the odd array.
// 3b. otherwise: push to even array at arr[i]
// 4. return both the arrays where odd is first and even is second 


// REFACTORED SOLUTIONS:

function pickIt(arr) {

    let odd = []
    let even = []

    for (var x of arr) {
        ((x % 2) ? odd : even).push(x)
    }

    return [odd, even]
}