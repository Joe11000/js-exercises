// create a circle object using object literal syntax
// has radius property
// has a read only area property

let circle = {
  radius: 3,
  get area() {
    return( Math.PI * (this.radius ** 2 ) )
  }
}

console.log(`Circle Radius : ${circle.radius}`)
console.log(`Circle Area : ${circle.area}`)
