function factoryFunction(){
  let a = 1;
  let b = 1;
  return({ a, b })
}

const ConstructorFunction = function(){
  debugger
  this.sum = function() {   debugger; return (this.a + this.b )}
  this.divide = function() {   debugger; return (this.a / this.b) }
}.bind(factoryFunction())

let math = new ConstructorFunction()


function TestRunner(){

  this.symbols = { pass: '✅' , fail: '🛑' };
  this.test_number = 0;
  this.test = (bool) => {
    debugger
    document.write( `<p>test_${++this.test_number} : ${bool ? this.symbols.pass : this.symbols.fail } </p>`)
  }
}


const test_runner = new TestRunner() 
test_runner.test(math.sum() === 2)
test_runner.test(math.divide() === 1)