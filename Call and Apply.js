/* call() and apply() are two functions used to perform a very specific task: 
   to call a function and to set its 'this' value.

   A function can use the 'this' value for many different use cases. The problem is that it’s given by the 
   environment and cannot be changed from the outside, except when using call() or apply().
   When using those methods, you can pass in an additional object that will be used as 'this' in the function invoked.
   
   The functions perform the same thing, but have a difference. In call() you can pass the function parameters 
   as a comma separated list of parameters, taking as many parameters as you need.  
   In apply() you pass a single array that contains the parameters.

   When using arrow functions 'this' is not bound, so method only works with regular functions.
*/

let car = {
    brand: 'Acura',
    model: 'MDX'
  }
  
  let drive = function(from, to, miles) {
    console.log(`I drove ${miles} miles from ${from} to ${to} with my car, an ${this.brand} ${this.model}.`)
  }
  
  drive.call(car, 'New York', 'Connecticut', 373)
  drive.apply(car, ['Miami', 'Texas', 854])
  