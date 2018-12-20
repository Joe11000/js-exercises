// typeof Operator -  returns the type of a variable, object, function or expression:
  // typeof "John"                 // Returns string 
  // typeof 3.14                   // Returns number
  // typeof NaN                    // Returns number
  // typeof false                  // Returns boolean
  // typeof [1, 2, 3, 4]           // Returns object
  // typeof {name:'John', age:34}  // Returns object
  // typeof new Date()             // Returns object
  // typeof function () {}         // Returns function
  // typeof myCar                  // Returns undefined (if myCar is not declared)
  // typeof null                   // Returns object


// In Operator
  
    // var cars = ["Saab", "Volvo", "BMW"];
    // "Saab" in cars          // Returns false (specify the index number instead of value)
    // 0 in cars               // Returns true
    // 1 in cars               // Returns true
    // 4 in cars               // Returns false (does not exist)
    // "length" in cars        // Returns true  (length is an Array property)

    // // Objects
    // var person = {firstName:"John", lastName:"Doe", age:50};
    // "firstName" in person   // Returns true
    // "age" in person         // Returns true

    // // Predefined objects
    // "PI" in Math            // Returns true
    // "NaN" in Number         // Returns true
    // "length" in String      // Returns true