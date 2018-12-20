let priceRanges = [
                    {label: '$',   tooltip: 'Inexpensive', minPerPerson: 0,  maxPerPerson: 10 },
                    {label: '$$',  tooltip: 'Moderate',    minPerPerson: 11, maxPerPerson: 20 },
                    {label: '$$$', tooltip: 'Expensive',   minPerPerson: 21, maxPerPerson: 50 },
                  ]

  let restaurants = [{
    averagePerPerson: 5
  }]
// // constructor function
// function Restaurant({name, price})
// {
//   this.name = name;
//   this.price = price;

//   const _medium_price_range = 70;
//   const _low_price_range = 50;

//   if(this.price > _medium_price_range) {
//     this.category = '$$$'
//   }
//   else if ((this.price > _low_price_range)) {
//     this.category = '$$'
//   }
//   else {
//     this.category = '$'
//   }
// }



console.log(new PriceRange({}))