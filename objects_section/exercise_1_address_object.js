// Exercise 1
// using object literal syntax to initialize an address object
  let address = {
    street: '1102 North Damen',
    city: 'Chicago',
    zipCode: 60622,
  }

  function showAddress(address) {
    for(let prop in address) {
      console.log(prop, address[prop])
    }
  }

  showAddress(address);