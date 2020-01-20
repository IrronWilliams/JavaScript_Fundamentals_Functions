/*
An Immediately-invoked Function Expression (IIFE) is a way to execute functions immediately, as soon as they are 
created.

IIFEs are very useful because they don’t pollute the global object, and they are a simple way to isolate variables 
declarations. 
*/


//Basically have a function defined inside parentheses, and then append () to execute that function: (/* function */)().
//The wrapping parentheses are actually what make the function, internally, be considered an expression. 
//Otherwise, the function declaration would be invalid, because a name wasn't specified. 
//Function declarations want a name, while function expressions do not require it.


//An IIFE can be named regular functions (not arrow functions). The function 
//does not “leak” to the global scope, and it cannot be invoked again after its execution
(function doSomething() {
    /* */
  })()
  
  