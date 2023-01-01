//Asynchronous function -> Functions running in parallel with other functions are called asynchronous
// Eg: seTTimeout()
//With asynchronous programming, JavaScript programs can start long-running tasks, and continue running other tasks in parallell.But, asynchronus programmes are difficult to write and difficult to debug.Because of this, most modern asynchronous JavaScript methods don't use callbacks. Instead, in JavaScript, asynchronous programming is solved using Promises instead.

//setTimeout -> the functions that stops processing for a certain number of times

setTimeout(printName, 1000);

//setInterval -> the function that executes in equal interval of time

setInterval(printSurname, 1000);

function printName() { console.log("Bibek")}
function printSurname() { console.log("Poudel")}


console.log("the interpreated finished reading the code")


//In this code the line 15 executes first and then the line 7 and line 13