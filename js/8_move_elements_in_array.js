const numbers = [1,2,3,4]

const output = move(numbers, 1, -1)

console.log(output);

function move(array, index, offset){
  let result = [...array]

  let element_to_move = result.splice(index, 1)[0]
  result.splice(index + offset , 0, element_to_move) 
  return(result)
}
