/*The event loop continuously checks the call stack to see if there are any functions that needs to run. While doing so 
 it adds any function call it finds and executes each one in order. The call stack is LIFO (last in first out).
 The event loop on every iteration looks if there is something on the call stack and executes it until the stack is empty. 
 The event loop is important to keep in mind when considering recursion. 

 Recursion means a function can call itself. To do so, need a named function expression, ie 
 function doSomething() {} 
 
 The named function expression will allow me to call doSomething inside doSomething.
 
 Calculating the factorial for a number is an example to explain recursion and the event loop. 

 A factorial is a function that multiplies a number by every number below it. For example 5!= 5*4*3*2*1=120. The 
 function is used to find the number of ways “n” objects can be arranged. The factorial n! gives the number of ways 
 in which n objects can be permuted.  5 factorial can be interpreted as saying there ae 120 ways to arrange the 
 numbers 1 thru 5 (1,2,3,4,5), (1,3,4,5,2), (5,3,2,1,4)...

 Factorial is the number we get by multiplying the number for (number - 1), (number - 2), and so on until we reach 
 the number 1.
 */

/*   n >= 1 ? n * factorial(n - 1) : 1  
     ? is a ternary operator, which is a succint way to express conditionals 
     
     The condition is evaluated as a boolean, and upon result, the operator runs the first expression 
     (if condition is true) or second condition (if condition is false)
     <condition> ? <expression> : <expression>    

     n >= 1 ? n * factorial(n - 1) : 1  means:
     if n is greater/equal to 1 then run first expression:
         n * factorial(n-1)
     if n is not greater/equal to 1 then run second expression:
        1      
    
    using arrow function and calling factorial inside factorial. 
    Recursion method will have several nested calls. If n = 5, (calling factorial 5 times within factorial function)

    1st iteration calls the factorial function and will return 4 factorial(5-1) 
    2nd iteration calls the factorial function and will return 3 factorial(4-1)
    3rd iteration calls the factorial function and will return 2 factorial(3-1)
    4th iteration calls the factorial function and will return 1 factorial(2-1)
    5th iteration calls the factorial function and will return 0 factorial(1-1)

    So each time the function is called, each return value is placed in the call stack.  
    To sum up all the calls in one line:
    5 * (5-1) * (4-1) * (3-1) * (2-1) = 120
*/
let factorial = (n) => {
    if (n<0)  //if number is less than 1, reject/no factorial
        return -1
    else if(n == 0) //if number is 0, factorial is 1
        return 1
    else { return n >= 1 ? n * factorial(n - 1) : 1  }  //otherwise, call recursive procedure
  }
  console.log(factorial(0)) 
  console.log(factorial(2)) 
  console.log(factorial(3)) 
  console.log(factorial(4))
  console.log(factorial(5))

/* Can also use name function expression: 

function factorial(n) {
  return n >= 1 ? n * factorial(n - 1) : 1
}

factorial(1) 
factorial(2) 
factorial(3) 
factorial(4) 

*/