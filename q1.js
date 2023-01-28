/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console

    Task 2
    - invoke the function "swap"
*/

function swap(x, y){
    // Task 1: Add code here
Let x = 5;
Let y =15;
[x,y]=[y,x];

x; // 15
y; //5

//Return -1 if x and y are non numeric, print result
If (typeof(x) != number|| typeof(y)!=number){
    Console.log (-1);}
    Else {document.getElementById(“q1”).innerHTML = “Swab value of x is “ x +” and swab value of y is ”+y;
    
}

// Task 2: Add code here
Let x = 5;
Let y =15;
function Swap (x,y){
Return (y,x);}

module.exports = swap;
