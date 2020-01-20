/* Every function returns a value, which by default is undefined. 
Any function is terminated when its lines of code end, or when the execution flow finds a return keyword.
When JavaScript encounters this keyword it exits the function execution and gives control back to its caller.
You can only return one value.
*/

//If I pass a value, that value is returned as the result of the function:
let dosomething = () => {
  return 'testing'
}
let result = dosomething() // result === 'test'
console.log(result)

/* To simulate returning multiple values, you can return an object literal, or an array, and use a destructuring 
assignment when calling the function. */

//returning multiple values using arrays
let simulateArray = () => {
    return ['Carl', 17]
}
let [name, age] = simulateArray()
console.log(name, age)

//returning multiple values using objects
let simulateArray2 = () => {
    return {name2: 'Lisa', age2: 33}
}
let {name2, age2} = simulateArray2()
console.log(`${name2} is ${age2} years old.`)