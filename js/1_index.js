 String // string
Number // number
Boolean // bool
Symbol // string
typeof Null // object
typeof Undefined // undefined

// for..in for each property in object
// for..of for each value in array

// Speeding Example
  // function checkSpeed(speed){
  //   if(typeof speed !== 'number') return NaN;

  //   const _current_speed_limit = 70;
  //   const _speed_per_point = 5;
  //   const _points_to_suspend_license = 12;

  //   if(speed < (_current_speed_limit + _speed_per_point) ) {
  //     return 'fine';
  //   }

  //   let _speed_over_legal_limit = speed - _current_speed_limit;
  //   const points = Math.floor(_speed_over_legal_limit / _speed_per_point)

  //   if(points >= _points_to_suspend_license){
  //     return `${points} point speeding ticket and a suspended license`    
  //   }
  //   else {
  //     return `${points} point speeding ticket`
  //   }
  // }
  // console.log( checkSpeed(1180) )


// number of even numbers
  // function showNumber(num){
  //   for(let i = 0; i <= num * 2; i++){
  //     const message = i % 2 == 0 ? 'EVEN' : 'ODD'
  //     console.log(`${i} ${message}`)
  //   }
  // }
  // showNumber(5)


// Falsy Counter
  // falsy values : false, undefined, null, '', 0, Nan

  // function countTruthy(val_arr){
  //   let counter = 0;

  //   for(let val of val_arr) {
  //     if(val) {
  //       counter++
  //     }
  //   }
  //   return counter;
  // }
  // console.log( countTruthy([0,1,2,false,undefined,null,'',0,NaN]) == 2  )


  // output only properties from object that have string value
    // const movie = {
    //   title: 'a',
    //   releaseYear: 2018, 
    //   rating: 4.5,
    //   director: 'b',
    // }
    // showProperties(movie);
    // function showProperties(obj){
    //   for(let prop in movie){
    //     if(typeof movie[prop] === 'string')
    //       console.log(`${prop} ${movie[prop]}`)
    //   }
    // }


// Add sum of multiples of 2 arguments up to limit
  // function sum(limit, a, b) {
  //   let _sum = 0;

  //   for(let i = 0; i <= limit; i++){
  //     if(i % a == 0  || i % b == 0){
  //       _sum += i;
  //     }
  //   }
  //   return _sum;
  // }

  // console.log(sum(10,3,5))


  //   const grades = [86, 88 ,99,  100];
  // calculate average grade  score and grade letter

  //   function calculateAverage(arr) { 
  //     const sum = grades.reduce((sum, num) => { return (sum + num)});
  //     return (sum / arr.length)

  //   }

  //   function averageGrade(grades){
  //     const _average_grade_score = Math.floor( calculateAverage(grades) );

  //     let _overall_grade_letter = null;

  //       if(_average_grade_score < 60) _overall_grade_letter =  'F';
  //       else if(_average_grade_score < 70) _overall_grade_letter =  'D';
  //       else if(_average_grade_score < 80) _overall_grade_letter =  'C';
  //       else if(_average_grade_score < 90) _overall_grade_letter =  'B';
  //       else if(_average_grade_score <= 100) _overall_grade_letter =  'A';

  // return(`${_overall_grade_letter} - ${_average_grade_score}`)
  //   }
  // console.log( averageGrade(grades) )