/* Functions can be defined inside other functions.  The nested function is scoped to the outside function, 
and cannot be called from the outside.

*/

//dosomethingelse() is not reachable from outside dosomething().  Attempting to reach dosomethingelse() from the
//outside will result in an error 'ReferenceError: dosomethingelse is not defined'
let dosomething = () => {
    let dosomethingelse = () => {
      //some code here
    }
    dosomethingelse()
    return 'test'
  }
  
  dosomething()

  /* This is very useful because we can create encapsulated code that is limited in its scope by the outer function
   it’s defined in. Could have 2 function define a function with the same name, inside them. And not worry about 
   overwriting existing functions and variables defined inside other functions.

 */

let bark = () => {
    let dosomethingelse = () => {
      //some code here
    }
    dosomethingelse()
    return 'test'
  }
  
  
let sleep = () => {
    let dosomethingelse = () => {
      //some code here
    }
    dosomethingelse()
    return 'test'
  }
  