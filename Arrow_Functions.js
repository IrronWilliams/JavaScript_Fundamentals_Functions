/* A function is a block of code, self contained, and run any time. A function can optionally accept parameters
and returns one value. Functions in JavaScript are objects and can be invoked (to call). Functions in JavaScript
can be assigned to a value, can be passed as arguments, and used as a return value */

//function declaration 
function doSomething(foo) {
    //do something
}

//functions can be assigned to a variable, called function expression
let doSomething2 = function(foo) {
    //do something
}

//named function expressions are similar but hold the name of the function.  
let doSomething3 = function doSomething(foo){
    //do something 
}

//ARROW functions are nice to use when working with inline functions as parameters or callbacks.  They allow you 
//to write functions with shorter syntax. With arrow functions, values are returned without having to use the return
//keyword because the return is implicit.  
let myFunction = () => {
    //do something
}

//if function body contains just a single statement, i can omit the brackets and write all on a single line.
let myFunction2 = () => doSomething()

//parameters are passed in the parenthesis 
let myFunction3 = (p1, p2) => doSomething(p1, p2)

//if have only one parameter, could omit the parenthesis completely
let myFunction4 = param => doSomething(param)

//arrow function has implicit return
let myFunction5 = () => 'test'
console.log(myFunction5())

/* 'this' and arrow functions:
the this concept varies a lot depending on the context and also varies depending on the mode of JavaScript 
(strict mode or not). arrow functions behave very differently compared to regular functions. 

*/

//When defined as a method of an object, in a regular function this refers to the object. 
//calling car.fullName() will return "Ford Fiesta".
let car = {
    model: 'Fiesta',
    manufacturer: 'Ford',
    fullName: function() {
      return `${this.manufacturer} ${this.model}`
    }
  }

/*
The this scope with arrow functions is inherited from the execution context. An arrow function does not bind this 
at all, so its value will be looked up in the call stack.  so in this code car.fullName() will not work, and will 
return the string "undefined undefined".  Due to this, arrow functions are not suited as object methods.
*/
let car2 = {
    model: 'Fiesta',
    manufacturer: 'Ford',
    fullName: () => {
      return `${this.manufacturer} ${this.model}`
    }
  }

/*
Arrow functions cannot be used as constructors either, when instantiating an object will raise a TypeError.
regular functions should be used instead, when dynamic context is not needed.
this is also a problem when handling events. DOM Event listeners set this to be the target element, and if 
you rely on this in an event handler, a regular function is necessary:

let link = document.querySelector('#link')
link.addEventListener('click', () => {
  // this === window
})

let link = document.querySelector('#link2')
link.addEventListener('click', function() {
  // this === link
})

*/


