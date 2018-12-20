// Type differences
// Value Types aka Primatives       Reference Types
//   Number                         Object
//   Null                           Array 
//   String                         Function
//   Symbol 
//   Boolean 
//   Undefined
//   (Copied and passed by value)   (Copied and passed by reference)



// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour

// factory function produces objects
function createCircle(radius){

  // Object Literal syntax inside of a factory function
  const _circle = {
    radius: 2,
    draw: thing => { console.log('draw') },
  }

  return _circle
}
createCircle(2)



// Constructor Function in camelNotation
function Circle(radius) {
  // 'this' is a reference to the object that is executing this peice of code
  if(typeof radius != 'number' || radius <= 0) { throw new Error('radius must be a postitive number')}
  this.radius = radius;
  this.draw = () => {console.log('draw')}

}

const circle = new Circle(2)


circle.constructor // property that references the function was used to create that object
Circle.constructor // Function() {[native code]}
let a = {}
a.constructor // Object.new() function


// FUNCTIONS ARE OBJECTS





Circle1 = new Function('radius, x, y ', `
this.radius = 4
this.draw = function()  {console.log('draw the circle of size ${this.radius}')};
`)
let _circle_1 = new Circle1(1, 1, 1)
_circle_1.draw()

Circle1.call(window, 1, 1, 1) // is the same as   Circle.apply(window, [1,1,1])
const another1 = Circle1(1, 1, 1)
  
Circle1.call({}, 1, 1, 1) // is the same as  Circle1.call({}, [1,1,1])
const another2 = new Circle1(1, 1, 1)


