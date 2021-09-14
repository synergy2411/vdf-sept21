// Object - Unordered Collection; property name and value pair

// - Literal

// Primitive Types : String, Number, Boolean, Date
// Reference Types : Objects, Arrays, Functions

var myBooks = ["Book1", "Book2", "Book3"];

// var box = {
//     width : 6,
//     heigth : 8,
//     books : myBooks,
//     addBook : function(book){
//         this.books.push(book)
//     }
// }
// box.volume = box.width * box.heigth;

// box.addBook("Book4")
// console.log(box.books.length);       // 4
// console.log(myBooks.length);        // 4


// var a = {name : "Foo"}
// var b = a;

// b.name = "Bar";
// console.log(a.name);            // "Bar"







// - Contructor : Similar types of objects

// function Person(firstName, lastName){
//     // var this = {}
//     this.firstName = firstName;
//     this.lastName = lastName;
    // this.getFullName = function(){
    //     return this.firstName + " " + this.lastName; 
    // }
    // return this;
// }

// Person.prototype.getFullName = function(){
//     return this.lastName + " " + this.firstName;
// }


// var foo = new Person("Foo", "Bar");
// console.log(foo.getFullName())
// var baz = new Person("Baz", "Bam");
// console.log(baz.getFullName())

// Prototype : blueprint for objects




















// - Instance : Object inheritance; Object.create()

var Shoe = {
    size : 8
}

var magicShoe = Object.create(Shoe)
magicShoe.size = 10;
console.log(magicShoe);         // { }
console.log("Shoe : ", Shoe);         // { }
console.log(magicShoe.size);        // ?

console.log(Shoe.isPrototypeOf(magicShoe));     // 
console.log(magicShoe.isPrototypeOf(Shoe));     // 
console.log(Object.prototype.isPrototypeOf(Shoe));      // ?   
console.log(Object.prototype.isPrototypeOf(magicShoe));      // ?   





// var str = "Sample String";
// // var str = new String("Sample String")
// console.log(str.length);        // ?