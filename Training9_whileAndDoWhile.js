// Training JS #9: loop statement --while and do..while
// ==========================================================================================================

// If you want your code to do a lot of similar work, a loop statement is a good choice. For example, if we need to calculate the cumulative value from 1 to 10, we can write code like this:

// function sum1_10(){
//   return 1+2+3+4+5+6+7+8+9+10;
// }
// Wow~~,looks very cool! But if we need to calculate the cumulative value from 1 to 100, the code becomes:

// function sum1_100(){
//   return 1+2+3+4+5+6+7+8+9+10+11+12+13+14+15+16+17+18+19+20+21+22+23+24+25
//   +26+27+28+29+30+31+32+33+34+35+36+37+38+39+40+41+42+43+44+45+46+47+48+49+50
//   +51+52+53+54+55+56+57+58+59+60+61+62+63+64+65+66+67+68+69+70+71+72+73+74+75
//   +76+77+78+79+80+81+82+83+84+85+86+87+88+89+90+91+92+93+94+95+96+97+98+99+100;
// }
// Do you feel a bit tired? We can use a loop statement to do it:

// function sum1_100(){
//   var sum=0,num=1;    //Initialize two variables sum and num
//   while (num<=100){   //Determine the expression in brackets, while true, 
//                       //run the code block one time, while false, break the loop
//     sum=sum+num;      //Each time num will be added to the current value of sum
//                       //It can be simplified as:  sum+=num
//     num=num+1;        //Each time the value of num increases by 1
//                       //It can be simplified as:  num++
//   }
//   return sum;         //return the final cumulative value
// }
// The do..while is a variant of while. The example above can be written like this:

// function sum1_100(){
//   var sum=0,num=1;
//   do{
//     sum+=num;
//     num++;
//   }while (num<=100)
//   return sum;
// }
// while judges the condition at the beginning before executing its code, so if the condition is false the code inside the while loop is never executed. In contrast, do..while always runs once, and then starts checking the condition after that.

// Finally, it is worth mentioning: Do not forget to change the value of the variable (for conditional expressions), otherwise it will turn into an infinite loop.

// Ok, lesson is over. Let us do a task with while.


// Task
// Complete function padIt, which accepts 2 parameters:

// str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
// n: a number indicating how many times to pad the string.
// Behaviour
// You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

// Finally, return the padded string.

// =============================================================================================================
// Exercise:

function padIt(str, n) {
    let result = str;
    let i = 0;

    while (i < n) {
        if (i % 2 === 0) {
            result = `*${result}`
        } else {
            result = `${result}*`
        }
        i += 1;
    }
    return (result);
}

// TO call on the function use the arguments below:
const inputString = "a";
const asteriskCount = 10;

const paddedString = padIt(inputString, asteriskCount);
console.log(paddedString);


// OTHER SOLUTIONS AND REFACTORED:

// Solution 1:
function padIt(str, n) {
    while (n > 0) {
        if (n % 2 === 0) {
            str = str + "*";
        } else {
            str = "*" + str;
        }
        n--;
    }
    return str;
}

// Solution 2:
function padIt(str, n) {
    while (n > 0) {
        str = n-- % 2 ? '*' + str : str + '*';
    }
    return str;
}

// ========================================================================================================================
// Other examples of while loop:
let i = 0; //initializer

while (i <= 10) { //condition
    console.log(i); //code block
    i++  // final expression
}

const colors = ["red", "blue", "yellow", "orange", "purple"]; //Array of colors

let color = 0; //initializer

while (color < colors.length) { // condition
    console.log(`${colors[color]}`); //first colors is the name of the array that we are accessing data, [colors] is the index that we are accessing from the array.
    color++; //incrementing it
}


//=================================================================================================================================
// Other examples of DO..While loop:
// difference between while and do..while is do..while loop is executed AT LEAST once even if condition is not met.
// best practice to figure out which loop to use: FOR LOOP = U KNOW ahead of time how many exact loops u have to do. u do while and do..while loop when number of loops or iterations are unknown.

let j = 0;

do {
    console.log(`The number is ${j}`);
    j++;
} while (j <= 10) {

}

// Use a while loop to write out the following sentence in console: " the speed of the car is xMPH" (where x is the number of miles per hour). start at 0 and go all the way to 100 mph in increments of 10.
let mph = 0;

while (mph <= 100) {
    console.log(`The speed of the car is ${mph}mph!`);
    mph += 10;
}
console.log("number 1 finished")


let a = 1;
let b = 10;

do {
    console.log(a);
    a++;
} while (a <= b) {

}