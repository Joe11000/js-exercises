const circle = {
  radius: 1,
  draw() {
      console.log('draw')
  }
}

for(let key in circle){
  console.log(key)
}

// for..of can only be used with iterables like arrays and maps. Objects are not iterable
for(let key of Object.keys(circle) ){
  console.log(key)
}
for(let key of Object.entries(circle) ){
  console.log(key[0], key[1])
}

// use the 'in' operator to see if object has property
if('radius' in circle) {
  console.log('yes, radius is in circle')
}

