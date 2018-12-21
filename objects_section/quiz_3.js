function countOccurences(array, searchElement) {
  if(!Array.isArray(array)) {
    throw new Error('Input wasn\'t an array containing integers')
  }

  return array.reduce((accumulator, current) => {
    const occurence = (current === searchElement) ? 1 : 0;
    return accumulator + occurence
  }, 0)
}

try {
  // const numbers = [1,2,3,4]
  const numbers = undefined
  
  const count = countOccurences(numbers, 1);
  console.log(count === 1);
}
catch(e){
  console.log(e.message)
}


