//A function can take 0 or many parameters
let dosomething = () => {
    //do something
  }
  
let dosomethingElse = foo => {
    //do something
  }
  
let dosomethingElseAgain = (foo, bar) => {
    //do something
  }

//functions can have default values for parameters
let dosomething2 = (foo = 1, bar = 'hey') => {
    //do something   
  }
//this allows me to call a function w/o filling all the parameters
dosomething2(3)
dosomething2()

//Can wrap all arguments in an array, and use the spread operator when calling the function:
let dosomething3 = (foo = 1, bar = 'hey') => {
  //do something
}
let args = [2, 'ho!']
dosomething3(...args)

//With many parameters, remembering the order can be difficult. Using objects, destructuring allows to keep the 
//parameter names:
let dosomething4 = ({ foo = 1, bar = 'hey' }) => {
  //do something
  console.log(foo) // returns the foo value, default will be 1 or value that is passed
  console.log(bar) // returns the bar value, default will be 1 or value that is passed
}
let args2 = { foo: 4, bar: 'hello!' }
console.log(dosomething4(args2))

//With object destructuring you can provide default values, which simplifies the code
let colorize = ({ color = 'yellow' }) => {
  //do something
}

//If no object is passed when calling colorize function, can assign an empty object by default:
let spin = ({ color = 'yellow' } = {}) => {
  //do something

}

