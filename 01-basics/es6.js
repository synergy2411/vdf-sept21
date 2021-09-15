// 2015 - ECMA Community - ES6 | ES2015 | Latest JavaScript
// ES6 Features - 
// - Arrow functions : () =>
// - With Curly braces : {} - two or more statements in function body
// - Without Curly braces: for one line functions
// - Don't have 'this' keyword

// - 'this' refers to What? - Current Object / Current Context - invoking Object

// var user = {
//     firstName : "Foo",
//     lastName : "Bar",
//     getFullName : function(){
//         var that = this;
//         console.log(this);      // USER 2
//         return function(){
//             return that.firstName + " " + that.lastName 
//         }
//         // return () => this.firstName + ", " + this.lastName
//     }
// }
// var nestedFunc = user.getFullName()
// console.log(nestedFunc());      // ?

// var user2 = {
//     firstName : "FirstName 2",
//     lastName : "LastName 2"
// }
// var boundFunc = user.getFullName.bind(user2)
// var fn = boundFunc()
// console.log("Bound Func : ", fn())
// console.log("Bound Func : ", boundFunc())


// ES5 way
// var numbers = [1,2,3,4,5]

// var doublearray = numbers.map(function(value){
//     return value * 2
// })

// console.log(doublearray);

// ES6 way

// var doubleArray = numbers.map(value => value * 2)
// console.log(doubleArray);



// - Collection Destructuring : Array | Objects

// var fruits = ["Apple", "Banana", "Orange"];

// var [ f1, f2, f3, f4 ] = fruits;
// console.log(f4);        // undefined

// var user = {
//     email : "test@test.com",
//     age : 32
// }
// var {age, email} = user;

// console.log(email); 


// var user = {
//     email : "test@test.com",
//     age : 32,
//     address : { street : "", city : ""}, 
//     friends : ["Foo", "Bar","Bam"]
// }

// var {
//     email,
//     age,
//     address : { street, city },
//     friends : [f1, f2, f3]
// } = user;

// age = 40;
// console.log(user.age);      // 32

// console.log(email, age, street, city, f2, f3);



// var users = [
//     {email : "test1@test.com", age : 32},
//     {email : "test2@test.com", age : 34},
//     {email : "test3@test.com", age : 36},
// ]

// var [
//     {email : e1, age: a1},
//     {email : e2, age: a2},
//     {email : e3, age: a3}
// ] = users;

// console.log(e1, e2, e3, a1, a2, a3); // ?






// - Block Scope Variables => { }

// - let : Rest other variables
// - const : Constant Variables

// const LOAD= "LOAD";
// LOAD = "FLASHING"

// const user = Object.freeze({
//     email : "test@test.com"
// })

// Not Valid for Const
// user = {
//     email : "newEmail@test.com"
// }


// user.email = "test1@test.com"

// console.log(user.email);

// user.email = "test2@test.com"

// console.log(user.email);

// function display(arr){
//     if(arr.length > 2){
//         let LOAD = "LOADING"
//         console.log(FLASH);             // undefined
//     }else{
//         let FLASH = "FLASHING"
//     }
// }

// display([1,2,3,4]);













// - Template String Syntax - Back Tick (``)
// - Multiline strings without (+)| (\n)
// - Embed variable within string without (+)

// let username = "Foo"
// let str = `Hello from ${username},
// How are you?
// `

// console.log(str);












// - Rest / Spread Operators (...)
// Rest : Creates the collection from individual items; 
//  - Last argument in Function Argument list

// function display(email, ...args){
//     console.log(args[0]);           //
// }

// display("test@test.com")
// display("test@test.com", 32)
// display("test@test.com", 32, true)



// Spread : Spreads the collection into individual items; Use with Collection

// let numbers = [3,4,5];
// let newNumbers = [1, 2, ...numbers, 6, 7, 8];

// console.log(newNumbers);            // [1,2, [3,4,5] ,6,7,8]


// let user = {
//     email  : "test@test.com",
//     age : 32
// }

// let newUser = {
//     ...user,
//     age : 40,
//     name  :"Foo"
// }

// console.log(newUser);       // {email : "test@test.com" , age : 32}

// const newUser2 = Object.assign({}, user, {age : 44}, {name : "Bam"})

// console.log("New User 2 : ", newUser2);             // ?










// - Class

// class Student{

//     constructor(email, age){
//         this.email = email;
//         this.age = age;
//     }
//     sayHello(){
//         return `Hello ${this.email}!!`
//     }

// }

// let foo = new Student("foo@test.com", 21);
// console.log(foo.sayHello());














// - Module system
// - CommonJS Module System
    // - Export the module functionality
        // - module.exports
    // - Import the module functionality
        // - require()

        const { number } = require("yargs")
const { mul, add } = require("./abc")

        console.log(mul(2,4))
        console.log(add(2,4))


// - ES6 Module System
    // import / export
















// - Map / Set







// const numbers = [1,2,3,4,5]

// const num = numbers.find((value) => {
//     console.log(value);
//     return value === 3;
// })

// console.log(num)

// findIndex, map, forEach, some, filter, every etc