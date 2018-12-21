// create a function name sum that takes a varying number of args and return their sum

function sum(...args){
  return args.flat().reduce((sum, number) => {
    return sum + number
  })
}
console.log( sum(1,2,3,4,5) === 15 )
console.log( sum([1,2,3,4,5]) === 15 )