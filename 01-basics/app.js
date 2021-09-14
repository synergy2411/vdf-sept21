// Functions are first class citizens in JavaScript
// Functions are also values
// Anonymous Functions
// Function Syntax are hoisted, expressions are not.
// Function can be supplied as parameter
// Functions ca access outside scope variables
// Lexical Scoping / Scope Chaining - where the function is present
// nested fn scope -> outer fn Scope -> global scope
// Closure is the processs of binding the outer scope variable with nested functions

function buildTicket(transport){
    var numOofPass = 0;
    return function(name){
        return "Hello " + name + "\nYou are going via " + transport +
            "\nYour Ticket Id #" + (++numOofPass)
    }
}

// console.log(buildTicket("Ship"));       // nested func

var ship = buildTicket("Ship")
console.log(ship("Foo"))        // ?
console.log(ship("Bar"))        // ?

var car = buildTicket("Car")
console.log(car("Baz"))     // ?








// var test = function (){
//     var x = 4;
//     return function(){
//         return ++x;
//     }
// }

// // console.log(test())         // ?

// var nestedFunc = test()
// console.log(nestedFunc())       // 5
// console.log(nestedFunc())       // 6










// var x = 100;
// function a(){
//     // var x = 102;
//     function b(){
//         // var x = 101;
//         console.log(x);
//     }
//     b()
// }

// a()

// var x = 100;
// function b(){
//     console.log("B : ", x)          // 100
// }
// function a(){
//     var x = 200;
//     b()
// }
// a()



// var x = 200;
// function a(){
//     var x= 100;
//     // console.log(x)      // ?
//     function b(){
//         console.log("B : ", x);
//     }
//     b()
// }

// a();





// function greet(){
//     console.log("Hola")
// }
// // Higher Order Function - HOF
// function sayHello(err, cb){
//     if(err){
//         return console.log(err)
//     }
//     cb();
// }

// sayHello(new Error("Something bad happened"), greet)     // callback

// Error first, Callback last





// Function Syntax
// function add(num1, num2){
//     return num1 + num2;
// }
// console.log(add(4,5));

// Function Expressions
// var addition = function (num1, num2){
//     return num1 + num2;
// }

// console.log(addition(2,3))   //?


// JavaScript engine executes in two phases -
//  - Allocation Phase - allocates memory to functions and variables
    // -> JS Engine -> var chooseNumber = 'undefined'
//  - Execution Phase - executes code
    // -> chooseNumber = function(){return 7}
    // return chooseNumber


// function demo(){
//     var chooseNumber = function (){
//         return 7;
//     }
//     return chooseNumber;
//     var chooseNumber = function (){
//         return 12;
//     }
// }

// console.log(demo());        // [Function : ChooseNumber]
// var nestedFunc = demo();
// console.log(nestedFunc());      // 7/12


// Function Syntax vs Function Expression

// Functions Syntax : creates the hostspot into memory
// Function Expression : compiled at runtime/execution phase


// TypeScript

// var x = 100;

// console.log(typeof x);      // ?

// x = "Some String";

// console.log(typeof x);      // string

// x = {}

// x = []