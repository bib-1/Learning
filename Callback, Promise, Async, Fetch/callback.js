// Callbacks -> Calling functions within a function

function sum(num1, num2, callback){
    if (callback(num1))
    {
        return num1
    }
    else{
        return num2
    }
}

function isPositive(num){
    if(num > 0){
        return true
    }
}

var value = sum(1,2, isPositive)

console.log(value);