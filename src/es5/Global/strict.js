"use strict";

// Using a variable, without declaring it, is not allowed
// x = 3.14;

//function myFunction() {
// y = 3.14;
//}
// myFunction();

// Using an object, without declaring it, is not allowed
// x = { p1: 10, p2: 20 };

// Deleting a variable (or object) is not allowed
// var x = 3.14;
// delete x;

// Deleting a function is not allowed
// function x(p1, p2) { };
// delete x;

// Duplicating a parameter name is not allowed
// function x(p1, p1) { };

// Octal numeric literals are not allowed
// var x = 010;

// Octal escape characters are not allowed
// var x = "\010";

// riting to a read - only property is not allowe
// var obj = {};
// Object.defineProperty(obj, "x", { value: 0, writable: false });
// obj.x = 3.14;

// Writing to a get - only property is not allowed
// var obj = { get x() { return 0 } };
// obj.x = 3.14;

// Deleting an undeletable property is not allowed
// delete Object.prototype;

// The string "eval" cannot be used as a variable
// var eval = 3.14;

// The string "arguments" cannot be used as a variable
// var arguments = 3.14;

// The with statement is not allowed
// with (Math) { x = cos(2) };

//For security reasons, eval() is not allowed to create variables in the scope
// from which it was called
// eval("var x = 2");
// alert(x);

