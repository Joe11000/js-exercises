  // Initialize an address object first using a 
  // factory function and then a constructor function


// Factory Function
  function createAddress(street, city, zipCode) {
    return { street, city, zipCode }
  }

  // Constructor Function
  function Address(street, city, zipCode){
    this.street = street
    this.city = city
    this.zipCode = zipCode
  }

  const address_1 = createAddress('1102 North Damen',  'Chicago', 60622 );
  const address_2 = new Address('1102 North Damen',  'Chicago', 60622 );

  console.log(address_1)
  console.log(address_2)