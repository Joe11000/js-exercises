// These are a few of the built in objects in js

// // 2 Types of Strings; primative and object
//   // String primative
//   const message_1 = 'This is my first message';
//   // using message. notation, in the background js wraps the primative in 

//   // String Object
//   const message_2 = new String('This is my second message');
//   message_2.includes('This') // true
//   message_2.includes('NOT') // false
//   message_2.length 
//   message_2.endsWith('age') // true
//   message_2.indexOf('my')
//   message_2.replace('second', 'third')
//   message_2.toUpperCase()
//   message_2.trim()
//   message_2.split(' ')
  
//   // Template Literals
//   let message_3 = 
// `Hi John, 
// Thank you for meeting me yesterday.
  
// Hope all is well,
// Joe Noonan`


// Date Objects
  const now = new Date()  
  const date_1 = new Date('May 11 2018 09:08')
  const date_2 = new Date(2018, 4, 11, 9)
  // useful date methods
  now.setFullYear(2017);
  now.toDateString()
  now.toTimeString()
  now.toISOString()

  