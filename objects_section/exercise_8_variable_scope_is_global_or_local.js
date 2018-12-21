// The Take Away is : Don't use var because it has function scope and not the local block scope

// var is confined to anywhere in the containing function scope and gets hoisted to the top of the function 
// let and const are confined to block scope

// create block scope variable 'i'
function start1(){
  for(let i = 0; i < 5; i++){
    console.log(i)
  }
  try{
    console.log(i)
  }
  catch(e){
    console.log('test_1', true)
  }
}
start1();

// create function scope variable 'i'
function start1(){
  for(var i = 0; i < 5; i++){
    console.log(i)
  }

  console.log('test_2', i === 5)
}
start1();

//////////////// Problem 2 is using 'var' with global variables. It attaches that global variable it to the window object
var global_variable_attached_to_window = 'red'
let global_variable_not_attached_to_window = 'blue'

// global function not encapsulated in a module and is accessable from the browsers window
function sayHi(){

}
