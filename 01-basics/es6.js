// 2015 - ECMA Community - ES6 | ES2015 | Latest JavaScript
// ES6 Features - 
// - Arrow functions : () =>
// - With Curly braces : {} - two or more statements in function body
// - Without Curly braces: for one line functions
// - Don't have 'this' keyword

// - 'this' refers to What? - Current Object / Current Context - invoking Object

var user = {
    firstName : "Foo",
    lastName : "Bar",
    getFullName : function(){
        var that = this;
        console.log(this);      // USER 2
        return function(){
            return that.firstName + " " + that.lastName 
        }
        // return () => this.firstName + ", " + this.lastName
    }
}
// var nestedFunc = user.getFullName()
// console.log(nestedFunc());      // ?

var user2 = {
    firstName : "FirstName 2",
    lastName : "LastName 2"
}
var boundFunc = user.getFullName.bind(user2)
var fn = boundFunc()
console.log("Bound Func : ", fn())
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



// - Collection Destructuring 
// - Block Scope Variables
// - Template String Syntax
// - Rest / Spread Operators
// - Class
// - Module system
// - Map / Set