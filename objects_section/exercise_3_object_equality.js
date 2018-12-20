  // Constructor Function
  function Address(street, city, zipCode){
    this.street = street
    this.city = city
    this.zipCode = zipCode
  }

  const address_1 = new Address('1102 North Damen', 'Chicago', 60622 );
  const address_2 = new Address('1102 North Damen', 'Chicago', 60622 );
  const address_3 = address_1

  // is the shallow comparison of the 2 objects equal
  function areEqual(address_1, address_2) {
    for(let i in address_1) {
      if(address_1[i] !== address_2[i])
        return false
    }
    return true
  }

  // output: true if two addresses referencing the same object
  function areSame(address_1, address_2) {
    return( address_1 === address_2 )
  }

  console.log( areEqual(address_1, address_2) === true)
  console.log( areSame(address_1, address_2) === false )
  console.log( areSame(address_1, address_3) === true )
